import { createContext,useContext } from "react";

const AppContext=createContext({
    isDashboard:false,
    dashboard:()=>{},
    notDashboard:()=>{}
});

const AppContextProvider=AppContext.Provider;

function useAppContext(){
    return (useContext(AppContext))
}

export default useAppContext;
export {AppContext,AppContextProvider};
