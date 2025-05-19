import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#00A6FB',
    borderWidth: 1,
    flexDirection: 'row'
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center'
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  }
});

export default styles;