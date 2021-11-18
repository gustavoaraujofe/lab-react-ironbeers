import { Link } from 'react-router-dom';

function CardBeer(props) {
  return (
    <Link to={`/${props.name}`} className="text-decoration-none text-dark">
      <div className="d-flex justify-content-evenly align-items-center container border-bottom pb-3 pt-3">
        <div>
          <img
            src={props.img}
            className="img-fluid rounded-start"
            alt="beer"
            style={{ height: '150px' }}
          />
        </div>
        <div style={{ maxWidth: '190px' }}>
          <h2 className="card-title pb-2">
            <strong>{props.name}</strong>
          </h2>
          <p className="card-title text-secondary mb-2 h5">
            <strong>{props.tagline}</strong>
          </p>
          <small className="card-text">Created by: {props.created}</small>
        </div>
      </div>
    </Link>
  );
}

export default CardBeer;
