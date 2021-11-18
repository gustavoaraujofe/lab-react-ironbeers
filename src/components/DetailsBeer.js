import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function DetailsBeer(props) {
  const { beer } = useParams();
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);

  let link = props.link
    ? props.link
    : `https://ih-beers-api2.herokuapp.com/beers/search?q=${beer}`;

  useEffect(() => {
    axios
      .get(link)
      .then((response) => {
        setBeers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [link, beer]);

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
              src={beers[0].image_url}
              alt="beer img"
              style={{ width: '100px', height: 'auto' }}
            />
          </div>

          <div className="card-body">
            <div className="d-flex d-row justify-content-between">
              <h2 className="w-75">{beers[0].name}</h2>
              <p className="h2 text-secondary">{beers[0].attenuation_level}</p>
            </div>
            <div className="d-flex d-row justify-content-between">
              <h5 className="text-secondary w-75">{beers[0].tagline}</h5>
              <p>
                <strong>{beers[0].first_brewed}</strong>
              </p>
            </div>
            <p className="card-text mt-3">{beers[0].description}</p>
            <small className="text-muted">{beers[0].contributed_by}</small>
          </div>
          <Link to="/all-beers" className="btn btn-primary mb-3 mt-2">
            Voltar
          </Link>
        </div>
      )}
    </div>
  );
}

export default DetailsBeer;
