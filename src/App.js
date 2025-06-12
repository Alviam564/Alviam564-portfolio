import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './page/Home';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
