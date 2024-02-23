import './index.css';
import { createRoot } from 'react-dom/client';

const App = () => {
  return <div>YOLO</div>;
};

const run = () => {
  const container = document.getElementById('root');
  const root = createRoot(container as HTMLElement);
  root.render(<App />);
};

run();
