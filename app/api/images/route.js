import { NextResponse } from "next/server";

export async function POST(req, res) {
    const message = await req;  
    
    

    return NextResponse.json({name: req});
}