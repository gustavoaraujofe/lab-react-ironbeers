import { useState, useEffect } from 'react';
import axios from 'axios';

import FormField from './FormField';

function NewBeer(props) {
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  });

  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    props.setNavBar(true);
  }, []);

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsSending(true);

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', formData)
      .then((response) => {
        console.log(response);
        setIsSending(false);
      })
      .catch((err) => {
        console.log(err);
        setIsSending(false);
      });
  }

  return (
    <form className="container" onSubmit={handleSubmit}>
      <FormField
        label="Name"
        id="inputName"
        type="text"
        name="name"
        onChange={handleChange}
        value={formData.name}
        required
      />
      <FormField
        label="Tagline"
        id="inputTagline"
        type="text"
        name="tagline"
        onChange={handleChange}
        value={formData.tagline}
        required
      />

      <FormField
        label="Description"
        id="inputDescription"
        type="text"
        name="description"
        onChange={handleChange}
        value={formData.description}
        required
      />

      <FormField
        label="First Brewed"
        id="inputFirstBrewed"
        type="text"
        name="first_brewed"
        onChange={handleChange}
        value={formData.first_brewed}
        required
      />

      <FormField
        label="Brewers Tips"
        id="inputTip"
        type="text"
        name="brewers_tips"
        onChange={handleChange}
        value={formData.brewers_tips}
        required
      />

      <FormField
        label="Attenuation Level"
        id="inputAttenuationLevel"
        type="number"
        name="attenuation_level"
        onChange={handleChange}
        value={formData.attenuation_level}
        required
      />

      <FormField
        label="Contributed By"
        id="inputContributed"
        type="text"
        name="contributed_by"
        onChange={handleChange}
        value={formData.contributed_by}
        required
      />

      <div className="mt-3 text-end">
        <button disabled={isSending} type="submit" className="btn btn-primary">
          {isSending ? (
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
              aria-hidden="true"
            ></span>
          ) : null}
          Submit
        </button>
      </div>
    </form>
  );
}

export default NewBeer;
