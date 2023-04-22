import { Component, For } from 'solid-js';
import { useFlex } from '../../providers/flex-provider';

interface Item {
  label: string;
  options: Option[];
}

interface Option {
  label: string;
  value: string;
}

const flexDirections: Item = {
  label: 'flex-direction',
  options: [
    { label: 'row', value: 'row' },
    { label: 'row-reverse', value: 'row-reverse' },
    { label: 'column', value: 'column' },
    { label: 'column-reverse', value: 'column-reverse' },
  ],
};

const flexWraps: Item = {
  label: 'flex-wrap',
  options: [
    { label: 'nowrap', value: 'nowrap' },
    { label: 'wrap', value: 'wrap' },
    { label: 'wrap-reverse', value: 'wrap-reverse' },
  ],
};

const justifyContents: Item = {
  label: 'justify-content',
  options: [
    { label: 'flex-start', value: 'flex-start' },
    { label: 'flex-end', value: 'flex-end' },
    { label: 'center', value: 'center' },
    { label: 'space-between', value: 'space-between' },
    { label: 'space-around', value: 'space-around' },
    { label: 'space-evenly', value: 'space-evenly' },
  ],
};

const alignItems: Item = {
  label: 'align-items',
  options: [
    { label: 'flex-start', value: 'flex-start' },
    { label: 'flex-end', value: 'flex-end' },
    { label: 'center', value: 'center' },
    { label: 'stretch', value: 'stretch' },
    { label: 'baseline', value: 'baseline' },
  ],
};

const alignContents: Item = {
  label: 'align-content',
  options: [
    { label: 'flex-start', value: 'flex-start' },
    { label: 'flex-end', value: 'flex-end' },
    { label: 'center', value: 'center' },
    { label: 'stretch', value: 'stretch' },
    { label: 'space-between', value: 'space-between' },
    { label: 'space-around', value: 'space-around' },
  ],
};

const Sidebar: Component = () => {
  const [
    flexDirection,
    flexWrap,
    justifyContent,
    alignItem,
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

  return (
    <div
      class={'p-2 md:p-4 border-r-2 overflow-y-scroll min-w-[127.8px] md:min-w-[169.02px]'}
      style={{ "max-height": 'calc(100vh - 74px)' }}
    >
      <div class="mb-4">
        <h2 class="mb-2 font-semibold text-sm md:text-lg">{flexDirections.label}</h2>
        <For each={flexDirections.options}>
          {(option) => (
            <label class="block text-xs md:text-base">
              <input
                type="radio"
                name={flexDirections.label}
                value={option.value}
                class="mr-2"
                checked={flexDirection() === option.value}
                onClick={() => setFlexDirection(option.value as any)}
              />
              {option.label}
            </label>
          )}
        </For>
      </div>

      <div class="mb-4">
        <h2 class="mb-2 font-semibold text-sm md:text-lg">{flexWraps.label}</h2>
        <For each={flexWraps.options}>
          {(option) => (
            <label class="block text-xs md:text-base">
              <input
                type="radio"
                name={flexWraps.label}
                value={option.value}
                class="mr-2"
                checked={flexWrap() === option.value}
                onClick={() => setFlexWrap(option.value as any)}
              />
              {option.label}
            </label>
          )}
        </For>
      </div>

      <div class="mb-4">
        <h2 class="mb-2 font-semibold text-sm md:text-lg">{justifyContents.label}</h2>
        <For each={justifyContents.options}>
          {(option) => (
            <label class="block text-xs md:text-base">
              <input
                type="radio"
                name={justifyContents.label}
                value={option.value}
                class="mr-2"
                checked={justifyContent() === option.value}
                onClick={() => setJustifyContent(option.value as any)}
              />
              {option.label}
            </label>
          )}
        </For>
      </div>

      <div class="mb-4">
        <h2 class="mb-2 font-semibold text-sm md:text-lg">{alignItems.label}</h2>
        <For each={alignItems.options}>
          {(option) => (
            <label class="block text-xs md:text-base">
              <input
                type="radio"
                name={alignItems.label}
                value={option.value}
                class="mr-2"
                checked={alignItem() === option.value}
                onClick={() => setAlignItems(option.value as any)}
              />
              {option.label}
            </label>
          )}
        </For>
      </div>

      <div class="mb-4">
        <h2 class="mb-2 font-semibold text-sm md:text-lg">{alignContents.label}</h2>
        <For each={alignContents.options}>
          {(option) => (
            <label class="block text-xs md:text-base">
              <input
                type="radio"
                name={alignContents.label}
                value={option.value}
                class="mr-2"
                checked={alignContent() === option.value}
                onClick={() => setAlignContent(option.value as any)}
              />
              {option.label}
            </label>
          )}
        </For>
      </div>

      <button
        class="bg-gray-200 w-full p-1 md:p-2 text-sm md:text-base rounded font-bold mr-2 md:mr-4 whitespace-nowrap"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};

export default Sidebar;
