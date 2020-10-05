import { useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const ScrollHandler = ({ location, children }) => {
  useEffect(() => {
      const element = document.getElementById(location.hash.replace("#", ""));
      setTimeout(() => {
        window.scrollTo({
          behavior: element ? "smooth" : "auto",
          top: element ? element.offsetTop : 0
        });
      }, 100);
    }, [location]);

  return children;
};

ScrollHandler.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    hash: PropTypes.string,
  }).isRequired
};

export default withRouter(ScrollHandler);