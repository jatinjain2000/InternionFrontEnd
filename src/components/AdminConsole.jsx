import React from 'react';
import './styles/adminconsole.css';
import AdminTile from './AdminTile';
import { useState } from 'react';

const AdminConsole = () => {
    const [data, setUserData] = useState([
        { id: 1, user: 'User A',filename:"file 1", status: 'pending', checked: false }
       
      ]);
  return (
    <div>
      <div className="admin">
        <div className="column">User</div>
        <div className="column">Filename</div>
        <div className="column">Permission</div>
        <div className="column">Date Created</div>
      </div>

      {data.map((item, index) => (
        <AdminTile
          key={item.id} // Make sure to use a unique key for each item in the map
          user={item.user}
          filename={item.filename}
          permissions={item.status}
          dateCreated={Date.now()}
        />
      ))}
    </div>
  );
};

export default AdminConsole;
