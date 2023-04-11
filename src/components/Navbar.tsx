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

  function handleReset() {
    setFlexDirection('row');
    setFlexWrap('nowrap');
    setJustifyContent('flex-start');
    setAlignItems('flex-start');
    setAlignContent('flex-start');
  }

  function handleClearCards() {
    clearCards();
  }

  return (
    <div class="p-4 border-b-2 flex">
      <h1 class="text-2xl font-bold mr-8">Flex Playground</h1>

      <button
        class="bg-blue-500 px-2 py-1 rounded text-white font-bold mr-4"
        onClick={() => addCard()}
      >
        Add Item
      </button>
      <button
        class="bg-gray-200 px-2 py-1 rounded font-bold mr-4"
        onClick={handleReset}
      >
        Reset Controls
      </button>
      <button
        class="bg-gray-200 px-2 py-1 rounded font-bold"
        onClick={handleClearCards}
      >
        Reset Items
      </button>
    </div>
  );
};

export default Navbar;
