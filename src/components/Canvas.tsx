import { Component } from "solid-js";
import Card from "./Card";

const Canvas: Component = () => {
  return (
    <div class='p-4 grow bg-slate-300'>
      <Card index={0} />
    </div>
  );
}

export default Canvas;
