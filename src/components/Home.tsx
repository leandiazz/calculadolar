import { useState, useEffect } from "react";
import { Form } from "./Form";

export const Home = () => {
  const [cotizaciones, setCotizaciones] = useState([]);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    fetch("https://dolarapi.com/v1/dolares")
      .then((response) => response.json())
      .then((data) => setCotizaciones(data));
  }, []);

  return (
    <>
      <main className="grid gap-8">
        <section>
          <Form
            value={amount}
            onChange={(_amount: number) => setAmount(_amount)}
          />
        </section>
        <section className="flex-2 rounded-xl bg-blue-400 p-8 text-white">
          <ul className="flex flex-col gap-4">
            {cotizaciones.map((D) => {
              const total = amount ? Number(amount / D.venta) : D.venta;
              return (
                <li
                  key={D.nombre}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="text-blue-100">{D.nombre}</div>
                  <div className="flex items-center gap-4">
                    {amount ? (
                      <div className="text-xl font-bold text-blue-700">
                        {total.toLocaleString("es-AR", {
                          style: "currency",
                          currency: "ARS",
                        })}
                      </div>
                    ) : null}
                    <div className="text-3xl font-bold text-blue-600">
                      {D.venta.toLocaleString("es-AR", {
                        style: "currency",
                        currency: "ARS",
                      })}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
};
