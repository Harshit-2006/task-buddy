import { createContext,useContext, useState } from "react";

const userDataContext=createContext({
    userData:{},
    updateUserData:()=>{}
});


function UserDataContextProvider({children}){
    const [userData,setUserData]=useState({});

    const updateUserData=(data)=>setUserData(data);


    return(
        <userDataContext.Provider value={{userData,updateUserData}}>
            {children}
        </userDataContext.Provider>
    )
}

function useUserDataContext(){
    return useContext(userDataContext);
}

export default useUserDataContext;
export {useUserDataContext,UserDataContextProvider}