import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  return NextResponse.redirect(new URL('https://zahid40.github.io', request.url))
}
 
export const config = {
  matcher: '/about/:path*',
  
}