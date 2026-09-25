import TaskListScreen from "./screens/TaskListScreen"
import TaskDetailScreen from "./screens/TaskDetailScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen           
            name="TaskList"
            component={TaskListScreen}
            options={{title: "Detaljer"}}  
          />
          <Stack.Screen
            name="TaskDetail"
            component={TaskDetailScreen}
            options={{ title: "Uppgifter" }}
          />
        </Stack.Navigator>
      </NavigationContainer>    
    </>
  );
}