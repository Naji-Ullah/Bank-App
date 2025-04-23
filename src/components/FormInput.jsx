import React, { useState } from "react";

function FormInput(props) {
  const [isFocused, setIsFocused] = useState(false);
  // deconstructing props
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  function handleFocus(e) {
    setIsFocused(true);
  }

  return (
    <div className="flex flex-col mb-2 font-poppins">
      <label className="mb-1 font-medium text-gray-300">{label}:</label>

      {props.name !== "message" ? (
        <input
          {...inputProps}
          onChange={onChange}
          className="p-2 mb-2 border-2 rounded-xl"
          onBlur={handleFocus}
          focused={isFocused.toString()}
        />
      ) : (
        <textarea
          {...inputProps}
          className="p-2 mb-2 border-2 rounded-xl"
          onChange={onChange}
          onBlur={handleFocus}
        ></textarea>
      )}

      {isFocused && (
        <span className="hidden mb-2 text-sm text-red-500">{errorMessage}</span>
      )}
    </div>
  );
}

export default FormInput;
