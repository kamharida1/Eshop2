import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    // Setup the auth context and render our layout inside of it
    <>
      <Slot />
    </>
  );
}
