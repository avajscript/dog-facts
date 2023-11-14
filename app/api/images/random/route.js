import { NextResponse } from "next/server";

export async function GET(req, res) {
  const response = await fetch("https://dog.ceo/api/breeds/image/random", {
    cache: "no-cache",
  });
  const image = await response.json();

  return NextResponse.json({ message: image.message });
}
