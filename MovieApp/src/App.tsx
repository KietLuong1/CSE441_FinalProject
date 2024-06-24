import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native"
import AppNavigator from "./routes/AppNavigator";

const App = () => {
    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    )
}
export default App;