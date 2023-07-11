import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Auth = () => {
  // form 핸들링하는 부분도 커스텀으로 뺄 수 있음
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

  const { signup, signin, logout } = useAuth();

  // AuthService auth에 관한 기능을 처리하는 모듈 => class 형태로
  const signinWithForm = () => {
    signin(email, password);
  };
  const signupWithForm = () => {
    signup(email, password);
  };

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
      <button onClick={signinWithForm}>signin</button>
      <button onClick={signupWithForm}>signup</button>
      <button onClick={logout}>logout</button>
    </form>
  );
};

export default Auth;
