import {View, TextInput, StyleSheet, Text} from 'react-native';
import {GlobalStyles} from '../../constants/Colors';
function Input({label, textInputConfig, style}) {
  const multiLineStyle = [styles.input];
  if (textInputConfig && textInputConfig.multiLine) {
    multiLineStyle.push(styles.multyLine);
  }
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...textInputConfig} style={multiLineStyle} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 6,
  },
  label: {
    marginBottom: 4,
    fontSize: 14,
    color: GlobalStyles.colors.primary100,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.colors.primary700,
  },
  multyLine: {
    minHeight: 100,
    // textAlignVertical : 20,
    alignItems: 'center',
    textAlignVertical: 'top',
  },
});
export default Input;
