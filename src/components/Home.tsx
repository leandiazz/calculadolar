import { useState, useEffect } from "react";
import { Form } from "./Form";
import { DolarItem } from "./DolarItem";
import { Dolar } from "../types/types";
import { useSEO } from "../hooks/useSEO";

const defaulValues: Dolar[] = [
  {
    casa: "oficial",
    compra: 348.96,
    fechaActualizacion: "2023-10-26T13:55:00.000Z",
    moneda: "USD",
    nombre: "Oficial",
    venta: 368.6,
  },
  {
    casa: "blue",
    compra: 980,
    fechaActualizacion: "2023-10-26T13:55:00.000Z",
    moneda: "USD",
    nombre: "Blue",
    venta: 1000,
  },
  {
    casa: "bolsa",
    compra: 867.32,
    fechaActualizacion: "2023-10-26T13:55:00.000Z",
    moneda: "USD",
    nombre: "Bolsa",
    venta: 878.93,
  },
  {
    casa: "contadoconliqui",
    compra: 861.78,
    fechaActualizacion: "2023-10-26T13:55:00.000Z",
    moneda: "USD",
    nombre: "Contado con liquidación",
    venta: 899.4,
  },
  {
    casa: "solidario",
    compra: null,
    fechaActualizacion: "2023-10-26T13:55:00.000Z",
    moneda: "USD",
    nombre: "Solidario (Turista)",
    venta: 639.63,
  },
  {
    casa: "mayorista",
    compra: 349.1,
    fechaActualizacion: "2023-10-26T13:55:00.000Z",
    moneda: "USD",
    nombre: "Mayorista",
    venta: 350.1,
  },
];

export const Home = () => {
  const [cotizaciones, setCotizaciones] = useState(defaulValues);
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(true);

  useSEO({
    title: `$${amount} Pesos a USD`,
    description: "calcula la cantidad de dolares que valen tus pesos",
  });

  useEffect(() => {
    fetch("https://dolarapi.com/v1/dolares")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCotizaciones(data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="grid gap-8">
      <section>
        <Form setAmount={setAmount} />
      </section>
      <section className="flex-2 rounded-xl bg-blue-400 p-8 text-white">
        <ul className="flex flex-col gap-4">
          {cotizaciones.map((D) => {
            const total = amount ? Number(amount / D.venta) : D.venta;
            return (
              <DolarItem
                D={D}
                amount={amount}
                total={total}
                loading={loading}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
};
