import { Accessor, createContext, createSignal, useContext } from 'solid-js';

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
type AlignContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'stretch';

type FlexActions = {
  setFlexDirection(value: FlexDirection): void;
  setFlexWrap(value: FlexWrap): void;
  setJustifyContent(value: JustifyContent): void;
  setAlignItems(value: AlignItems): void;
  setAlignContent(value: AlignContent): void;
};

type FlexContext = [
  Accessor<FlexDirection>,
  Accessor<FlexWrap>,
  Accessor<JustifyContent>,
  Accessor<AlignItems>,
  Accessor<AlignContent>,
  FlexActions,
];

const FlexContext = createContext<FlexContext>();

export function FlexProvider(props) {
  const [flexDirection, setFlexDirection] = createSignal<FlexDirection>('row');
  const [flexWrap, setFlexWrap] = createSignal<FlexWrap>('nowrap');
  const [justifyContent, setJustifyContent] =
    createSignal<JustifyContent>('flex-start');
  const [alignItems, setAlignItems] = createSignal<AlignItems>('flex-start');
  const [alignContent, setAlignContent] =
    createSignal<AlignContent>('flex-start');

  const providerValue: FlexContext = [
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    alignContent,
    {
      setFlexDirection: (value: FlexDirection) => setFlexDirection(value),
      setFlexWrap: (value: FlexWrap) => setFlexWrap(value),
      setJustifyContent: (value: JustifyContent) => setJustifyContent(value),
      setAlignItems: (value: AlignItems) => setAlignItems(value),
      setAlignContent: (value: AlignContent) => setAlignContent(value),
    },
  ];

  return (
    <FlexContext.Provider value={providerValue}>
      {props.children}
    </FlexContext.Provider>
  );
}

export function useFlex() {
  return useContext(FlexContext);
}
