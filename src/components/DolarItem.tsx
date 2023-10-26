import { Dolar } from "../types/types";

export const DolarItem = ({
  D,
  amount,
  total,
  loading,
}: {
  D: Dolar;
  amount: number;
  total: number;
  loading: boolean;
}) => {
  return (
    <li key={D.nombre} className="flex items-center justify-between gap-4">
      <p className="text-lg text-blue-100">{D.nombre}</p>
      <div className="flex items-center gap-4">
        {amount ? (
          <p className="text-xl font-bold text-blue-700">
            {total.toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS",
            })}
          </p>
        ) : null}
        <div>
          <div className="text-3xl font-bold text-blue-600">
            {loading ? (
              <p className="text-xs">loading</p>
            ) : (
              D.venta.toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
              })
            )}

            {loading ? null : (
              <p className="text-xs">
                Compra
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
            )}
          </div>
        </div>
      </div>
    </li>
  );
};
