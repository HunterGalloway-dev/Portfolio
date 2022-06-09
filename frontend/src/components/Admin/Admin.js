import React from 'react';
import PropTypes from 'prop-types';
import './Admin.css';

import { Outlet } from 'react-router-dom';

const Admin = () => (
  <Outlet />
);

Admin.propTypes = {};

Admin.defaultProps = {};

export default Admin;
