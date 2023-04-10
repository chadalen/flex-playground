import type { Component } from 'solid-js';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Canvas from './components/Canvas';
import { CardProvider } from './providers/card-provider';
import { FlexProvider } from './providers/flex-provider';

const App: Component = () => {
  return (
    <CardProvider>
      <div class='flex flex-col h-full'>
        <Navbar />

        <div class='grow flex'>
          <FlexProvider>
            <Sidebar />
            <Canvas />
          </FlexProvider>
        </div>
      </div>
    </CardProvider>
  );
};

export default App;
