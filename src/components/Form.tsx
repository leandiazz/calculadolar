export const Form = ({
  setAmount,
}: {
  setAmount: (amount: number) => void;
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = event.currentTarget.elements.namedItem("pesos");
    const isInput = input instanceof HTMLInputElement;
    if (!isInput || input == null) return;
    setAmount(Number(input.value));
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <span className="text-xl">Monto en ARS:</span>
      <label className="flex">
        <input
          className="mr-4 mt-2 block w-full rounded-xl bg-gray-200 p-2 text-right"
          type="number"
          name="pesos"
          id="pesos"
        />
        <button className="rounded-md bg-blue-400 p-2">Convertir</button>
      </label>
    </form>
  );
};
