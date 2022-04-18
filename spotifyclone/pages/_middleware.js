import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req){
// le token existera si l'utilisateur est connecter
  const token = await getToken({req, secret: process.env.JWT_SECRET});

  const { pathname } = req.nextUrl
  // autoriser les requettes si c'est vrai
  // si le token existe
  if(pathname.includes('/api/auth') || token){
    return NextResponse.next();
  }
  if(!token && pathname !== '/login'){
    return NextResponse.redirect('http://localhost:3000/login');
  }
}

