import React from "react";
import PropTypes from "prop-types";
import Typography from "components/atoms/Typography";

const Label = ({ children }) => {
  return (
    <Typography variant="label" color="textSecondary1">
      {children}
    </Typography>
  );
};

Label.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Label;
