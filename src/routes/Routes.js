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
import Chat from "../components/Chat/Chat";
import ClientOrdersScreen from "../containers/client/Orders";
import ClientTailorsScreen from "../containers/client/Tailors";
import ClientViewTailorScreen from "../containers/client/ViewTailor";
import ClientViewCatalogScreen from "../containers/client/ViewCatalog";
import ClientOrderFromCatalogScreen from "../containers/client/OrderFromCatalog";
import ClientCreateOrderScreen from "../containers/client/CreateOrder";
import ClientProfileScreen from "../containers/client/Profile";
import ClientAdsScreen from "../containers/client/MyAds";
import ClientCreateAdScreen from "../containers/client/CreateAd";
import ClientEditAdScreen from "../containers/client/EditAd";
import ClientMeasurementsScreen from "../containers/client/Measurements";
import ClientFaqsScreen from "../containers/client/Faqs";

import TailorHomeScreen from "../containers/tailor/Home";
import TailorCatalogScreen from "../containers/tailor/Catalog";
import TailorViewCatalogScreen from "../containers/tailor/ViewCatalog";
import TailorCreateCatalogScreen from "../containers/tailor/CreateCatalog";
import TailorEditCatalogScreen from "../containers/tailor/EditCatalog";
import TailorOrdersScreen from "../containers/tailor/Orders";
import TailorQuotesScreen from "../containers/tailor/Quotes";
import TailorViewQuoteScreen from "../containers/tailor/ViewQuote";
import TailorProfileScreen from "../containers/tailor/Profile";
import TailorHowItWorksScreen from "../containers/tailor/HowItWorks";
import TailorTermsAndConditionsScreen from "../containers/tailor/TermsAndConditions";
import TailorSearchResultsScreen from "../containers/tailor/SearchResult";
import TailorSupportCentreScreen from "../containers/tailor/SupportCentre";
import TailorClientProfileScreen from "../containers/tailor/ClientProfile";

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
import ClientTailorsIcon from "@mui/icons-material/AccountBox";
import ClientViewTailorIcon from "@mui/icons-material/AccountBox";
import ClientViewCatalogIcon from "@mui/icons-material/AccountBox";
import ClientOrderFromCatalogIcon from "@mui/icons-material/AccountBox";
import ClientCreateOrderIcon from "@mui/icons-material/AccountBox";
import ClientProfileIcon from "@mui/icons-material/AccountBox";
import ClientAdsIcon from "@mui/icons-material/AccountBox";
import ClientCreateAdIcon from "@mui/icons-material/AccountBox";
import ClientEditAdIcon from "@mui/icons-material/AccountBox";
import TailorHomeIcon from "@mui/icons-material/AccountBox";
import TailorCatalogIcon from "@mui/icons-material/AccountBox";
import TailorViewCatalogIcon from "@mui/icons-material/AccountBox";
import TailorCreateCatalogIcon from "@mui/icons-material/AccountBox";
import TailorEditCatalogIcon from "@mui/icons-material/AccountBox";
import TailorOrdersIcon from "@mui/icons-material/AccountBox";
import TailorQuotesIcon from "@mui/icons-material/AccountBox";
import TailorViewQuoteIcon from "@mui/icons-material/AccountBox";
import TailorProfileIcon from "@mui/icons-material/AccountBox";
import TailorHowItWorksIcon from "@mui/icons-material/AccountBox";
import TailorTermsAndConditionsIcon from "@mui/icons-material/AccountBox";
import TailorSearchResultsIcon from "@mui/icons-material/AccountBox";
import TailorSupportCentreIcon from "@mui/icons-material/AccountBox";
import TailorClientProfileIcon from "@mui/icons-material/AccountBox";

// Routes for Auth
const AuthRoutes = [
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
];

// Routes for Client
const ClientRoutes = [
  {
    path: "*",
    name: "ClientHome",
    icon: <ClientHomeIcon />,
    element: ClientHomeScreen,
  },
  {
    path: "/home",
    name: "ClientHome",
    icon: <ClientHomeIcon />,
    element: ClientHomeScreen,
  },
  {
    path: "/chat",
    name: "Chat",
    icon: <ClientHomeIcon />,
    element: Chat,
  },
  {
    path: "/orders",
    name: "ClientOrders",
    icon: <ClientOrdersIcon />,
    element: ClientOrdersScreen,
  },
  {
    path: "/tailors",
    name: "ClientDesigners",
    icon: <ClientTailorsIcon />,
    element: ClientTailorsScreen,
  },
  {
    path: "/measurements",
    name: "Measurements",
    icon: <ClientTailorsIcon />,
    element: ClientMeasurementsScreen,
  },
  {
    path: "/faqs",
    name: "Faqs",
    icon: <ClientTailorsIcon />,
    element: ClientFaqsScreen,
  },
  {
    path: "/view_tailor/:id",
    name: "ClientViewTailorScreen",
    icon: <ClientViewTailorIcon />,
    element: ClientViewTailorScreen,
  },
  {
    path: "/view_catalog/:id",
    name: "CailorViewCatalog",
    icon: <ClientViewCatalogIcon />,
    element: ClientViewCatalogScreen,
  },
  {
    path: "/order_from_catalog/:id",
    name: "ClientOrderFromCatalog",
    icon: <ClientOrderFromCatalogIcon />,
    element: ClientOrderFromCatalogScreen,
  },
  {
    path: "/create_order/:id",
    name: "ClientCreateOrder",
    icon: <ClientCreateOrderIcon />,
    element: ClientCreateOrderScreen,
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
    path: "/edit_ad/:id",
    name: "ClientEditAd",
    icon: <ClientEditAdIcon />,
    element: ClientEditAdScreen,
  },
];

// Routes for Tailor
const TailorRoutes = [
  {
    path: "*",
    name: "TailorHome",
    icon: <TailorHomeIcon />,
    element: TailorHomeScreen,
  },
  {
    path: "/home",
    name: "TailorHome",
    icon: <TailorHomeIcon />,
    element: TailorHomeScreen,
  },
  {
    path: "/catalog",
    name: "TailorCatalog",
    icon: <TailorCatalogIcon />,
    element: TailorCatalogScreen,
  },
  {
    path: "/view_catalog/:id",
    name: "TailorViewCatalog",
    icon: <TailorViewCatalogIcon />,
    element: TailorViewCatalogScreen,
  },
  {
    path: "/create_catalog",
    name: "TailorCreateCatalog",
    icon: <TailorCreateCatalogIcon />,
    element: TailorCreateCatalogScreen,
  },
  {
    path: "/edit_catalog/:id",
    name: "TailorEditCatalog",
    icon: <TailorEditCatalogIcon />,
    element: TailorEditCatalogScreen,
  },
  {
    path: "/orders",
    name: "TailorOrders",
    icon: <TailorOrdersIcon />,
    element: TailorOrdersScreen,
  },
  {
    path: "/quotes",
    name: "TailorQuote",
    icon: <TailorQuotesIcon />,
    element: TailorQuotesScreen,
  },
  {
    path: "/view_quote/:id",
    name: "TailorViewQuote",
    icon: <TailorViewQuoteIcon />,
    element: TailorViewQuoteScreen,
  },
  {
    path: "/profile",
    name: "TailorProfile",
    icon: <TailorProfileIcon />,
    element: TailorProfileScreen,
  },
  {
    path: "/how_it_works",
    name: "TailorHowItWorks",
    icon: <TailorHowItWorksIcon />,
    element: TailorHowItWorksScreen,
  },
  {
    path: "/terms_and_conditions",
    name: "TailorTermsAndConditions",
    icon: <TailorTermsAndConditionsIcon />,
    element: TailorTermsAndConditionsScreen,
  },
  {
    path: "/search_result",
    name: "search_result",
    icon: <TailorSearchResultsIcon />,
    element: TailorSearchResultsScreen,
  },
  {
    path: "/support_centre",
    name: "support_centre",
    icon: <TailorSupportCentreIcon />,
    element: TailorSupportCentreScreen,
  },
  {
    path: "/client_profile",
    name: "clientprofile",
    icon: <TailorClientProfileIcon />,
    element: TailorClientProfileScreen,
  },
];

// Getting all routes
const RoutesObj = {
  AuthRoutes,
  ClientRoutes,
  TailorRoutes,
};

export default RoutesObj;
