import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "@react-navigation/core";

const theme = {
  dark: false, // Indicates whether the theme is dark or light
  colors: {
    primary: "blue",
    background: "white",
    card: "gray",
    text: "black",
    border: "lightgray",
    notification: "red", // Include all required colors
  },
  fonts: {
    regular: "System", // You can customize this to match your font setup
    medium: "System",
    light: "System",
    thin: "System",
  },
};

export default function RootLayout() {
  return (
    <ThemeProvider value={theme}>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen name="index" />
        </Stack>
      </SafeAreaProvider>
    </ThemeProvider>
     );
}
