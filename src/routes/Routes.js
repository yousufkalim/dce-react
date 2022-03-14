import LoginScreen from "../containers/auth/Login";
import SelectRoleScreen from "../containers/auth/SelectRole";
import ClientRegisterScreen from "../containers/auth/ClientRegister";
import ClientVerifyEmailScreen from "../containers/auth/ClientVerifyEmail";
import ClientCreateAccountScreen from "../containers/auth/ClientCreateAccount";
import TailorRegisterScreen from "../containers/auth/TailorRegister";
import TailorVerifyEmailScreen from "../containers/auth/TailorVerifyEmail";
import TailorCreateAccount1Screen from "../containers/auth/TailorCreateAccount1";
import TailorCreateAccount2Screen from "../containers/auth/TailorCreateAccount2";
import ClientHomeScreen from "../containers/client/Home";
import ClientOrdersScreen from "../containers/client/Orders";
import ClientDesignersScreen from "../containers/client/Designers";
import ClientProfileScreen from "../containers/client/Profile";
import ClientAdsScreen from "../containers/client/MyAds";
import ClientCreateAdScreen from "../containers/client/CreateAd";
import ClientEditAdScreen from "../containers/client/EditAd";
import TailorHomeScreen from "../containers/tailor/Home";
import TailorCatalog from "../containers/tailor/Catalog";

import LoginIcon from "@mui/icons-material/Login";
import SelectRoleIcon from "@mui/icons-material/AccountBox";
import ClientRegisterIcon from "@mui/icons-material/AccountBox";
import ClientVerifyEmailIcon from "@mui/icons-material/AccountBox";
import ClientCreateAccountIcon from "@mui/icons-material/AccountBox";
import TailorRegisterIcon from "@mui/icons-material/AccountBox";
import TailorVerifyEmailIcon from "@mui/icons-material/AccountBox";
import TailorCreateAccount1Icon from "@mui/icons-material/AccountBox";
import TailorCreateAccount2Icon from "@mui/icons-material/AccountBox";
import ClientHomeIcon from "@mui/icons-material/AccountBox";
import ClientOrdersIcon from "@mui/icons-material/AccountBox";
import ClientDesignersIcon from "@mui/icons-material/AccountBox";
import ClientProfileIcon from "@mui/icons-material/AccountBox";
import ClientAdsIcon from "@mui/icons-material/AccountBox";
import ClientCreateAdIcon from "@mui/icons-material/AccountBox";
import ClientEditAdIcon from "@mui/icons-material/AccountBox";

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
    path: "/select_role",
    name: "SelectRoleScreen",
    icon: <SelectRoleIcon />,
    element: SelectRoleScreen,
  },
  {
    path: "/client_register",
    name: "ClientRegister",
    icon: <ClientRegisterIcon />,
    element: ClientRegisterScreen,
  },
  {
    path: "/client_verify_email",
    name: "ClientVerifyEmail",
    icon: <ClientVerifyEmailIcon />,
    element: ClientVerifyEmailScreen,
  },
  {
    path: "/client_create_account",
    name: "ClientCreateAccount",
    icon: <ClientCreateAccountIcon />,
    element: ClientCreateAccountScreen,
  },
  {
    path: "/tailor_register",
    name: "TailorRegister",
    icon: <TailorRegisterIcon />,
    element: TailorRegisterScreen,
  },
  {
    path: "/tailor_verify_email",
    name: "TailorVerifyEmail",
    icon: <TailorVerifyEmailIcon />,
    element: TailorVerifyEmailScreen,
  },
  {
    path: "/tailor_create_account_1",
    name: "TailorCreateAccount1",
    icon: <TailorCreateAccount1Icon />,
    element: TailorCreateAccount1Screen,
  },
  {
    path: "/tailor_create_account_2",
    name: "TailorCreateAccount2",
    icon: <TailorCreateAccount2Icon />,
    element: TailorCreateAccount2Screen,
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
    path: "/create_ad",
    name: "ClientCreateAd",
    icon: <ClientCreateAdIcon />,
    element: ClientCreateAdScreen,
  },
  {
    path: "/my_ads",
    name: "ClientAds",
    icon: <ClientAdsIcon />,
    element: ClientAdsScreen,
  },
  {
    path: "/edit_ad",
    name: "ClientEditAd",
    icon: <ClientEditAdIcon />,
    element: ClientEditAdScreen,
  },
  {
    path: "/tailor_home",
    name: "TailorHome",
    icon: <ClientHomeIcon />,
    element: TailorHomeScreen,
  },
  {
    path: "/catalog",
    name: "TailorCatalog",
    icon: <ClientHomeIcon />,
    element: TailorCatalog,
  },
];

// Getting all routes
const RoutesObj = {
  DefaultRoutes,
};

export default RoutesObj;
