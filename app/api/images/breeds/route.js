import { NextResponse } from "next/server";

export async function GET(req, res) {
    const fetchRes = await fetch('https://dog.ceo/api/breeds/list/all'); 
    const breeds = await fetchRes.json();
    

    return NextResponse.json({breeds: breeds.message});
}