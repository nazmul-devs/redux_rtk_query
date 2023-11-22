// Users.tsx

import React from "react";
import { useGetUsersQuery } from "../Redux/features/usersEndpoints";

const Users: React.FC = () => {
  const { data: users, isLoading } = useGetUsersQuery();

  const user = users?.data?.map((item) => <>{item.user_full_name}</>);

  return (
    <div>
      {user}

      <button>Create User</button>
    </div>
  );
};

export default Users;
