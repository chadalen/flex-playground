import type { Component } from 'solid-js';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Canvas from './components/Canvas';
import { CardProvider } from './providers/card-provider';
import { FlexProvider } from './providers/flex-provider';

const App: Component = () => {
  return (
    <CardProvider>
      <FlexProvider>
        <div class="flex flex-col h-full">
          <Navbar />
          <div class="flex h-full">
            <Sidebar />
            <div class="flex-grow bg-slate-300">
              <Canvas />
            </div>
          </div>
        </div>
      </FlexProvider>
    </CardProvider>
  );
};

export default App;
