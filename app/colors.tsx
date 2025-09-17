import Page from "@/components/Page";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function RandomPage() {
  const [bgColor, setBgColor] = useState(getRandomColor());

  return (
    <Page style={[styles.page, { backgroundColor: bgColor }]}>
      <TouchableOpacity style={styles.button} onPress={() => setBgColor(getRandomColor())}>
        <Text style={styles.buttonText}>Randomize!</Text>
      </TouchableOpacity>
    </Page>
  );
}

const styles = StyleSheet.create({
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
