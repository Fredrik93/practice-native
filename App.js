import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ComponentsScreen from './src/ComponentScreen';
import ColorScreen from './src/screens/ColorScreen';
import CounterScreen from './src/screens/CounterScreen';
import DividendScreen from './src/screens/DividendScreen';
import HomeScreen from './src/screens/HomeScreen';
import ImageScreen from './src/screens/ImageScreen';
import ListScreen from './src/screens/ListScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';
import UserInputScreen from './src/screens/UserInputScreen';
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Counter: CounterScreen,
    Dividends: DividendScreen,
    Images: ImageScreen,
    Colors: ColorScreen,
    Square: SquareScreen,
    Text: TextScreen,
    Box: BoxScreen,
    UserInput: UserInputScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);