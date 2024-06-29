import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: -24,
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: "#262626",
    borderRadius: 6,
    color: "#F2F2F2",
    padding: 16,
    fontSize: 16,
    marginRight: 4,
    borderWidth: 1,
    borderColor: "#262626",
  },
  inputFocus: {
    borderColor: "#5E60CE",
  },
  button: {
    width: 54,
    height: 54,
    borderRadius: 6,
    backgroundColor: "#1E6F9F",
    justifyContent: "center",
    alignItems: "center",
  },
});