export default async function getRecipes(searchParam) {
  const url =
    "https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&q=" + searchParam;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ecebbcf77bmshb70faa998b7f571p1e83b5jsna4ad47edcdc3",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}
