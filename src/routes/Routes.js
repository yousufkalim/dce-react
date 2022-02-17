import LoginScreen from "../containers/auth/Login";
import RegisterScreen from "../containers/auth/Register";
import VerifyEmailScreen from "../containers/auth/VerifyEmail";
import CreateAccountScreen from "../containers/auth/CreateAccount";

import LoginIcon from "@mui/icons-material/Login";
import RegisterIcon from "@mui/icons-material/AccountBox";
import VerifyEmailIcon from "@mui/icons-material/AccountBox";
import CreateAccountIcon from "@mui/icons-material/AccountBox";

// Routes for login
const DefaultRoutes = [
  {
    path: "*",
    name: "Login",
    icon: <LoginIcon />,
    element: LoginScreen,
  },
  {
    path: "/login",
    name: "Login",
    icon: <LoginIcon />,
    element: LoginScreen,
  },
  {
    path: "/register",
    name: "Register",
    icon: <RegisterIcon />,
    element: RegisterScreen,
  },
  {
    path: "/verify_email",
    name: "VerifyEmail",
    icon: <VerifyEmailIcon />,
    element: VerifyEmailScreen,
  },
  {
    path: "/create_account",
    name: "CreateAccount",
    icon: <CreateAccountIcon />,
    element: CreateAccountScreen,
  }
];

// Getting all routes
const RoutesObj = {
  DefaultRoutes,
};

export default RoutesObj;
