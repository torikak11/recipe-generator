import Tag from "./Tag";

export default function Form() {
  return (
    <form className="flex flex-col gap-2 mt-10 max-w-md w-full">
      <label className="uppercase text-green-200 text-sm pl-2">
        ingredients
      </label>
      <input
        className="py-2 rounded-xl border border-green-200 placeholder:text-green-100 placeholder:text-sm placeholder:pl-2"
        type="text"
        placeholder="Add up to 10 ingredients..."
      ></input>
      <div className="flex flex-row flex-wrap items-center gap-4 mt-2 py-2">
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
      </div>
      <button className="bg-green-200 py-2 rounded-xl mt-10 w-36 text-white font-medium">
        Submit
      </button>
    </form>
  );
}
