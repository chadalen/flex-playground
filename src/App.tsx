import type { Component } from 'solid-js';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Canvas from './Canvas';

const App: Component = () => {
  return (
    <div class='flex flex-col h-full'>
      <Navbar />

      <div class='grow flex'>
        <Sidebar />
        <Canvas />
      </div>
    </div>
  );
};

export default App;
