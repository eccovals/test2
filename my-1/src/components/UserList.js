import React from 'react';

export default function UserList() {
  const [users, setUsers] = React.useState(['John', 'Jane', 'Alice']);
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddUser = () => {
    if (inputValue.trim() !== '') {
      setUsers([...users, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
      <input type="text" value={inputValue} onChange={handleInputChange}></input>
      <button onClick={handleAddUser}>Add Users</button>
    </div>
  );
}
