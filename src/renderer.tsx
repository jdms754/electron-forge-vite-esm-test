import './index.css';
import { createRoot } from 'react-dom/client';
import Kek from './other-component.tsx';

const App = () => {
  return (
    <div>
      YOLO
      <Kek />
      <button onClick={window.lolApi.writeA}>click me</button>
    </div>
  );
};

const run = () => {
  const container = document.getElementById('root');
  const root = createRoot(container as HTMLElement);
  root.render(<App />);
};

run();
