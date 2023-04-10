import { Component, For } from 'solid-js';
import Card from './Card';
import { useCard } from '../providers/card-provider';
import clsx from 'clsx';
import { useFlex } from '../providers/flex-provider';

const Canvas: Component = () => {
  const [cards, { removeCard }] = useCard();
  const [flexDirection, flexWrap, justifyContent, alignItems, alignContent] = useFlex();

  const flexDirectionClass = () => {
    switch (flexDirection()) {
      case 'row':
        return 'flex-row';
      case 'row-reverse':
        return 'flex-row-reverse';
      case 'column':
        return 'flex-col';
      case 'column-reverse':
        return 'flex-col-reverse';
    }
  }

  function flexWrapClass() {
    switch (flexWrap()) {
      case 'nowrap':
        return 'flex-nowrap';
      case 'wrap':
        return 'flex-wrap';
      case 'wrap-reverse':
        return 'flex-wrap-reverse';
    }
  }

  function justifyContentClass() {
    switch (justifyContent()) {
      case 'flex-start':
        return 'justify-start';
      case 'flex-end':
        return 'justify-end';
      case 'center':
        return 'justify-center';
      case 'space-between':
        return 'justify-between';
      case 'space-around':
        return 'justify-around';
      case 'space-evenly':
        return 'justify-evenly';
    }
  }

  function alignItemsClass() {
    switch (alignItems()) {
      case 'flex-start':
        return 'items-start';
      case 'flex-end':
        return 'items-end';
      case 'center':
        return 'items-center';
      case 'stretch':
        return 'items-stretch';
      case 'baseline':
        return 'items-baseline';
    }
  }

  function alignContentClass() {
    switch (alignContent()) {
      case 'flex-start':
        return 'content-start';
      case 'flex-end':
        return 'content-end';
      case 'center':
        return 'content-center';
      case 'stretch':
        return 'content-stretch';
      case 'space-between':
        return 'content-between';
      case 'space-around':
        return 'content-around';
    }
  }

  return (
    <div class={
      clsx(
        "p-2 grow bg-slate-300 flex gap-2",
        flexDirectionClass(),
        flexWrapClass(),
        justifyContentClass(),
        alignItemsClass(),
        alignContentClass(),
    )}>
      <For each={cards()}>
        {(_, index) => {
          return <Card onCloseCard={() => removeCard(index())}>{index}</Card>;
        }}
      </For>
    </div>
  );
};

export default Canvas;
