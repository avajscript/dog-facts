export async function POST(req) {
  const message = await req.json();
  const breedImages = await fetch(
    `https://dog.ceo/api/breed/${message.breed}/images`
  );
  return new Response(JSON.stringify(await breedImages.json()), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
