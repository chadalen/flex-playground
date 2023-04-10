import { Component } from "solid-js";
import { useCard } from "../providers/card";

const Navbar: Component = () => {
  const [_, { addCard }] = useCard();
  return (
    <div class='p-4 border-b-2 flex gap-8'>
      <h1 class='text-2xl font-bold'>Flex Playground</h1>

      <button class='bg-blue-500 px-2 py-1 rounded text-white font-bold' onClick={() => addCard()}>Add Item</button>
    </div>
  );
}

export default Navbar;
