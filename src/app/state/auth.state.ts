export interface AuthState {
  isLoading: boolean;
  isLoggedIn: boolean;
  isRegistered: boolean;
  user: {};
  myArticles: any;
  error: string | null;
}

export const initialState: AuthState = {
  isLoading: false,
  isLoggedIn: false,
  isRegistered: false,
  user: {},
  myArticles: [],
  error: null,
};
