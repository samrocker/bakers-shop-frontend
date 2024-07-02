import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');

    if (token && (req.nextUrl.pathname === '/signup' || req.nextUrl.pathname === '/login')) {
      return NextResponse.redirect(new URL('/', req.url));
    }

    if (!token && req.nextUrl.pathname !== '/login' && req.nextUrl.pathname !== '/signup') {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/signup', '/login', '/dashboard', '/profile', '/settings'],
};