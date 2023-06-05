export default function RecipeCard({ image, slug, title }) {
  const url = "https://tasty.co/recipe/" + slug;
  

  return (
    <a
      className="pt-10 flex-shrink-0 transition duration-300 ease-in-out hover:scale-105"
      href={url}
      target="_blank"
    >
      <div className="w-[300px] h-[300px] ">
        <img src={image} className="rounded-xl object-cover h-full w-full" />
      </div>
      <p className="text-ellipsis text-center text-sm font-medium px-2">
        {title.length > 35 ? title.slice(0, 35) + "..." : title}
      </p>
    </a>
  );
}
