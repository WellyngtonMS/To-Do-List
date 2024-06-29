import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  listContainer: {
    marginTop: 32,
    flex: 1,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listItemContainer: {
    flexDirection: "row",
    gap: 8,
  },
  listItemText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  listItemNumber: {
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: "#333333",
    paddingHorizontal: 8,
  },
  listItemNumberText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#D9D9D9",
  },
  listEmpty: {
    height: "100%",
    borderTopColor: "#333333",
    borderTopWidth: 1,
    gap: 16,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 48,
  },
  tituloBoldEmpty: {
    alignSelf: "center",
    fontSize: 14,
    fontWeight: "bold",
    color: "#808080",
  },
  tituloNormalEmpty: {
    alignSelf: "center",
    fontSize: 14,
    color: "#808080",
  },
});
