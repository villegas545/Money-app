type TransaccionesType = {
  date: Date;
  amount: Number;
  description: string;
};

export const transacciones: TransaccionesType[] = [
  {
    amount: 100,
    date: new Date(),
    description: "una descripcion",
  },
  {
    amount: 200,
    date: new Date("2025/01/02"),
    description: "una segunda descripcion",
  },
  {
    amount: 300,
    date: new Date("2025/01/03"),
    description: "una tercera descripcion",
  },
  {
    amount: 400,
    date: new Date("2025/01/03"),
    description: "una tercera descripcion",
  },
];
