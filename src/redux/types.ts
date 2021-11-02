interface Payload {
  data?: any;
  token?: string;
  id?: string | number;
}

interface Params {
  type: string;
  payload?: Payload;
}

export type Dispatch = (params: Params | Function) => void;
export type GetState = () => Reducers;

export interface Action {
  type: string;
  payload?: Payload;
}

export interface Reducers {
  auth: AuthState;
}

export interface AuthState {
  login: {
    isLoading: boolean;
    error: string;
    dataLogin: any;
  };
}
