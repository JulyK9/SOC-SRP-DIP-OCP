import { useState } from 'react';

const Auth = () => {
  const [userInputs, setUserInputs] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userInputs;

  const saveUserInputs = ({ target }) => {
    const { name, value } = target;

    setUserInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // AuthService auth에 관한 기능을 처리하는 모듈 => class 형태로
  const signin = () => {};
  const signup = () => {};
  const logout = () => {};

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label>
          email
          <input name="email" value={email} onChange={saveUserInputs} />
        </label>
      </div>
      <div>
        <label>
          password
          <input name="password" value={password} onChange={saveUserInputs} />
        </label>
      </div>
      <button onClick={signin}>signin</button>
      <button onClick={signup}>signup</button>
      <button onClick={logout}>logout</button>
    </form>
  );
};

export default Auth;
