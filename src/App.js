import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <form>
      Ваше имя:<br/>
      <input 
        name="firstName" 
        type="text"
        
      ></input>
      <input type="submit" value="Отправить" />
    </form>
  );
}

export default App;
