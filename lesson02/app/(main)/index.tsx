import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

const Index: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Mockingbird</Text>
      <Link href="/explore" style={styles.link}>
        Explore
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000", // Black background
    padding: 20,
  },
  text: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  link: {
    color: "#007BFF",
    fontSize: 18,
    textDecorationLine: "underline",
  },
});

export default Index;
