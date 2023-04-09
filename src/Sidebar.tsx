import { Component, For } from 'solid-js';
import styles from './Sidebar.module.css';
import clsx from 'clsx';

interface Item {
  label: string;
  options: Option[];
}

interface Option {
  label: string;
  value: string;
}

const items: Item[] = [
  {
    label: 'flex-direction',
    options: [
      { label: 'row', value: 'row' },
      { label: 'row-reverse', value: 'row-reverse' },
      { label: 'column', value: 'column' },
      { label: 'column-reverse', value: 'column-reverse' },
    ],
  },
  {
    label: 'flex-wrap',
    options: [
      { label: 'nowrap', value: 'nowrap' },
      { label: 'wrap', value: 'wrap' },
      { label: 'wrap-reverse', value: 'wrap-reverse' },
      ],
  },
  {
    label: 'justify-content',
    options: [
      { label: 'flex-start', value: 'flex-start' },
      { label: 'flex-end', value: 'flex-end' },
      { label: 'center', value: 'center' },
      { label: 'space-between', value: 'space-between' },
      { label: 'space-around', value: 'space-around' },
    ],
  },
  {
    label: 'align-items',
    options: [
      { label: 'flex-start', value: 'flex-start' },
      { label: 'flex-end', value: 'flex-end' },
      { label: 'center', value: 'center' },
      { label: 'stretch', value: 'stretch' },
      { label: 'baseline', value: 'baseline' },
    ],
  },
  {
    label: 'align-content',
    options: [
      { label: 'flex-start', value: 'flex-start' },
      { label: 'flex-end', value: 'flex-end' },
      { label: 'center', value: 'center' },
      { label: 'stretch', value: 'stretch' },
      { label: 'space-between', value: 'space-between' },
      { label: 'space-around', value: 'space-around' },
    ],
  },
]

const Sidebar: Component = () => {
  return (
    <div class={clsx("p-4 border-r-2 overflow-y-scroll", styles.scroll_container)}>
      <For each={items}>
        {(item) => (
          <div class="mb-4">
            <h2 class="mb-2 font-semibold">{item.label}</h2>
            <For each={item.options}>
              {(option) => (
                <label class="block">
                  <input
                    type="radio"
                    name={item.label}
                    value={option.value}
                    class="mr-2"
                  />
                  {option.label}  
                </label>
              )}
            </For>
          </div>
        )}
      </For>
    </div>
  );
};

export default Sidebar;
