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

  const [order, setOrder] = createSignal(0);
  const [flexGrow, setFlexGrow] = createSignal(0);
  const [flexShrink, setFlexShrink] = createSignal(0);

  function handleCloseCard() {
    onCloseCard?.();
  }

  function handleFlexGrowChange(e: Event) {
    const target = e.target as HTMLInputElement;
    setFlexGrow(parseInt(target.value));
  }

  function handleFlexShrinkChange(e: Event) {
    const target = e.target as HTMLInputElement;
    setFlexShrink(parseInt(target.value));
  }

  function handleSetOrder(e: Event) {
    const target = e.target as HTMLInputElement;
    setOrder(parseInt(target.value));
  }

  return (
    <div class={clsx(
      'bg-white rounded p-2',
      { 'grow': flexGrow() > 0 },
      { 'shrink': flexShrink() > 0 },
      { 'order-none': order() === 0 },
      { [`order-${order()}`]: order() > 0 },
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
        <input
          class='block'
          type='number'
          value={order()}
          onChange={handleSetOrder}
          min={0}
          max={12}
        />
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
        <input
          class='block'
          type='number'
          value={flexShrink()}
          onChange={handleFlexShrinkChange}
          min={0}
          max={1}
        />
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
