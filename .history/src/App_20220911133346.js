import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className='App'>
      <Counter number={0} />
      <hr />
      <Todos />
    </div>
  );
}

export default App;
