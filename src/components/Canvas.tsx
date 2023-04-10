import { Component, For } from 'solid-js';
import Card from './Card';
import { useCard } from '../providers/card';

const Canvas: Component = () => {
  const [cards, { addCard, removeCard }] = useCard();

  return (
    <div class="p-4 grow bg-slate-300">
      <For each={cards()}>
        {(_, index) => {
          return <Card onCloseCard={() => removeCard(index())}>index: {index}</Card>;
        }}
      </For>
    </div>
  );
};

export default Canvas;
