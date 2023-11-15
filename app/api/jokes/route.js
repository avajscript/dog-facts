export async function POST(req, res) {
  const message = await req.json();
  const response = await fetch(
    `https://dog-api.kinduff.com/api/facts?number=${message.number}`,
    { cache: "no-store" }
  );
  const jokes = await response.json();

  return new Response(JSON.stringify(jokes), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
