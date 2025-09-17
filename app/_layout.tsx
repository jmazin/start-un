import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Da Funk", headerShown: false }} />
      <Stack.Screen name="about" options={{ title: "Aboat" }} />
      <Stack.Screen name="colors" options={{ title: "Coooool" }} />
    </Stack>
  );
}
