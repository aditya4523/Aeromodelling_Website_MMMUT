import React from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';

function App() {
  // Filhaal, hum sirf HomePage dikha rahe hain.
  // Baad mein yahan routing add karenge.
  return (
    <>
      <Header />
      <HomePage />
    </>
  );
}

export default App;