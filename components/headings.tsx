// components/headings.tsx
import { StyleSheet, Text, TextProps } from "react-native";

export function H1({ style, ...props }: TextProps) {
  return <Text style={[styles.h1, style]} {...props} />;
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 20,
    marginBottom: 10,
  },
});
