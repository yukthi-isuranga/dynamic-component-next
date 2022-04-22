import React, { useState } from "react";

type Props = {
  type: string;
  lable ?: string;
  lableStyle ?: string;
  placeholder ?: string;
  inputStyle ?: string;
  id: string;
};

export const TextInput = ({
  type,
  lable,
  placeholder,
  inputStyle,
  id,
  lableStyle,
}: Props) => {
  const [text, settext] = useState("");
  return (
    <div>
      <label
        htmlFor="email"
        className={`${lableStyle} block font-medium text-gray-700`}
      >
        {lable}
      </label>
      <div className="mt-1">
        <input
          type={type}
          id={id}
          value={text}
          className={`${inputStyle} shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300`}
          placeholder={placeholder}
          // onChange={change}
        />
        {console.log(id)}
      </div>
    </div>
  );
  function change(): void {
    settext(id);
    console.log(text);
  }
};
