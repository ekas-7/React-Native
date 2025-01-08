import React from "react";
import { Text, View, StyleSheet, ImageBackground, ImageSourcePropType } from "react-native";

// Importing the image correctly
import eminemCover from "@/assets/images/mockinbird.jpg";

const Index: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={eminemCover as ImageSourcePropType} style={styles.imageBackground}>
        <View style={styles.overlay}>
          <Text style={styles.text}>Welcome to Mockingbird</Text>
        </View>
      </ImageBackground>
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
    fontSize: 30, // Font size
    fontWeight: "bold", // Makes the text bold
    textAlign: "center", // Centers the text horizontally
  },
  imageBackground: {
    width: "100%", // Full width of the container
    height: "100%", // Full height of the container
    justifyContent: "center",
    alignItems: "center", // Centers the content
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for text
    padding: 20, // Adds padding around the text
    borderRadius: 10, // Rounded corners
  },
});

export default Index;
