import React, { useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from './app/auth/context'
import AuthNavigator from "./app/navigation/AuthNavigator";
import authStorage from "./app/auth/storage";
import AppLoading from "expo-app-loading";


 const App=() =>{

  const[user,setUser] = useState();
  const[isReady, setIsReady] = useState(false);

  const restoreUser =async () => {
   const user = await authStorage.getUser();
   
   if (user)  setUser(user); 
  };
  if(!isReady){
    return(
      <AppLoading startAsync={restoreUser} onFinish={()=> setIsReady(true)} onError={console.warn}/>
    );
  }


  return (
    <AuthContext.Provider value={{user, setUser}}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator/> : <AuthNavigator/>}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
export default App;