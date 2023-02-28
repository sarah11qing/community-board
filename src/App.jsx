import './App.css';
import Banner from './components/Banner';
import Card from './components/Card';
import { cards } from './data';

function App() {

  return (
    <div className="app">
      <Banner />
      <ul className="card-list">
        {cards.map(card => {
          return (
            <Card 
              key="id"
              title={card.title}
              subtitle={card.subtitle}
              img={card.img}
              link={card.link}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
