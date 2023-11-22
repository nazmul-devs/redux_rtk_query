// Users.tsx

import React from "react";
import { useGetClientsQuery } from "../Redux/features/clientsEndpoints";

const Clients: React.FC = () => {
  const { data, isLoading } = useGetClientsQuery();

  const client = data?.data;

  console.log({ client });

  return (
    <div>
      <h2>Clients list</h2>
    </div>
  );
};

export default Clients;
