import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useGetInitialTokenQuery } from "./Redux/api/api";
import { clearUser, selectUser, setUser } from "./Redux/api/authSlice";
import LoginForm from "./components/LoginForm";
import Users from "./components/Users";
import Clients from "./components/Clients";

function App() {
  const { data, isSuccess, isLoading } = useGetInitialTokenQuery();

  const { user } = useSelector(selectUser) as { user: any };

  const [fetchIntial, setFetchIntial] = useState(true);

  const newUser = data?.data;

  const dispatch = useDispatch();

  useEffect(() => {
    if (newUser) {
      dispatch(
        setUser({
          username: newUser?.user_last_name + " " + newUser?.user_first_name,
          userid: newUser?.user_role_id,
        })
      );
    }

    if (isSuccess) {
      setFetchIntial(false);
    }
  }, [isSuccess, isLoading]);

  const handleLogout = () => {
    dispatch(clearUser());
  };

  if (fetchIntial) {
    return <>Loading...</>;
  }

  return (
    <div className="App">
      {user?.user ? (
        <>
          <span className="nav">
            <h3>Wellcome, {user?.user?.username}</h3>
            <h2>Hello check</h2>
            <button onClick={handleLogout}>Logout</button>
          </span>
          <Users />
          <Clients />
        </>
      ) : (
        <LoginForm />
      )}
    </div>
  );
}

export default App;
