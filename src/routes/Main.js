
import { Routes } from "react-router-dom";

import RoutesObj from "../routes/Routes";
import { getRoutes } from "../utils/Auth";

const Main = () => {
  return (
    <Routes>
      {getRoutes(RoutesObj.DefaultRoutes)}
    </Routes>
  );
};

export default Main;
