import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {

  // cookies thke token ache kina check
  const token = request.cookies.get("token");

  // jodi token thake 
  // user jei url ta request korche 
  // otate redirect hbe
  if (!!token  && token!==undefined && token!==null) {
    return NextResponse.next();
  }


  // Jodi token na thake
  // Then oke login page ae redirect kore dichi
  return NextResponse.redirect(new URL("/Login", request.url));
}

// ATa holo config
// Akane jei path gulo deebe , only sei path gulor jonne
// middleware run hbe 
// /:path mane jekono path -> /about ,/dashboard , /login anything
export const config = {
  matcher: ["/product/:path",'/product'],
};

// /home