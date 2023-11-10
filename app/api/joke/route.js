import { NextResponse } from "next/server";

export async function GET(req, res) {
    const response = await fetch('https://dog-api.kinduff.com/api/facts', { cache: 'no-store'});
    const joke = await response.json();

    return NextResponse.json({name: joke});
}