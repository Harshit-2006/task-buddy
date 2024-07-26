
import { Header,Footer } from "./components"; 
import { Outlet } from "react-router-dom";
import  {AppContextProvider} from "./context/AppContext";
import { useState } from "react";

function App() {

  const [isDashboard, setIsDashboard] = useState(false);

  const dashboard=()=>{
    setIsDashboard(true);
  }

  const notDashboard=()=>{
    setIsDashboard(false);
  }

  return (
    <>
        <AppContextProvider value={{isDashboard,dashboard,notDashboard}}>
        <Header />
        <Outlet />
        <Footer />
        </AppContextProvider>
    </>
  );
}

export default App;

