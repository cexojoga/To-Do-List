import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState(props.users);
  const navigate = useNavigate();

  useEffect(() => {
    setUsers(props.users);
  }, [props]);

  const handleRegister = (e) => {
    e.preventDefault();
    const userAlreadyExists = users.find((user) => user.name === username);

    if (userAlreadyExists) alert("El usuario ya existe");
    else {
      console.log(username, password);
      props.registerRequested(username, password);
      navigate("/to-do");
    }
  };
  return (
    <div className="input__container">
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Introduce tu nombre de usuario"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          placeholder="Introduce una contraseña"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button type="submit">Registrate</button>
      </form>
    </div>
  );
}

export default Register;
