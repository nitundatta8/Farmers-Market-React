import React from "react";
import PropTypes from "prop-types";

function Market(props) {
  return (
    <>
      <h2>{props.season}</h2>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.describe}</em></p>
    </>
  );
}

Market.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  describe: PropTypes.string,
  season: PropTypes.string.isRequired
};
export default Market;