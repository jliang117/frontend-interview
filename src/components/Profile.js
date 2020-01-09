import * as React from "react";
import { useUserContext } from "../contexts/user";

/**
 * This should update the user context with the new values for email and name
 */
const Profile = () => {
  const user = useUserContext();
  const [updatedUserInfo, setUpdatedUserInfo] = React.useState({
    name: user.name,
    email: user.email
  });
  const handleUpdateUserInfo = (name, email) => {
    setUpdatedUserInfo({name, email})
  }
  return (
    <div>
      <h1>Edit your profile</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          user.name = updatedUserInfo.name;
          user.email = updatedUserInfo.email;
        }}
      >
        <input
          name="email"
          value={updatedUserInfo.email}
          onChange={e => {
            handleUpdateUserInfo(user.name, e.target.value)
          }}
        />
        <input
          name="name"
          value={updatedUserInfo.name}
          onChange={e => {
            handleUpdateUserInfo(e.target.value, user.email)
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Profile;
