import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddToCart from './components/AddToCart';
import Payment from './components/Payment';
import Shopping from './components/Shopping';
import WomensJacket from './components/WomensJacket';

export default function App() {
  return (
    <View >
      <Shopping />
      {/* <AddToCart /> */}
      {/* <Payment /> */}
      {/* <WomensJacket/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
