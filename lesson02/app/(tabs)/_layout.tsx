// app/_layout.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import { Stack } from "expo-router";

const Layout: React.FC = () => {
  return (
    <View style={styles.container}>
      <Stack>
        {/* <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="explore" options={{ title: "He he" }} /> */}
        <Stack.Screen name="(main)" options={{ headerShown : false }} />
      </Stack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a", // Dark gray background
  },
});

export default Layout;
