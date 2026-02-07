import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// GET - Retrieve all orders
export async function GET() {
  try {
    // Use absolute path from project root
    const projectRoot = path.join(process.cwd(), '..', '..');
    const dataDir = path.join(projectRoot, 'data');
    const ordersFile = path.join(dataDir, 'orders.json');
    
    // Create directory if it doesn't exist
    await fs.mkdir(dataDir, { recursive: true });
    
    // Create file if it doesn't exist
    try {
      await fs.access(ordersFile);
    } catch {
      await fs.writeFile(ordersFile, '[]', 'utf-8');
    }
    
    const ordersData = await fs.readFile(ordersFile, 'utf-8');
    const orders = JSON.parse(ordersData);
    
    return NextResponse.json(orders);
  } catch (error) {
    console.error('Error reading orders:', error);
    return NextResponse.json({ error: 'Failed to read orders' }, { status: 500 });
  }
}

// POST - Create new order
export async function POST(request: NextRequest) {
  try {
    const order = await request.json();
    
    // Validate required fields
    if (!order.name || !order.email || !order.phone || !order.company) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    // Add timestamp and ID
    order.id = Date.now().toString();
    order.createdAt = new Date().toISOString();
    order.status = 'new';
    
    // Use absolute path from project root
    const projectRoot = path.join(process.cwd(), '..', '..');
    const dataDir = path.join(projectRoot, 'data');
    const ordersFile = path.join(dataDir, 'orders.json');
    
    // Create directory if it doesn't exist
    await fs.mkdir(dataDir, { recursive: true });
    
    // Create file if it doesn't exist
    try {
      await fs.access(ordersFile);
    } catch {
      await fs.writeFile(ordersFile, '[]', 'utf-8');
    }
    
    // Read existing orders
    const ordersData = await fs.readFile(ordersFile, 'utf-8');
    const orders = JSON.parse(ordersData);
    
    // Add new order
    orders.unshift(order);
    
    // Save updated orders
    await fs.writeFile(ordersFile, JSON.stringify(orders, null, 2), 'utf-8');
    
    // Log order for demo purposes
    console.log('New Order Received:', order);
    
    return NextResponse.json({ success: true, order });
  } catch (error) {
    console.error('Error saving order:', error);
    return NextResponse.json({ error: 'Failed to save order' }, { status: 500 });
  }
}
