import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import mapToCssModules from 'map-to-css-modules';
import Dropdown from '../Dropdown';

const propTypes = {
  children: PropTypes.node,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

const defaultProps = {
  tag: 'li',
};

const NavDropdown = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(cn(
    className,
    'nav-item'
  ), cssModule);

  return (
    <Dropdown {...attributes} tag={Tag} className={classes} />
  );
};

NavDropdown.propTypes = propTypes;
NavDropdown.defaultProps = defaultProps;

export default NavDropdown;