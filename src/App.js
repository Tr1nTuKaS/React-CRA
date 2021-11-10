import "./App.css";
import CardSection from "./component/card";
import Hero from "./component/Hero";

const card = {
  title: "partfolio",
  subTitle: "Lost my mind",
  cardName: "Came look",
  cardImage: [
    "one.jpg",
    "amazing.jpg",
    "maxresdefault.jpg",
    "mike-supercell.jpg",
  ],
};

function App() {
  return (
    <div className="App">
      <Hero />
      <CardSection />

      <div className="center">
        <section>
          <h1> title </h1>
          <div className="card">
            <h4>subtitle</h4>
            <img src="./assets/one.jpg" alt="empty" />
          </div>
        </section>
        <section>
          <h1> title </h1>
          <div className="card">
            <h4>subtitle</h4>
            <img src="./assets/amazing.jpg" alt="empty" />
          </div>
        </section>
        <section>
          <h1> title </h1>
          <div className="card">
            <h4>subtitle</h4>
            <img src="./assets/maxresdefault.jpg" alt="empty" />
          </div>
        </section>
        <section>
          <h1> title </h1>
          <div className="card">
            <h4>subtitle</h4>
            <img src="./assets/mike-supercell.jpg" alt="empty" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
