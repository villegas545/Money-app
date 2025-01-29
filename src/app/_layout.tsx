import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";
import { Slot } from "expo-router";
import Header from "./template/Header/Header";
import Footer from "./template/Footer/Footer";

export default function Layout() {
  return (
    <SafeAreaView>
      <Header />
      <Slot />
      <Footer />
    </SafeAreaView>
  );
}
