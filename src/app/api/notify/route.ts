import { NextRequest, NextResponse } from 'next/server';

// Simulated email sending function
async function sendEmail(to: string, subject: string, body: string) {
  // In production, integrate with real email service like SendGrid, AWS SES, or Nodemailer
  console.log(`[EMAIL] Sending to: ${to}`);
  console.log(`[EMAIL] Subject: ${subject}`);
  console.log(`[EMAIL] Body: ${body}`);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return { success: true, messageId: `msg_${Date.now()}` };
}

// Email templates
function getOrderConfirmationTemplate(orderData: any) {
  return {
    subject: 'تم استلام طلبك بنجاح - NexSys Software',
    body: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #2563eb, #4f46e5); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">NexSys Software</h1>
        </div>
        <div style="padding: 30px; background: #f8fafc;">
          <h2 style="color: #1e293b;">مرحباً ${orderData.name}،</h2>
          <p style="color: #475569; line-height: 1.6;">
            شكراً لتواصلك معنا. لقد استلمنا طلبك بنجاح وسنتواصل معك خلال 24 ساعة.
          </p>
          
          <div style="background: white; padding: 20px; border-radius: 12px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">تفاصيل الطلب:</h3>
            <p><strong>البرنامج:</strong> ${orderData.software || 'استفسار عام'}</p>
            <p><strong>الاسم:</strong> ${orderData.name}</p>
            <p><strong>البريد:</strong> ${orderData.email}</p>
            <p><strong>الهاتف:</strong> ${orderData.phone}</p>
            <p><strong>الرسالة:</strong> ${orderData.message}</p>
          </div>
          
          <p style="color: #475569;">
            فريق NexSys يتمنى لكم يوماً سعيداً!
          </p>
        </div>
        <div style="text-align: center; padding: 20px; color: #94a3b8; font-size: 12px;">
          © 2026 NexSys Software. جميع الحقوق محفوظة.
        </div>
      </div>
    `
  };
}

function getAdminNotificationTemplate(orderData: any) {
  return {
    subject: 'طلب جديد من الموقع - NexSys Software',
    body: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1e293b; padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">لوحة الإدارة</h1>
          <p style="color: #94a3b8;">طلب جديد من الموقع</p>
        </div>
        <div style="padding: 30px; background: #f8fafc;">
          <div style="background: white; padding: 20px; border-radius: 12px;">
            <h3 style="color: #dc2626; margin-top: 0;">🚨 طلب جديد!</h3>
            <p><strong>الاسم:</strong> ${orderData.name}</p>
            <p><strong>البريد:</strong> ${orderData.email}</p>
            <p><strong>الهاتف:</strong> ${orderData.phone}</p>
            <p><strong>البرنامج:</strong> ${orderData.software || 'استفسار عام'}</p>
            <p><strong>الرسالة:</strong> ${orderData.message}</p>
            <p><strong>التاريخ:</strong> ${new Date().toLocaleString('ar-SA')}</p>
          </div>
          
          <a href="#" style="display: inline-block; background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; margin-top: 20px;">
            عرض الطلب في لوحة الإدارة
          </a>
        </div>
      </div>
    `
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, orderData } = body;

    // Validate required fields
    if (!orderData) {
      return NextResponse.json(
        { success: false, error: 'بيانات الطلب مطلوبة' },
        { status: 400 }
      );
    }

    if (!orderData.email) {
      return NextResponse.json(
        { success: false, error: 'البريد الإلكتروني مطلوب' },
        { status: 400 }
      );
    }

    const results = [];

    // Send confirmation to customer
    if (type === 'order' || type === 'all') {
      const customerTemplate = getOrderConfirmationTemplate(orderData);
      const customerResult = await sendEmail(
        orderData.email,
        customerTemplate.subject,
        customerTemplate.body
      );
      results.push({ to: orderData.email, type: 'customer', ...customerResult });
    }

    // Send notification to admin
    if (type === 'order' || type === 'admin') {
      const adminTemplate = getAdminNotificationTemplate(orderData);
      const adminResult = await sendEmail(
        'admin@nexsys.com',
        adminTemplate.subject,
        adminTemplate.body
      );
      results.push({ to: 'admin@nexsys.com', type: 'admin', ...adminResult });
    }

    return NextResponse.json({
      success: true,
      message: 'تم إرسال الإشعارات بنجاح',
      results
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: 'حدث خطأ في إرسال الإشعارات' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    service: 'Email Notification Service',
    status: 'active',
    endpoints: {
      POST: 'Send email notifications',
      GET: 'Check service status'
    },
    features: [
      'Customer order confirmation',
      'Admin notifications',
      'HTML email templates',
      'Email validation'
    ]
  });
}
