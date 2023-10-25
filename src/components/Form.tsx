export const Form = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (amount: number) => void;
}) => {
  return (
    <form className="w-full">
      <label className="block text-xl">
        Monto en ARS:
        <input
          className="mt-2 block w-full rounded-xl bg-gray-200 p-2 text-right"
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </label>
    </form>
  );
};
