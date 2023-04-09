import { Component } from 'solid-js';

export interface CardProps {
  index: number;
}

const Card: Component<CardProps> = ({
  index,
}) => {
  return (
    <div class='bg-white rounded p-2'>
      <span>
        Index: {index}
      </span>
    </div>
  )
}

export default Card;
