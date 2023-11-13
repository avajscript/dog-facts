// sends an external request based on breed text. Ex beagle
export const fetchByBreed = async (breed) => {
  // call to api route, which calls external api based on user provided breed
  const request = await fetch("/api/images/breed", {
    cache: "no-cache",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ breed: breed }),
  });
  // extract promise and json data
  const data = await request.json();
  // return breed image data
  return data;
};
