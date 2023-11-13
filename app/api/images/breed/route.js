export async function POST(req) {
  const message = await req.json();

  const breedImage = await fetch(
    `https://dog.ceo/api/breed/${message.breed}/images/random`
  );
  return new Response(JSON.stringify(await breedImage.json()), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
