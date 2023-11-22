export interface HTTPResponse<T> {
    success: boolean;
    count?: number;
    data?: T;
    message?: string;
  }
  
  export interface IUser {
    user_id:number,
    user_full_name:string,
}

export interface IGetUserResponse {
  data:IUser[];
  success:boolean;
  message?:string
}