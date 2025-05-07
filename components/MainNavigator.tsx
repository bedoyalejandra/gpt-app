import Chat from "@/app/(tabs)/chat";
import Image from "@/app/(tabs)/image";
import Settings from "@/app/(tabs)/settings";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator
      // screenOptions={{
      //   headerShown: false,
      // }}
    >
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: (props) => <Entypo name="chat" size={props.size} color={props.color} />,
        }}
      />
      <Tab.Screen
        name="Image"
        component={Image}
        options={{
          tabBarIcon: (props) => <Entypo name="image" size={props.size} color={props.color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: (props) => (
            <Ionicons name="settings-outline"  size={props.size} color={props.color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
