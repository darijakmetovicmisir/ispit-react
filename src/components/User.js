import React from "react";
import PropTypes from "prop-types";

export default function User({ user }) {
  const { login, location, bio, avatar_url } = user;

  if (!user) {
    return null;
  }

  return (
    <div className="text-justify">
      <div className="d-flex align-items-center mb-5">
        <img src={avatar_url} alt="logo" className="title-image" />
        <span className="title-name">{login}</span>
      </div>
      <p>
        <strong>BIO: </strong>
        {bio}
      </p>
      <p>
        <strong>LOCATION: </strong>
        {location}
      </p>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.object,
};
