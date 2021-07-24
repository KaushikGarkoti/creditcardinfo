import './App.css';
import CardList from './components/CardList';
import Form from '../src/components/Form'
import { useState } from 'react';
let cards = ['1234567891234567', '1236457891234765', '1212345678945612'];
function App() {
  const [numCards, setNumCards] = useState(cards.length);
  const inputHandler = (Singlecard) => {
    if(cards.includes(Singlecard)) {
      window.alert('Card Already exists')
      return
    } else {
      cards.push(Singlecard)
      setNumCards(numCards + 1)
    }
  }
  return (
    <div className="App">
      <h2>
        Credit Card App
      </h2>
      <h3>
        Enter Credit Card details below
      </h3>
      <Form saveHandler = {inputHandler}></Form>
      <CardList cards = {cards}/>
    </div>
  );
}

export default App;
