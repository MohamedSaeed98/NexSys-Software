import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import crypto from 'crypto';

// Simple password hashing (use bcrypt in production)
const hashPassword = (password: string) => {
  return crypto.createHash('sha256').update(password).digest('hex');
};

// GET - Retrieve all users (for admin) or check session
export async function GET(request: NextRequest) {
  try {
    const email = request.nextUrl.searchParams.get('email');
    
    // Use absolute path from project root
    const projectRoot = path.join(process.cwd(), '..', '..');
    const dataDir = path.join(projectRoot, 'data');
    const usersFile = path.join(dataDir, 'users.json');
    
    // Create directory if it doesn't exist
    await fs.mkdir(dataDir, { recursive: true });
    
    // Create file if it doesn't exist
    try {
      await fs.access(usersFile);
    } catch {
      await fs.writeFile(usersFile, '[]', 'utf-8');
    }
    
    const usersData = await fs.readFile(usersFile, 'utf-8');
    const users = JSON.parse(usersData);
    
    // If email provided, return specific user (without password)
    if (email) {
      const user = users.find((u: any) => u.email === email);
      if (user) {
        const { password, ...userWithoutPassword } = user;
        return NextResponse.json(userWithoutPassword);
      }
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error reading users:', error);
    return NextResponse.json({ error: 'Failed to read users' }, { status: 500 });
  }
}

// POST - Register new user or Login
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { action } = data;
    
    // Use absolute path from project root
    const projectRoot = path.join(process.cwd(), '..', '..');
    const dataDir = path.join(projectRoot, 'data');
    const usersFile = path.join(dataDir, 'users.json');
    
    // Create directory if it doesn't exist
    await fs.mkdir(dataDir, { recursive: true });
    
    // Create file if it doesn't exist
    try {
      await fs.access(usersFile);
    } catch {
      await fs.writeFile(usersFile, '[]', 'utf-8');
    }
    
    const usersData = await fs.readFile(usersFile, 'utf-8');
    const users = JSON.parse(usersData);
    
    if (action === 'register') {
      const { name, email, password } = data;
      
      // Validate required fields
      if (!name || !email || !password) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
      }
      
      // Check if user already exists
      if (users.find((u: any) => u.email === email)) {
        return NextResponse.json({ error: 'Email already registered' }, { status: 400 });
      }
      
      // Create new user
      const newUser = {
        id: Date.now().toString(),
        name,
        email,
        password: hashPassword(password),
        createdAt: new Date().toISOString(),
        role: 'user'
      };
      
      users.push(newUser);
      await fs.writeFile(usersFile, JSON.stringify(users, null, 2), 'utf-8');
      console.log('User registered:', email);
      
      // Return user without password
      const { password: _, ...userWithoutPassword } = newUser;
      return NextResponse.json({ success: true, user: userWithoutPassword });
    }
    
    if (action === 'login') {
      const { email, password } = data;
      
      // Find user
      const user = users.find((u: any) => u.email === email);
      
      if (!user) {
        return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
      }
      
      // Check password
      const hashedPassword = hashPassword(password);
      if (user.password !== hashedPassword) {
        return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
      }
      
      console.log('User logged in:', email);
      
      // Return user without password
      const { password: _, ...userWithoutPassword } = user;
      return NextResponse.json({ success: true, user: userWithoutPassword });
    }
    
    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('Error processing user request:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
