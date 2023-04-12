import { StyleSheet, Text, View } from "react-native";
import "@azure/core-asynciterator-polyfill";
import { LinkButton } from "../../etc/buttons/link_button";
import { DataStore } from "aws-amplify";
import { ExpoSQLiteAdapter } from "@aws-amplify/datastore-storage-adapter/ExpoSQLiteAdapter";
import { ThemeProvider } from "../../etc/_Theme";

DataStore.configure({
  storageAdapter: ExpoSQLiteAdapter,
});

export default function Page() {
  return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Hello World</Text>
          <Text style={styles.subtitle}>
            This is the first page of your app.
          </Text>
          <LinkButton
            link="category/categories"
            style={{ marginTop: 16 }}
          >
            Categories
          </LinkButton>
          <LinkButton link="product/products" style={{ marginTop: 16 }}>
            Products
          </LinkButton>
          <LinkButton link="brand/brands" style={{ marginTop: 16 }}>
            Brands
          </LinkButton>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
