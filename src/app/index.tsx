import React from "react";
import { View } from "react-native";
import Footer from "./template/Footer/Footer";
import Header from "./template/Header/Header";
import Ingresos from "./compositions/Ingresos/Ingresos";

export default function Page() {
  return (
    <View className="flex">
      <Header />
      <Ingresos />
      <Footer />
    </View>
  );
}
