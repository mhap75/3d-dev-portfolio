import { memo, useId } from "react";

function Input({ name, value, placeholder, onChange, type, title, textArea }) {
  const idPrefix = useId();

  return (
    <label className="flexCol" htmlFor={idPrefix + name}>
      <span className="mb-4 font-medium text-white">{title}</span>
      {textArea ? (
        <textarea
          id={idPrefix + name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary focus:outline-1 focus:outline-white"
        />
      ) : (
        <input
          id={idPrefix + name}
          type={type || "text"}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary focus:outline-1 focus:outline-white"
        />
      )}
    </label>
  );
}

export default memo(Input);
