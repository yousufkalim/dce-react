// Auth Screens
import LoginScreen from '../containers/auth/Login';
import SelectRoleScreen from '../containers/auth/SelectRole';
import ClientRegisterScreen from '../containers/auth/ClientRegister';
import ClientVerifyEmailScreen from '../containers/auth/ClientVerifyEmail';
import ClientCreateAccountScreen from '../containers/auth/ClientCreateAccount';
import TailorRegisterScreen from '../containers/auth/TailorRegister';
import TailorVerifyEmailScreen from '../containers/auth/TailorVerifyEmail';
import TailorCreateAccountScreen from '../containers/auth/TailorCreateAccount';

// Client Screens
import ClientHomeScreen from '../containers/client/Home';
import ClientOrdersScreen from '../containers/client/Orders';
import ClientTailorsScreen from '../containers/client/Tailors';
import ClientViewTailorScreen from '../containers/client/ViewTailor';
import ClientViewCatalogScreen from '../containers/client/ViewCatalog';
import ClientOrderFromCatalogScreen from '../containers/client/OrderFromCatalog';
import ClientCreateOrderScreen from '../containers/client/CreateOrder';
import ClientProfileScreen from '../containers/client/Profile';
import ClientTermsAndConditionsScreen from '../containers/client/TermsAndConditions';
import ClientAdsScreen from '../containers/client/MyAds';
import ClientCreateAdScreen from '../containers/client/CreateAd';
import ClientEditAdScreen from '../containers/client/EditAd';
import ClientFaqsScreen from '../containers/client/Faqs';
import ClientSearchResultsScreen from '../containers/client/SearchResults';
import ClientSupportCenterScreen from '../containers/client/SupportCenter';
import ClientViewOrderScreen from '../containers/client/ViewOrder';

// Tailor Screens
import TailorHomeScreen from '../containers/tailor/Home';
import TailorCatalogScreen from '../containers/tailor/Catalog';
import TailorViewCatalogScreen from '../containers/tailor/ViewCatalog';
import TailorCreateCatalogScreen from '../containers/tailor/CreateCatalog';
import TailorEditCatalogScreen from '../containers/tailor/EditCatalog';
import TailorOrdersScreen from '../containers/tailor/Orders';
import TailorQuotesScreen from '../containers/tailor/Quotes';
import TailorViewQuoteScreen from '../containers/tailor/ViewQuote';
import TailorProfileScreen from '../containers/tailor/Profile';
import TailorHowItWorksScreen from '../containers/tailor/HowItWorks';
import TailorTermsAndConditionsScreen from '../containers/tailor/TermsAndConditions';
import TailorSearchResultsScreen from '../containers/tailor/SearchResults';
import TailorSupportCenterScreen from '../containers/tailor/SupportCenter';
import TailorClientProfileScreen from '../containers/tailor/ClientProfile';
import TailorViewOrderScreen from '../containers/tailor/ViewOrder';

// Common Screens
import ChatScreen from '../containers/common/Chat';

import LoginIcon from '@mui/icons-material/Login';
import SelectRoleIcon from '@mui/icons-material/AccountBox';
import ClientRegisterIcon from '@mui/icons-material/AccountBox';
import ClientVerifyEmailIcon from '@mui/icons-material/AccountBox';
import ClientCreateAccountIcon from '@mui/icons-material/AccountBox';
import TailorRegisterIcon from '@mui/icons-material/AccountBox';
import TailorVerifyEmailIcon from '@mui/icons-material/AccountBox';
import TailorCreateAccountIcon from '@mui/icons-material/AccountBox';
import ClientHomeIcon from '@mui/icons-material/AccountBox';
import ClientOrdersIcon from '@mui/icons-material/AccountBox';
import ClientTailorsIcon from '@mui/icons-material/AccountBox';
import ClientViewTailorIcon from '@mui/icons-material/AccountBox';
import ClientViewCatalogIcon from '@mui/icons-material/AccountBox';
import ClientOrderFromCatalogIcon from '@mui/icons-material/AccountBox';
import ClientCreateOrderIcon from '@mui/icons-material/AccountBox';
import ClientProfileIcon from '@mui/icons-material/AccountBox';
import ClientTermsAndConditionsIcon from '@mui/icons-material/AccountBox';
import ClientSearchResultsIcon from '@mui/icons-material/AccountBox';
import ClientSupportCenterIcon from '@mui/icons-material/AccountBox';
import ClientAdsIcon from '@mui/icons-material/AccountBox';
import ClientCreateAdIcon from '@mui/icons-material/AccountBox';
import ClientEditAdIcon from '@mui/icons-material/AccountBox';
import ClientViewOrderIcon from '@mui/icons-material/AccountBox';
import ClientTapeMeasurementIcon from '@mui/icons-material/AccountBox';
import TailorHomeIcon from '@mui/icons-material/AccountBox';
import TailorCatalogIcon from '@mui/icons-material/AccountBox';
import TailorViewCatalogIcon from '@mui/icons-material/AccountBox';
import TailorCreateCatalogIcon from '@mui/icons-material/AccountBox';
import TailorEditCatalogIcon from '@mui/icons-material/AccountBox';
import TailorOrdersIcon from '@mui/icons-material/AccountBox';
import TailorQuotesIcon from '@mui/icons-material/AccountBox';
import TailorViewQuoteIcon from '@mui/icons-material/AccountBox';
import TailorProfileIcon from '@mui/icons-material/AccountBox';
import TailorHowItWorksIcon from '@mui/icons-material/AccountBox';
import TailorTermsAndConditionsIcon from '@mui/icons-material/AccountBox';
import TailorSearchResultsIcon from '@mui/icons-material/AccountBox';
import TailorSupportCenterIcon from '@mui/icons-material/AccountBox';
import TailorClientProfileIcon from '@mui/icons-material/AccountBox';
import TailorViewOrderIcon from '@mui/icons-material/AccountBox';
import ChatIcon from '@mui/icons-material/AccountBox';
import ResetPasswordScreen from '../containers/auth/ResetPassword';

import Landing from '../containers/unAuth/Landing';
import UnAuthTermCondition from '../containers/unAuth/AuthTermsAndConditions';
// Routes for Auth
const AuthRoutes = [
  // {
  //   path: "*",
  //   name: "Login",
  //   icon: <LoginIcon />,
  //   element: Landing,

  // },
  {
    path: '*',
    name: 'landing',
    icon: <LoginIcon />,
    element: Landing,
  },
  {
    path: '/',
    name: 'landing',
    icon: <LoginIcon />,
    element: Landing,
  },
  {
    path: '/terms_conditions',
    name: 'TermConditionsScreen',
    icon: <ClientTermsAndConditionsIcon />,
    element: UnAuthTermCondition,
  },
  {
    path: '/login',
    name: 'Login',
    icon: <LoginIcon />,
    element: LoginScreen,
  },
  {
    path: '/select_role',
    name: 'SelectRoleScreen',
    icon: <SelectRoleIcon />,
    element: SelectRoleScreen,
  },
  {
    path: '/client_register',
    name: 'ClientRegister',
    icon: <ClientRegisterIcon />,
    element: ClientRegisterScreen,
  },
  {
    path: '/client_verify_email',
    name: 'ClientVerifyEmail',
    icon: <ClientVerifyEmailIcon />,
    element: ClientVerifyEmailScreen,
  },
  {
    path: '/client_create_account',
    name: 'ClientCreateAccount',
    icon: <ClientCreateAccountIcon />,
    element: ClientCreateAccountScreen,
  },
  {
    path: '/tailor_register',
    name: 'TailorRegister',
    icon: <TailorRegisterIcon />,
    element: TailorRegisterScreen,
  },
  {
    path: '/tailor_verify_email',
    name: 'TailorVerifyEmail',
    icon: <TailorVerifyEmailIcon />,
    element: TailorVerifyEmailScreen,
  },
  {
    path: '/tailor_create_account',
    name: 'TailorCreateAccount',
    icon: <TailorCreateAccountIcon />,
    element: TailorCreateAccountScreen,
  },
  { path: '/reset-password/:token', element: ResetPasswordScreen },
];

// Routes for Client
const ClientRoutes = [
  {
    path: '*',
    name: 'ClientHome',
    icon: <ClientHomeIcon />,
    element: ClientHomeScreen,
  },
  {
    path: '/home',
    name: 'ClientHome',
    icon: <ClientHomeIcon />,
    element: ClientHomeScreen,
  },
  {
    path: '/orders',
    name: 'ClientOrders',
    icon: <ClientOrdersIcon />,
    element: ClientOrdersScreen,
  },
  {
    path: '/tailors',
    name: 'ClientDesigners',
    icon: <ClientTailorsIcon />,
    element: ClientTailorsScreen,
  },
  {
    path: '/faqs',
    name: 'Faqs',
    icon: <ClientTailorsIcon />,
    element: ClientFaqsScreen,
  },
  {
    path: '/view_tailor/:id',
    name: 'ClientViewTailorScreen',
    icon: <ClientViewTailorIcon />,
    element: ClientViewTailorScreen,
  },
  {
    path: '/view_catalog/:id',
    name: 'CailorViewCatalog',
    icon: <ClientViewCatalogIcon />,
    element: ClientViewCatalogScreen,
  },
  {
    path: '/order_from_catalog/:id',
    name: 'ClientOrderFromCatalog',
    icon: <ClientOrderFromCatalogIcon />,
    element: ClientOrderFromCatalogScreen,
  },
  {
    path: '/create_order/:id',
    name: 'ClientCreateOrder',
    icon: <ClientCreateOrderIcon />,
    element: ClientCreateOrderScreen,
  },
  {
    path: '/support_center',
    name: 'ClientSupportCenter',
    icon: <ClientSupportCenterIcon />,
    element: ClientSupportCenterScreen,
  },
  {
    path: '/profile',
    name: 'ClientProfile',
    icon: <ClientProfileIcon />,
    element: ClientProfileScreen,
  },
  {
    path: '/terms_and_conditions',
    name: 'TailorTermsAndConditions',
    icon: <ClientTermsAndConditionsIcon />,
    element: ClientTermsAndConditionsScreen,
  },
  {
    path: '/search_results',
    name: 'ClientSearchResults',
    icon: <ClientSearchResultsIcon />,
    element: ClientSearchResultsScreen,
  },
  {
    path: '/create_ad',
    name: 'ClientCreateAd',
    icon: <ClientCreateAdIcon />,
    element: ClientCreateAdScreen,
  },
  {
    path: '/my_ads',
    name: 'ClientAds',
    icon: <ClientAdsIcon />,
    element: ClientAdsScreen,
  },
  {
    path: '/edit_ad/:id',
    name: 'ClientEditAd',
    icon: <ClientEditAdIcon />,
    element: ClientEditAdScreen,
  },
  {
    path: '/chat',
    name: 'ClientChat',
    icon: <ChatIcon />,
    element: ChatScreen,
  },
  {
    path: '/view_order/:id',
    name: 'ClientViewOrder',
    icon: <ClientViewOrderIcon />,
    element: ClientViewOrderScreen,
  },
];

// Routes for Tailor
const TailorRoutes = [
  {
    path: '*',
    name: 'TailorHome',
    icon: <TailorHomeIcon />,
    element: TailorHomeScreen,
  },
  {
    path: '/home',
    name: 'TailorHome',
    icon: <TailorHomeIcon />,
    element: TailorHomeScreen,
  },
  {
    path: '/catalog',
    name: 'TailorCatalog',
    icon: <TailorCatalogIcon />,
    element: TailorCatalogScreen,
  },
  {
    path: '/view_catalog/:id',
    name: 'TailorViewCatalog',
    icon: <TailorViewCatalogIcon />,
    element: TailorViewCatalogScreen,
  },
  {
    path: '/create_catalog',
    name: 'TailorCreateCatalog',
    icon: <TailorCreateCatalogIcon />,
    element: TailorCreateCatalogScreen,
  },
  {
    path: '/edit_catalog/:id',
    name: 'TailorEditCatalog',
    icon: <TailorEditCatalogIcon />,
    element: TailorEditCatalogScreen,
  },
  {
    path: '/orders',
    name: 'TailorOrders',
    icon: <TailorOrdersIcon />,
    element: TailorOrdersScreen,
  },
  {
    path: '/quotes',
    name: 'TailorQuote',
    icon: <TailorQuotesIcon />,
    element: TailorQuotesScreen,
  },
  {
    path: '/view_quote/:id',
    name: 'TailorViewQuote',
    icon: <TailorViewQuoteIcon />,
    element: TailorViewQuoteScreen,
  },
  {
    path: '/profile',
    name: 'TailorProfile',
    icon: <TailorProfileIcon />,
    element: TailorProfileScreen,
  },
  {
    path: '/how_it_works',
    name: 'TailorHowItWorks',
    icon: <TailorHowItWorksIcon />,
    element: TailorHowItWorksScreen,
  },
  {
    path: '/terms_and_conditions',
    name: 'TailorTermsAndConditions',
    icon: <TailorTermsAndConditionsIcon />,
    element: TailorTermsAndConditionsScreen,
  },
  {
    path: '/search_results',
    name: 'TailorSearchResults',
    icon: <TailorSearchResultsIcon />,
    element: TailorSearchResultsScreen,
  },
  {
    path: '/support_center',
    name: 'TailorSupportCenter',
    icon: <TailorSupportCenterIcon />,
    element: TailorSupportCenterScreen,
  },
  {
    path: '/client_profile/:id',
    name: 'clientprofile',
    icon: <TailorClientProfileIcon />,
    element: TailorClientProfileScreen,
  },
  {
    path: '/chat',
    name: 'TailorChat',
    icon: <ChatIcon />,
    element: ChatScreen,
  },
  {
    path: '/view_order/:id',
    name: 'TailorViewOrder',
    icon: <TailorViewOrderIcon />,
    element: TailorViewOrderScreen,
  },
];

// Getting all routes
const RoutesObj = {
  AuthRoutes,
  ClientRoutes,
  TailorRoutes,
};

export default RoutesObj;
