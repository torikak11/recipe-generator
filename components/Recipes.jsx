import RecipeCard from "@components/RecipeCard";

export default function Recipes() {
  return (
    <div className="flex flex-row justify-between overflow-x-scroll justify-center scrollbar scrollbar-track-rounded scrollbar-track-orange-100 scrollbar-thumb-orange-200 mt-36 pb-10 gap-10">
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </div>
  );
}
