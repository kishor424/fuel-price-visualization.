// src/components/Dropdown.tsx

import React from "react";

interface DropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, value, onChange }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>
        {label}:
        <select value={value} onChange={e => onChange(e.target.value)} style={{ marginLeft: "0.5rem" }}>
          {options.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Dropdown;
