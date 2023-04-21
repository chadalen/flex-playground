import clsx from 'clsx';
import { Component, createSignal } from 'solid-js';
import { FaSolidTrashCan } from 'solid-icons/fa'

export interface CardProps {
  children?: any;
  onCloseCard?: () => void;
}

function getAlignSelfClass(alignSelf: string) {
  switch (alignSelf) {
    case 'flex-start':
      return 'self-start';
    case 'flex-end':
      return 'self-end';
    case 'center':
      return 'self-center';
    case 'baseline':
      return 'self-baseline';
    case 'stretch':
      return 'self-stretch';
    default:
      return '';
  }
}

const Card: Component<CardProps> = ({
  children,
  onCloseCard,
}) => {

  const [order, setOrder] = createSignal(0);
  const [flexGrow, setFlexGrow] = createSignal(0);
  const [flexShrink, setFlexShrink] = createSignal(0);
  const [flexBasis, setFlexBasis] = createSignal('auto');
  const [alignSelf, setAlignSelf] = createSignal('auto');

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

  function handleSetFlexBasis(e: Event) {
    const target = e.target as HTMLInputElement;
    setFlexBasis(target.value);
  }

  return (
    <div class={clsx(
      'bg-white rounded p-2 md:p-3',
      { 'grow': flexGrow() > 0 },
      { 'shrink': flexShrink() > 0 },
      { 'order-none': order() === 0 },
      { [`order-${order()}`]: order() > 0 },
      { [getAlignSelfClass(alignSelf())]: !!alignSelf() },
    )}
      style={{ "flex-basis": flexBasis() }}
    >
      <div class='flex justify-between mb-3'>
        <span class='bg-orange-500 w-6 h-6 rounded-full text-white flex items-center justify-center text-xs md:text-sm font-bold'>
          {children}
        </span>
        <button type='button' onClick={handleCloseCard} title="Delete">
          <FaSolidTrashCan />
        </button>
      </div>

      <label class='block text-xs md:text-sm mb-2'>
        <span class='font-medium'>order</span>
        <input
          class='block border-b w-full'
          type='number'
          value={order()}
          onChange={handleSetOrder}
          min={0}
          max={12}
        />
      </label>

      <label class='block text-xs md:text-sm mb-2'>
        <span class='font-medium'>flex-grow</span>
        <input
          class='block border-b w-full'
          type='number'
          value={flexGrow()}
          onChange={handleFlexGrowChange}
          min={0}
          max={1}
        />
      </label>

      <label class='block text-xs md:text-sm mb-2'>
        <span class='font-medium'>flex-shrink</span>
        <input
          class='block border-b w-full'
          type='number'
          value={flexShrink()}
          onChange={handleFlexShrinkChange}
          min={0}
          max={1}
        />
      </label>

      <label class='block text-xs md:text-sm mb-2'>
        <span class='font-medium'>flex-basis</span>
        <input
          class='block border-b w-full'
          type='text'
          value={flexBasis()}
          onChange={handleSetFlexBasis}
        />
      </label>

      <label class='block text-xs md:text-sm'>
        <span class='font-medium'>align-self</span>
        <select
          class='block w-full'
          value={alignSelf()}
          onChange={(e) => setAlignSelf(e.target.value)}
        >
          <option value='auto'>auto</option>
          <option value='flex-start'>flex-start</option>
          <option value='flex-end'>flex-end</option>
          <option value='center'>center</option>
          <option value='baseline'>baseline</option>
          <option value='stretch'>stretch</option>
        </select>
      </label>
    </div>
  )
}

export default Card;
