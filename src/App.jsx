import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { PromptDashboard } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <PromptDashboard />
    </BrowserRouter>
  );
}

export default App;
