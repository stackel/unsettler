import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

export default function Card({ vacancy }) {
  return (
    <div key={vacancy.id}>
      {vacancy.title}
      {vacancy.employer}
      {vacancy.municipality}
    </div>
  );
}

Card.propTypes = {
  vacancy: PropTypes.shape({
    key: PropTypes.string,
    title: PropTypes.string,
    employer: PropTypes.string,
    municipality: PropTypes.string,
  }).isRequired,
};
