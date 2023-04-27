import { createStackNavigator } from "@react-navigation/stack";
import { Groups } from "@screens/Groups";
import { Players } from "@screens/Players";
import { NewGroup } from "@screens/NewGroup";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
      <Screen name="groups" component={Groups} />
      <Screen name="players" component={Players} />
      <Screen name="new" component={NewGroup} />
    </Navigator>
  );
}
