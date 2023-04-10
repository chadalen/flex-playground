import { Component } from 'solid-js';

export interface CardProps {
  children?: any;
  onCloseCard?: () => void;
}

const Card: Component<CardProps> = ({
  children,
  onCloseCard,
}) => {

  function handleCloseCard() {
    onCloseCard?.();
  }

  return (
    <div class='bg-white rounded p-2'>
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
        <input class='block' type='number' value={0} />
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
