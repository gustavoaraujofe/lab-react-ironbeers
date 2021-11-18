import { Link } from 'react-router-dom';
import beer from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';

function Home() {
  return (
    <div className="d-flex flex-column">
      <Link to="all-beers" className="text-decoration-none text-dark mb-3">
        <img className="mw-100" src={beer} alt="Beers" />
        <div className="container">
          <h2>All Beers</h2>
          <p className="text-secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </Link>
      <Link to="random" className="text-decoration-none text-dark mb-3">
        <img className="mw-100" src={randomBeer} alt="Random Beers" />
        <div className="container">
          <h2>Random Beer</h2>
          <p className="text-secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </Link>
      <Link to="newbeer" className="text-decoration-none text-dark">
        <img className="mw-100" src={newBeer} alt="Beers" />
        <div className="container">
          <h2>New Beer</h2>
          <p className="text-secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Home;
