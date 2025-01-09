import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

const Explore: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explore Page</Text>
      <Link href="/" style={styles.link}>
        Go Back
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000", // Background color (black)
  },
  text: {
    color: "#fff", // Text color (white)
    fontSize: 24, // Increased font size for better visibility
    fontWeight: "bold", // Bold text for emphasis
    textAlign: "center", // Centers the text horizontally
    marginBottom: 20, // Adds spacing below the text
  },
  link: {
    color: "#00f", // Link text color (blue)
    fontSize: 18, // Font size for the link
    textDecorationLine: "underline", // Underlines the link
    marginTop: 10, // Adds spacing above the link
  },
});

export default Explore;
