import { Stack, useRouter } from "expo-router";
import { ThemeProvider } from "../../etc/_Theme";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function AppLayout() {
  const router = useRouter();
  return (
      <Stack
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
            headerLargeTitle: true,
          }}
        />
      </Stack>
  );
}
