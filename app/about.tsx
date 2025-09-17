// app/index.tsx
import Page from "@/components/Page";
import { H1 } from "@/components/headings";
import { StyleSheet } from "react-native";

export default function Index() {
  return (
    <Page>
      <H1>About page</H1>
      {/* <Link href="/" style={styles.link}>
        Go to About
      </Link> */}
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
