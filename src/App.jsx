import React, { useState } from 'react';
import { CssBaseline, Container } from '@mui/material';
import Header from './components/Header';
import FormMoney from './components/FormMoney';
import Main from './components/Main';

function App() {
  const [count, setCount] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const component = isValid ? <Main count={count} /> : <FormMoney setCount={setCount} setIsValid={setIsValid} />;

  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="sm">
        <Header />
        {component}
      </Container>
    </div>
  );
}

export default App;
