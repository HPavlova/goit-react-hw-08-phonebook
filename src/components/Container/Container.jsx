import PropTypes from 'prop-types';

export default function Container({ children }) {
  return <div>{children}</div>;
}

Container.prototype = { children: PropTypes.node.isRequired };
