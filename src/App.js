import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductsList from './components/products/ProductsList';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />

      </Routes>
    </>
  );
}

export default App;
