import RecipeCard from "@components/RecipeCard";
import getRecipes from "@lib/getRecipes";

export default async function page({ params: { searchParam } }) {
  const recipesData = getRecipes(searchParam);
  const data = await recipesData;
  const results = data?.results;

  return (
    <div className=" max-w-7xl mx-auto mb-16 mx-16 px-6 flex flex-row overflow-x-scroll scrollbar scrollbar-track-rounded scrollbar-track-orange-100 scrollbar-thumb-orange-200 mt-36 pb-10 gap-10">
      {results ? 
        results.map((result) => {
          return (
            <RecipeCard
              key={result.id}
              slug={result.slug}
              image={result.thumbnail_url}
              title={result.name}
            />
          );
        })
       : 
        <h2>Recipes not found</h2>
      }
    </div>
  );
}
