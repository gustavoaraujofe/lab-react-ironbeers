import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Random(props) {
  const { beer } = useParams();
  const [beers, setBeers] = useState({});
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        setBeers(response.data);
        setLoading(false);
        props.setNavBar(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [beer, refresh]);

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
        <div
          className="card w-100 d-flex align-items-center justify-content-center"
          style={{ width: '18rem' }}
        >
          <div className="d-flex align-items-center justify-content-center">
            <img
              className="card-img-top mt-3"
              src={beers.image_url}
              alt="beer img"
              style={{ width: '100px', height: 'auto' }}
            />
          </div>

          <div className="card-body">
            <div className="d-flex d-row justify-content-between">
              <h2 className="w-75">{beers.name}</h2>
              <p className="h2 text-secondary">{beers.attenuation_level}</p>
            </div>
            <div className="d-flex d-row justify-content-between">
              <h5 className="text-secondary w-75">{beers.tagline}</h5>
              <p>
                <strong>{beers.first_brewed}</strong>
              </p>
            </div>
            <p className="card-text mt-3">{beers.description}</p>
            <small className="text-muted">{beers.contributed_by}</small>
          </div>
          <button
            className="btn btn-primary mb-3 mt-2"
            type="submit"
            onClick={() => setRefresh(!refresh)}
          >
            Refresh
          </button>
        </div>
      )}
    </div>
  );
}

export default Random;
