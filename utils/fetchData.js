export default async function fetchData(api) {
  const json = await fetch(api);
  const response = await json.json();
  return response;
}
