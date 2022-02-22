import LoginScreen from "../containers/auth/Login";
import RegisterScreen from "../containers/auth/Register";
import VerifyEmailScreen from "../containers/auth/VerifyEmail";
import CreateAccountScreen from "../containers/auth/CreateAccount";
import ClientHomeScreen from "../containers/client/Home";
import ClientOrdersScreen from "../containers/client/Orders";
import ClientDesignersScreen from "../containers/client/Designers";
import ClientProfileScreen from "../containers/client/Profile";
import ClientMyAdsScreen from "../containers/client/MyAds";

import LoginIcon from "@mui/icons-material/Login";
import RegisterIcon from "@mui/icons-material/AccountBox";
import VerifyEmailIcon from "@mui/icons-material/AccountBox";
import CreateAccountIcon from "@mui/icons-material/AccountBox";
import ClientHomeIcon from "@mui/icons-material/AccountBox";
import ClientOrdersIcon from "@mui/icons-material/AccountBox";
import ClientDesignersIcon from "@mui/icons-material/AccountBox";
import ClientProfileIcon from "@mui/icons-material/AccountBox";
import ClientMyAdsIcon from "@mui/icons-material/AccountBox";

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
  },
  {
    path: "/home",
    name: "ClientHome",
    icon: <ClientHomeIcon />,
    element: ClientHomeScreen,
  },
  {
    path: "/orders",
    name: "ClientOrders",
    icon: <ClientOrdersIcon />,
    element: ClientOrdersScreen,
  },
  {
    path: "/designers",
    name: "ClientDesigners",
    icon: <ClientDesignersIcon />,
    element: ClientDesignersScreen,
  },
  {
    path: "/profile",
    name: "ClientProfile",
    icon: <ClientProfileIcon />,
    element: ClientProfileScreen,
  },
  {
    path: "/my_ads",
    name: "ClientAds",
    icon: <ClientMyAdsIcon />,
    element: ClientMyAdsScreen,
  }
];

// Getting all routes
const RoutesObj = {
  DefaultRoutes,
};

export default RoutesObj;
