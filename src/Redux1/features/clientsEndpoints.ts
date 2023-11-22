import { HTTPResponse } from "../../interfaces/common.interfaces";
import { api } from "../api/api";

export const clientEndpoints = api.injectEndpoints({
    endpoints:(builder)=>({
        getClients : builder.query<HTTPResponse<any>, void>({
            query:()=>"/api/v1/client/all?trash=0&page=1&size=10&search="
        })
    })
})

export const { useGetClientsQuery } = clientEndpoints;