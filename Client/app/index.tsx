import { auth } from "@/configs/FirebaseConfig";
import { Redirect } from "expo-router";
import { View } from "react-native";

export default function index() {
  const user = auth.currentUser;

  return (
    <View>
      {user ? (
        <Redirect href="/home" />
      ) : (
        <Redirect href="/(routes)/onboarding" />
      )}
    </View>
  );

  
}



// ----------Before Authentication------------ //

// import { Redirect } from "expo-router";


// export default function index() {
//   return <Redirect href="/(routes)/onboarding"/>
//     // return <Redirect href='/home'/>
  
// }