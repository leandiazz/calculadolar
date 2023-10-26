import { Dolar } from "../types/types";

export const DolarItem = ({
  D,
  amount,
  total,
}: {
  D: Dolar;
  amount: number;
  total: number;
}) => {
  return (
    <li key={D.nombre} className="flex items-center justify-between gap-4">
      <p className="text-lg text-blue-100">{D.nombre}</p>
      <div className="flex items-center gap-4">
        {amount ? (
          <span className="text-xl font-bold text-blue-700">
            {total.toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS",
            })}
          </span>
        ) : null}
        <div>
          <span className="text-3xl font-bold text-blue-600">
            {D.venta.toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS",
            })}
            <p className="text-xs">
              Compra{" "}
              {D.compra
                ? D.compra.toLocaleString("es-AR", {
                    style: "currency",
                    currency: "ARS",
                  })
                : D.venta.toLocaleString("es-AR", {
                    style: "currency",
                    currency: "ARS",
                  })}
            </p>
          </span>
        </div>
      </div>
    </li>
  );
};
