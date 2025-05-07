import MainNavigator from "@/components/MainNavigator";
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";

export default function Index() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <MainNavigator/>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
