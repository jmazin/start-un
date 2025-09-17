// components/Page.tsx
import { ReactNode } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

type PageProps = {
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
};

export default function Page({ children, style }: PageProps) {
  return <View style={[styles.page, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});
