import { Component } from 'solid-js';
import { useCard } from '../providers/card-provider';
import { useFlex } from '../providers/flex-provider';
import { FaBrandsGithub } from 'solid-icons/fa';
import { SiBuymeacoffee } from 'solid-icons/si'

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
      <div>
        <h1 class="text-2xl font-bold">Flex Playground</h1>
      </div>

      <div class='mx-4 flex-grow flex items-center justify-center'>
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

      <div>
        <div class='flex justify-end gap-2'>
          <a href='https://www.buymeacoffee.com/chadalen' target='_blank' rel='noopener' title='Buy me a coffee'>
            <SiBuymeacoffee size='32' />
          </a>

          <a href='https://github.com/chadalen/flexbox-playground' target='_blank' rel='noopener' title='Github link'>
            <FaBrandsGithub size='32' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
