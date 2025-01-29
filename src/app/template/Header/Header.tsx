import { Link } from "expo-router";
import React from "react";
import { View, Button } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const Header = () => {
  const { top } = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View style={{ paddingTop: top }}>
      <View className="px-4 lg:px-6 h-14 flex items-center flex-row justify-between ">
        <Link className="font-bold flex-1 " href="/">
          ACME
        </Link>
        <View className="flex flex-row gap-4 sm:gap-6">
          <Link
            className="text-md font-medium hover:underline web:underline-offset-4"
            href="/"
          >
            About
          </Link>
          <Button
            title="Transacciones"
            onPress={() =>
              router.push("/compositions/Transacciones/Transacciones")
            } // Navega a "/details"
          />
          <Button
            title="Go to Ingresos"
            onPress={() => router.push("/compositions/Ingresos/Ingresos")} // Navega a "/details"
          />
          <Link
            className="text-md font-medium hover:underline web:underline-offset-4"
            href="/"
          >
            Product
          </Link>
          <Link
            className="text-md font-medium hover:underline web:underline-offset-4"
            href="/"
          >
            Pricing
          </Link>
        </View>
      </View>
    </View>
  );
};

export default Header;
