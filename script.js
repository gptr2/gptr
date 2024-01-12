import React, { useState, useEffect } from 'react';

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        // Обработка ошибок
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ФИО</th>
          <th>Возраст</th>
          <th>Пол</th>
          <th>Номер телефона</th>
          <th>Адрес</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>{user.phone}</td>
            <td>{`${user.address.city}, ${user.address.street}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
