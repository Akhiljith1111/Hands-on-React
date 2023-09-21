
import './App.css';
// import Reuse from './Reuse';
import Container from './components/Container';
import ContainerFunc from './components/ContainerFunc';

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <Container />
      <ContainerFunc />
      {/* <Reuse>
        <h1>I'm under Reuse Component</h1>
      </Reuse> */}
    </div>
  );
}

export default App;
