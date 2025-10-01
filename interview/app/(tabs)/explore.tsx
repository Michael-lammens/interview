import {Platform, ScrollView, StyleSheet, Text, View} from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={{flex: 1}}>
      <Text>Explore Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
