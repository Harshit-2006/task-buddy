import { createContext, useContext, useState } from "react";

const dashboardContext = createContext({
  isDashboard: false,
  dashboard: () => {},
  notDashboard: () => {},
});

const DashboardContextProvider = ({ children }) => {
  const [isDashboard, setIsDashboard] = useState(false);

  const dashboard = () => setIsDashboard(true);
  const notDashboard = () => setIsDashboard(false);

  return (
    <dashboardContext.Provider value={{ isDashboard, dashboard, notDashboard }}>
      {children}
    </dashboardContext.Provider>
  );
};

function useDashboardContext() {
  return useContext(dashboardContext);
}

export default useDashboardContext;
export { dashboardContext, DashboardContextProvider };
