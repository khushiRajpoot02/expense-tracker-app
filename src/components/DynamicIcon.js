import {View, Text, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function DynamicIcon({icon, color, size, onPress}) {

  return (
    <Pressable style={({pressed}) => pressed && styles.pressedS}>
      <View style={styles.container}>
        <Icon name={icon} color={color} size={size}  onPress={onPress}/>
      </View>
    </Pressable>
  );
}
export default DynamicIcon;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  pressedS: {
    opacity: 0.5,
  },
});
