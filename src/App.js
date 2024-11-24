import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent';
import { MyContextProvider } from './context/MyContext';

function App() {
  return (
    <MyContextProvider>
    <Parent/>
    </MyContextProvider>
  );
}

export default App;
