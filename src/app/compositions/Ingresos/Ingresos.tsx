import { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { Calendar } from "react-native-calendars";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import InputNumber from "@/app/components/InputNumber/InputNumber";

const Ingresos = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const [description, setDescription] = useState<string>();

  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const tempTotal = Number(total) + Number(total);
    setTotal(tempTotal);
    setTotal(0);
    setDescription("");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center ">
        <Text className="font-serif text-lg mb-3">Incrementar saldo</Text>
        <InputNumber
          value={quantity.toString()}
          onChangeText={(texto) => setTotal(Number(texto))}
        ></InputNumber>

        <TextInput
          value={description}
          onChangeText={(texto) => setDescription(texto)}
          keyboardType="numbers-and-punctuation"
          placeholder="ingresa la descripcion"
          className="border border-gray-300 p-2 rounded w-64 mb-3"
        ></TextInput>

        <Button
          title="ingresar saldo"
          color={"red"}
          accessibilityLabel="Learn more about this purple button"
          onPress={calculateTotal}
        ></Button>
        <Text className="mt-3"> La cantidad total es: ${total}</Text>
      </View>
      {/*       </View>
       */}{" "}
    </SafeAreaView>
  );
};

export default Ingresos;
