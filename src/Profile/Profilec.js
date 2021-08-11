import React from "react";
import PropTypes from "prop-types";

const Profile = ({ n, l, a, b, p, children, alert }) => {
  return (
    <div style={{ background: "aliceblue" }}>
      My Name Is {n} {l} <br /> I am {a} years <br />i am a {b} <br /> i want to
      be a {p}
      <br></br> {children} {alert()}
    </div>
  );
};

Profile.propTypes = {
  n: PropTypes.string,
  l: PropTypes.string,
  a: PropTypes.number,
  b: PropTypes.string,
  p: PropTypes.string,
};
export default Profile;
