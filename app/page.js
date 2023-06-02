import Form from "@components/Form";
import RecipeCard from "@components/RecipeCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto h-screen relative z-0">
      <div className="hidden lg:flex">
        <Image
          src="https://toriadev-recipe-generator.s3.us-west-2.amazonaws.com/recipe-generator.png"
          alt="vector images of food"
          width={500}
          height={500}
          className="absolute top-28 right-28"
        />
      </div>
      <div className="flex flex-col gap-10 px-10 z-10">
        <h1 className="text-green-200 text-3xl font-bold pt-24">
          Recipe Generator
        </h1>
        <h4 className="text-2xl max-w-md w-full">
          Find recipes for the ingredients in your kitchen.
        </h4>
        <Form />
        <div className="flex flex-row justify-between overflow-x-scroll justify-center scrollbar scrollbar-track-rounded scrollbar-track-orange-100 scrollbar-thumb-orange-200 mt-36 pb-10 gap-10">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </div>
    </div>
  );
}
