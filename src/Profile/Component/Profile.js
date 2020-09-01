import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const Profile = (props) => {
  return (
    <div>
      <h2>My name is {props.name}</h2>

      <Button
        variant="contained"
        color="primary"
        onClick={() => props.handleNamee(props.name)}
      >
        Show me
      </Button>
      <p>{props.bio}</p>
      <h3>I am an {props.job}</h3>
    </div>
  );
};

Profile.defaultProps = {
  name: "Gadour Bessaâdi",
};

Profile.propTypes = {
  name: PropTypes.string,
  bio: PropTypes.string,
  job: PropTypes.string,
};
export default Profile;
