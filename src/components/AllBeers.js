import { useState, useEffect } from 'react';
import axios from 'axios';

import CardBeer from './CardBeer';

function AllBeers(props) {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        setBeers([...response.data]);
        setLoading(false);
        props.setNavBar(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div
          className="text-center d-flex justify-content-center align-items-end"
          style={{ height: '300px' }}
        >
          <div className="spinner-border" role="status"></div>
        </div>
      ) : (
        <div>
          {beers.map((currentBeer) => {
            return (
              <CardBeer
                key={currentBeer.name}
                name={currentBeer.name}
                tagline={currentBeer.tagline}
                created={currentBeer.contributed_by}
                img={currentBeer.image_url}
              />
            );
          })}{' '}
        </div>
      )}
    </div>
  );
}

export default AllBeers;
