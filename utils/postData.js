export default async function postData(api, data) {
  const json = await fetch(api, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  });
  const response = await json.json();
  return response;
}
