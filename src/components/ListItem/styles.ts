import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 12,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#333",
    backgroundColor: "#262626",
    marginBottom: 8,
  },
  textItem: {
    color: "#F2F2F2",
    fontSize: 14,
    fontWeight: "400",
  },
  outterRadio: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#4ea8de',
  },
  checked:{
    backgroundColor: '#585ABD',
    borderRadius: 999,
  },
});
