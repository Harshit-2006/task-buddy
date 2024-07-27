import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";
import useDashboardContext from "./contexts/dashboardContext";

function App() {
  const { isDashboard } = useDashboardContext();

  return (
    <>
          <Header />
          <Outlet />
          {!isDashboard && <Footer />}
    </>
  );
}

export default App;
