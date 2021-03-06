import * as React from "react";
import { useSetUserContext } from "../contexts/user";

const Login = () => {
  React.useEffect(() => {
    document.title = "Login";
  })
  const [user, setUser] = React.useState({
    email: "",
    password: ""
  });
  const handleUserFieldUpdate = (email, password) => {
    setUser({email, password})
  }
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setError(null);
  }, [user.email, user.password]);

  const setUserContext = useSetUserContext();
  return (
    <>
      <h1>Login</h1>
      {error && <p>Error: {error}</p>}
      <form
        onSubmit={e => {
          setError(null);
          e.preventDefault();
          if (
            user.email &&
            user.password &&
            user.password.trim() === "password"
          ) {
            setUserContext({
              name: "Test User",
              ...user
            });
          } else {
            setError("invalid");
          }
        }}
      >
        <input
          aria-label="email"
          aria-required="true"
          name="email"
          value={user.email}
          onChange={event => {
            handleUserFieldUpdate(event.target.value, user.password);
          }}
        />
        <input
          aria-label="password"
          aria-required="true"
          name="password"
          value={user.password}
          onChange={event => {
            handleUserFieldUpdate(user.email, event.target.value);
          }}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
