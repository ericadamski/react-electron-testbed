import React, { PropTypes } from 'react';

const Photo = ({ click, photo }) => (
  <div onClick={click}>
    {photo}
  </div>
);

Photo.propTypes = {
  click: PropTypes.func.isRequired,
  photo: PropTypes.object.isRequired
};

export default Photo;
