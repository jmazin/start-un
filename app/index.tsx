// app/index.tsx
import Page from "@/components/Page";
import { H1 } from "@/components/headings";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

export default function Index() {
  return (
    <Page>
      <H1>Edit app/index.tsx</H1>
      <Link href="/about" style={styles.link}>
        Go to About
      </Link>
    </Page>
  );
}

const styles = StyleSheet.create({
  link: {
    color: "#007AFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
