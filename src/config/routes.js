import { createStackNavigator, createAppContainer } from 'react-navigation';
import Welcome from 'starter_kit/src/screens/onboarding/Welcome';

const AppNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome,
  },
});
export default createAppContainer(AppNavigator);
