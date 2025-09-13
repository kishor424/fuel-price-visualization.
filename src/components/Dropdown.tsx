

interface DropdownProps<T> {
  label: string;
  options: T[];
  value: T;
  onChange: (value: T) => void;
}

function Dropdown<T>({ label, options, value, onChange }: DropdownProps<T>) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>
        {label}:
        <select
          value={value as unknown as string}
          onChange={e => {
            // Convert the selected value back to T
            onChange(e.target.value as unknown as T);
          }}
          style={{ marginLeft: "0.5rem" }}
        >
          {options.map(opt => (
            <option key={opt as unknown as string} value={opt as unknown as string}>
              {opt as unknown as string}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default Dropdown;
