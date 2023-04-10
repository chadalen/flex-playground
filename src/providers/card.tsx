import { createSignal, createContext, useContext, Accessor } from "solid-js";

type CardActions = {
  addCard(): void;
  removeCard(index: number): void;
}

type Card = {

}

type CardContext = [Accessor<Card[]>, CardActions];

const CardContext = createContext <CardContext>();

export function CardProvider(props) {
  const [cards, setCards] = createSignal<Card[]>([]);
  const card: CardContext = [
      cards,
      {
        addCard() {
          setCards((c) => [...c, { }]);
        },
        removeCard(index: number) {
          setCards((c) => c.filter((_, i) => i !== index));
        }
      }
    ];

  return (
    <CardContext.Provider value={card}>
      {props.children}
    </CardContext.Provider>
  );
}

export function useCard() { return useContext(CardContext); }
