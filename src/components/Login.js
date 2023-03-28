import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [username, SetUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    console.log(props.users);
    e.preventDefault();
    console.log(username, password);
    const existUser = props.users.find(
      (user) => user.name === username && user.password === password
    );
    if (existUser) navigate("/to-do");
    else alert("El usuario o la contraseña no son correctos");
  };

  return (
    <div className="input__container">
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Introduce tu nombre de usuario"
          onChange={(e) => {
            SetUsername(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          placeholder="Introduce tu contraseña"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button type="submit">Inicia Sesión</button>
      </form>
    </div>
  );
}

export default Login;
