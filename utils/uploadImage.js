export default async function uploadImage(image) {
  const req = await fetch(
    `https://api.imgbb.com/1/upload?key=3afb2502353cdede19d3912de301999d`,
    {
      method: "POST",
      body: image,
    }
  );
  const response = await req.json();

  return response;
}
