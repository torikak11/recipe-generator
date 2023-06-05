import Form from "@components/Form";
import Image from "next/image";

export default function TopPanel() {
  return (
    <div className="max-w-7xl mx-auto relative z-0">
      <div className="hidden lg:flex">
        <Image
          src="https://toriadev-recipe-generator.s3.us-west-2.amazonaws.com/recipe-generator.png"
          alt="vector images of food"
          width={500}
          height={500}
          className="absolute top-28 right-28"
        />
      </div>
      <div className="py-16 px-16">
        <div className="flex flex-col gap-10 z-10">
          <h1 className="text-green-200 text-3xl font-bold pt-24">
            Recipe Generator
          </h1>
          <h4 className="text-2xl max-w-md w-full">
            Find recipes for the ingredients in your kitchen.
          </h4>
          <p className="text-green-100">
            Powered by:{" "}
            <a
              className="text-green-200"
              href="https://rapidapi.com/apidojo/api/tasty"
            >
              Tasty
            </a>{" "}
          </p>
          <Form />
        </div>
      </div>
    </div>
  );
}
