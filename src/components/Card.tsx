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
    <div class='bg-white rounded p-2 flex justify-between'>
      <span>
        {children}
      </span>

      <button onClick={handleCloseCard}>
        Close
      </button>
    </div>
  )
}

export default Card;
