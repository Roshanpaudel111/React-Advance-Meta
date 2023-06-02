import React from 'react';
const api = 'https://randomuser.me/api/?results=1';

function App() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {
    fetch(api)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Error' + res.status);
        }
      })
      .then((data) => {
        setUser(data);
        console.log(user);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div style={{ padding: '40px' }}>
      <h1>Customer data</h1>
      <h3>Name : {user.results[0].id.name}</h3>
      <img src={user.results[0].picture.large} alt='' />
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default App;
