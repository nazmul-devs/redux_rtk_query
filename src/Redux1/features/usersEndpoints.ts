import { loginFormType } from "../../components/LoginForm";
import { IGetUserResponse } from "../../interfaces/common.interfaces";
import { api } from "../api/api";




export const userEndpoints = api.injectEndpoints({
    endpoints: (builder) => ({
      getUsers: builder.query<IGetUserResponse, void>({
        query: () => '/api/v1/configuration/user/all',       
      }
      ),


      loginUser: builder.mutation<any, loginFormType>({
        query: (body) => ({
          url:'/api/v1/auth/login',
          method:'POST',
          body,
          
        })
      },
      ),
      
    }),
  });
  
  export const { useGetUsersQuery, useLoginUserMutation } = userEndpoints;