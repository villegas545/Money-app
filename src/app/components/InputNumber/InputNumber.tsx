import { TextInput } from "react-native";

const InputNumber = ({ value, onChangeText }) => (
  <TextInput
    value={value}
    onChangeText={onChangeText}
    keyboardType="numbers-and-punctuation"
    placeholder="inserta la cantidad"
    className="border border-gray-300 p-2 rounded w-64 mb-3"
  ></TextInput>
);

export default InputNumber;
