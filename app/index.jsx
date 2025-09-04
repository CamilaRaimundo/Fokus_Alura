import { Background } from "@react-navigation/elements";
import { Text, View, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgrounColor: "#021123"
  },
  text: {
    color: "#FFF",
  }

})
