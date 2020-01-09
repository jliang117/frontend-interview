import * as React from "react";
import { useUserContext } from "../contexts/user";

const Home = () => {
  const user = useUserContext();
  React.useEffect(() => {
    document.title = "Home";
  })
  return (
    <main>
      <h1>Welcome {user.name}</h1>
    </main>
  );
};

export default Home;
