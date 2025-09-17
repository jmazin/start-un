// app/index.tsx
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome 👋</Text>
      <Link href="/about" style={styles.link}>
        Go to About
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  link: {
    color: "#007AFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
