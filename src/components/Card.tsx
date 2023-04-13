import clsx from 'clsx';
import { Component, createSignal } from 'solid-js';

export interface CardProps {
  children?: any;
  onCloseCard?: () => void;
}

const Card: Component<CardProps> = ({
  children,
  onCloseCard,
}) => {

  const [flexGrow, setFlexGrow] = createSignal(0);

  function handleCloseCard() {
    onCloseCard?.();
  }

  function handleFlexGrowChange(e: Event) {
    const target = e.target as HTMLInputElement;
    setFlexGrow(parseInt(target.value));
  }

  return (
    <div class={clsx(
      'bg-white rounded p-2',
      { 'grow': flexGrow() > 0 },
    )}>
      <div class='flex justify-between'>
        <span class='bg-orange-500 w-6 h-6 rounded-full text-white flex items-center justify-center text-sm font-bold'>
          {children}
        </span>
        <button onClick={handleCloseCard}>
          X
        </button>
      </div>

      <label class='text-sm'>
        order
        <input class='block' type='number' value={0} />
      </label>

      <label class='text-sm'>
        flex-grow
        <input
          class='block'
          type='number'
          value={flexGrow()}
          onChange={handleFlexGrowChange}
          min={0}
          max={1}
        />
      </label>

      <label class='text-sm'>
        flex-shrink
        <input class='block' type='number' value={0} />
      </label>

      <label class='text-sm'>
        flex-basic
        <input class='block' type='text' value={0} />
      </label>

      <label class='text-sm'>
        align-self
        <input class='block' type='text' value={0} />
      </label>
    </div>
  )
}

export default Card;
