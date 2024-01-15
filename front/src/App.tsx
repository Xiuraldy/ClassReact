import { useState } from 'react';
import { Button, Input } from './components';
import { Routes, Header, Footer } from './core';
import { ContainerBody } from './style';

function App() {

  const [valueInput, setValueInput] = useState("")
  //console.log(valueInput)

  return (
    <div className="App">
      <ContainerBody>
        <Header />
        <Routes />
        <Footer />
      </ContainerBody>
    </div>
  );
}

export default App;
