import { Component } from 'solid-js';
import { useCard } from '../providers/card-provider';
import { useFlex } from '../providers/flex-provider';

const Navbar: Component = () => {
  const [_, { addCard, clearCards }] = useCard();
  const [
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    alignContent,
    {
      setFlexDirection,
      setFlexWrap,
      setJustifyContent,
      setAlignItems,
      setAlignContent,
    },
  ] = useFlex();

  function handleClearCards() {
    clearCards();
  }

  return (
    <div class="p-2 md:p-4 border-b-2 flex items-center">
      <div>
        <h1 class="block md:hidden text-lg md:text-2xl font-bold">Flexbox<br />Playground</h1>
        <h1 class="hidden md:block text-lg md:text-2xl font-bold">Flexbox Playground</h1>
      </div>

      <div class='ml-2 md:ml-4 flex-grow flex items-center justify-center'>
        <button
          class="bg-blue-500 p-1 md:p-2 text-sm md:text-base rounded text-white font-bold mr-2 md:mr-4 whitespace-nowrap"
          onClick={() => addCard()}
        >
          Add Flex Item
        </button>
        <button
          class="bg-gray-200 p-1 md:p-2 text-sm md:text-base rounded font-bold whitespace-nowrap"
          onClick={handleClearCards}
        >
          Delete Flex Items
        </button>
      </div>
    </div>
  );
};

export default Navbar;
