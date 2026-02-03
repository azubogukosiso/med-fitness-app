export type AuthContextType = {
  user: { token: string; schoolEmail: string; isDoctor: boolean } | null;
  verifyEmail: (
    e: React.SubmitEvent<HTMLFormElement>,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    emailAddress: string,
  ) => Promise<void>;
  createPassword: (
    e: React.SubmitEvent<HTMLFormElement>,
    password: string,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    userId: string,
  ) => Promise<{ success: boolean }>;
  login: (
    e: React.SubmitEvent<HTMLFormElement>,
    schoolEmail: string,
    password: string,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    isDoctorLogin?: boolean,
  ) => Promise<{ success: boolean; message?: string }>;
  logout: () => Promise<void>;
  loading: boolean;
};
