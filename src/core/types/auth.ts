export interface IBaseUser {
  email: string;
}

export interface IBaseProfile {
  first_name: string;
  last_name: string;
  kind: {
    name: string;
    id: string;
  };
}

export enum AuthStage {
  SingIn,
  Verification,
  Information,
}
