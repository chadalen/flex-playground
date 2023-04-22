import { Component } from 'solid-js';
import { useCard } from '../providers/card-provider';
import { useFlex } from '../providers/flex-provider';
import { FaSolidCirclePlus, FaSolidBrush } from 'solid-icons/fa';

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
        <h1 class="text-xl md:text-2xl font-bold">Flexbox Playground</h1>
      </div>

      <div class='ml-2 md:ml-4 flex-grow flex items-center justify-end'>
        <button
          type='button'
          class="bg-blue-500 hover:bg-blue-600 p-3 md:p-2 text-lg md:text-base rounded text-white font-bold mr-2 md:mr-4 whitespace-nowrap flex items-center gap-2"
          onClick={() => addCard()}
          title="Add flex item"
        >
          <FaSolidCirclePlus />

          <span class="hidden md:inline">Add Flex Item</span>
        </button>
        <button
          type='button'
          class="bg-gray-200 hover:bg-gray-300 p-3 md:p-2 text-lg md:text-base rounded font-bold whitespace-nowrap flex items-center gap-2"
          onClick={handleClearCards}
          title="Clear flex items"
        >
          <FaSolidBrush class="rotate-180" />

          <span class="hidden md:inline">Clear Flex Items</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
