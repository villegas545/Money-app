import { View } from "react-native";
import { transacciones } from "./mock-data";
const Transacciones = () => {
  return (
    <View>
      Transacciones:
      {transacciones.map((transaccion, index) => (
        <span>
          Transaccion {index + 1}: {transaccion.description}, Monto
          {transaccion.amount.toString()} en la fecha{" "}
          {transaccion.date.toLocaleDateString()}
        </span>
      ))}
    </View>
  );
};
export default Transacciones;
