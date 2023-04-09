import type { Component } from 'solid-js';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Canvas from './components/Canvas';

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
