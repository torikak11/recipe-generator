"use client";
import { useState } from "react";
import {useRouter} from "next/navigation";
import CreatableSelect from "react-select";

export default function Form() {
  const [input, setInput] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const router = useRouter();
  console.log(ingredients)

  const createOption = (label) => ({
    label,
    value: label,
  })

  const handleKeyDown = (event) => {
    if (!input) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        setIngredients((prev) => [...prev, createOption(input)]);
        setInput('');
        event.preventDefault();
    }
  }

  const handleSubmit = (event) => {
    const inputs = ingredients.map(item => item.value);
    const stringInputs = inputs.join("+");
    event.preventDefault();
    router.push(`/${stringInputs}/`);
  }

  return (
    <form className="flex flex-col gap-2 mt-16 max-w-md w-full" onSubmit={handleSubmit}>
      <label htmlFor="ingredients" className="uppercase text-green-200 text-sm pl-2">ingredients</label>
      <CreatableSelect
        isMulti={true}
        isClearable={true}
        inputValue={input}
        value={ingredients}
        onInputChange={(newValue) => setInput(newValue)}
        onChange={(newIngredient) => setIngredients(newIngredient)}
        onKeyDown={handleKeyDown}
        menuIsOpen={false}
        placeholder="Type an ingredient and press enter.."
        components={{DropdownIndicator: null}}
        className="text-sm"
      />
      <div className="flex flex-row flex-wrap items-center gap-4 mt-2 py-2"></div>
      <button className="bg-green-200 py-2 rounded-xl mt-4 w-36 text-white font-medium transition ease-in-out hover:scale-105">
        Submit
      </button>
    </form>
  );
}
