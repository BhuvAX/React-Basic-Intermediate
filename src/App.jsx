import "./assets/user.css";
import userDetails from "./assets/user.json";
import UserCard from "./UserCard";
import UserCardClass from "./UserCardClass";

function App() {
  return (
    <div>
      <h1>Function Component</h1>
      <UserCard
        name={userDetails.name}
        phoneNumber={userDetails.phoneNumber}
        age={userDetails.age}
        address={userDetails.address}
      />
      <br />
      <h1>Class Component</h1>
      <UserCardClass
        name={userDetails.name}
        phoneNumber={userDetails.phoneNumber}
        age={userDetails.age}
        address={userDetails.address}
      />
    </div>
  );
}

export default App;
