import React from 'react';
import './styles/admintile.css';
const AdminTile = ({ user, filename, permissions, dateCreated }) => {
  return (
    <div className="admintile">
      <div className="column">{user}</div>
      <div className="column">{filename}</div>
      <div className="column">{permissions}</div>
      <div className="column">{dateCreated}</div>
    </div>
  );
};

export default AdminTile;



