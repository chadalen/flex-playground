import type { Component } from 'solid-js';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Canvas from './components/Canvas';
import { CardProvider } from './providers/card';

const App: Component = () => {
  return (
    <CardProvider>
      <div class='flex flex-col h-full'>
        <Navbar />

        <div class='grow flex'>
          <Sidebar />
          <Canvas />
        </div>
      </div>
    </CardProvider>
  );
};

export default App;
