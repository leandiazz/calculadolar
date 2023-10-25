import cotizaciones from "../cotizaciones.json";

export const Home = () => {
  return (
    <>
      <main className="flex h-full gap-4">
        <section className="flex-1"></section>
        <section className="flex-1 overflow-y-auto rounded-2xl bg-blue-400 p-8 text-white">
          <ul className="flex flex-col gap-4">
            {cotizaciones.map((D) => (
              <li
                key={D.nombre}
                className="flex items-center justify-between gap-4"
              >
                <div className="text-base text-blue-100">{D.nombre}</div>
                <div className="text-3xl font-bold text-blue-600">
                  {D.venta.toLocaleString("es-AR", {
                    style: "currency",
                    currency: "ARS",
                  })}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};
