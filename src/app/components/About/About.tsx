import React from "react";
import { Button } from "react-native";
export const About = ({ route, navigation }) => {
  return (
    <div>
      {" "}
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </div>
  );
};
