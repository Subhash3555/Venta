import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const SettingDarkVersion = React.lazy(() => import("pages/SettingDarkVersion"));
const DashboardDarkVersion = React.lazy(
  () => import("pages/DashboardDarkVersion"),
);
const PopUpDarkVersion = React.lazy(() => import("pages/PopUpDarkVersion"));
const HomepageDarkVersion = React.lazy(
  () => import("pages/HomepageDarkVersion"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/homepagedarkversion"
            element={<HomepageDarkVersion />}
          />
          <Route path="/popupdarkversion" element={<PopUpDarkVersion />} />
          <Route
            path="/dashboarddarkversion"
            element={<DashboardDarkVersion />}
          />
          <Route path="/settingdarkversion" element={<SettingDarkVersion />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
