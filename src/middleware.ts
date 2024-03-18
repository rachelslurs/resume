import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const theme = request.cookies.get('theme')?.value ?? 'system';
    const color = request.cookies.get('color')?.value ?? 'indigo';
    const response = NextResponse.next();
  
    response.cookies.set('theme', theme, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });
    
    response.cookies.set('color', color, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });
  
    return response;
  }