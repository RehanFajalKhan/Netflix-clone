export type State = {
    errors?: {
      email?: string[];
      password?: string[];
    };
    message?: string | null;
  };
