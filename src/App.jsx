import { useState } from 'react';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid username and password');
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <form action='' onSubmit={handleSubmit}>
          <h1>Login Form</h1>
          {error && <p>{error}</p>}
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            placeholder='Username'
            id='username'
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />{' '}
          <br />
          <br />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            placeholder='Password'
            id='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{' '}
          <br />
          <br />
          <button type='submit'>Submit</button>
        </form>
      ) : (
        <h2>Welcome user!</h2>
      )}
    </div>
  );
};

export default App;
