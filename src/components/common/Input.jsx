import { useId } from "react";

function Input({ name, value, placeholder, onChange }) {
  const idPrefix = useId();

  return (
    <label className="flexCol" htmlFor={idPrefix + name}>
      <span className="mb-4 font-medium text-white">
        <input
          type="text"
          name="name"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
        />
      </span>
    </label>
  );
}

export default Input;
