import "react-native-gesture-handler";
import { Slot } from "expo-router";
import { ThemeProvider } from "../etc/_Theme";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    // Setup the auth context and render our layout inside of it
    <ThemeProvider>
      <SafeAreaProvider>
        <Slot />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
