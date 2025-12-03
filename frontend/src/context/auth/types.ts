export type AuthContextType = {
  user: { token: string; schoolEmail: string; isDoctor: boolean } | null;
  login: (
    e: React.FormEvent<HTMLFormElement>,
    schoolEmail: string,
    password: string,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<{ success: boolean; message?: string }>;
  logout: () => Promise<void>;
  loading: boolean;
};
