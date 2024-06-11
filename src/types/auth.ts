export interface ILoginResponse {
  ok: boolean;
  result: {
    access_token: string;
    refresh_token: string;
  };
}
