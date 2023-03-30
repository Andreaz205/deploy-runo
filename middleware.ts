import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  let headers = req.headers
  let str:any = JSON.stringify(headers)
  
  return NextResponse.redirect(str);
};


export const config = {
  matcher: "/:path*",
};
