import React from "react";

type Props = {
  items: {}[];
  lable?: string;
  lableStyle?: string;
  placeholder?: string;
  inputStyle?: string;
  id: string;
};

export const CheckBox = ({
  items,
  lable,
  placeholder,
  inputStyle,
  id,
  lableStyle,
}: Props) => {
  // const numbers = [1, 2, 3, 4, 5];
  // const arrayOfObjects = [
  //   {
  //     checkBoxLable: "aaaa",
  //     checkBoxId: "xxx1",
  //     checkBoxValue: "bbb1",
  //     checkBoxName: "cccc1",
  //   },
  //   {
  //     checkBoxLable: "aaaa2",
  //     checkBoxId: "xxx2",
  //     checkBoxValue: "bbb2",
  //     checkBoxName: "cccc2",
  //   },
  //   {
  //     checkBoxLable: "aaaa3",
  //     checkBoxId: "xxx3",
  //     checkBoxValue: "bbb3",
  //     checkBoxName: "cccc3",
  //   },
  // ];

  console.log(items);
  return (
    <div>
      <label
        className={`${lableStyle} block font-medium text-gray-700`}
      >
        {lable}
      </label>
      {items.map((anObjectMapped, index) => {
        return (
          <div key={anObjectMapped.checkBoxId}>
            <input
              type="checkbox"
              id={anObjectMapped.checkBoxId}
              name={anObjectMapped.checkBoxName}
              value={anObjectMapped.checkBoxValue}
            />
            <label> {anObjectMapped.checkBoxLable}</label>
            {/* <p>
              {anObjectMapped.checkBoxLable} - {anObjectMapped.checkBoxName} -{" "}
              {anObjectMapped.checkBoxValue}
            </p> */}
          </div>
        );
      })}
    </div>
  );
};
