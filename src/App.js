import logo from './logo.svg';
import StateExample from './components/StateExample';
import { useEffect } from 'react';
import { Container } from '@mui/material';
import FetchComments from './components/FetchComments';

function App() {

  useEffect( () => {
    document.title = "Material UI React";
  },[]);

  return (
    <Container
      maxWidth = "xl"
    >
      <div className="App">
        <StateExample/>
        <FetchComments/>
      </div>
    </Container>
  );
}

export default App;
