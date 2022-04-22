import React, { useState } from "react";

type Props = {
  items: string[];
  lable?: string;
  lableStyle?: string;
  placeholder?: string;
  inputStyle?: string;
  id: string;
};

export const RadioButton = ({
  items,
  lable,
  placeholder,
  inputStyle,
  id,
  lableStyle,
}: Props) => {
  // const numbers = [1, 2, 3, 4, 5];

  console.log(items);
  return (
    <div>
      {/* {items.map((items, key) => {
        <li>{items}</li>;
      })} */}
      <label
        className={`${lableStyle} block font-medium text-gray-700`}
      >
        {lable}
      </label>
      {items.map((object, index) => {
        return (
          // <p key={`${anObjectMapped}_{anObjectMapped.email}`}>
          //   {anObjectMapped} - {anObjectMapped}
          // </p>

          <div key={index} className=" ">
            <input
              type="radio"
              id={object}
              name="fav_language"
              value={object}
            />{" "}
            <label>{object}</label>
          </div>
        );
      })}

      {/* {Object.keys(items).map(function (key) {
        <li>{items}</li>;
      })} */}
      {/* <label
        htmlFor="email"
        className={`${lableStyle} block font-medium text-gray-700`}
      >
        {lable}
      </label>
      <input type="radio" id={id} name="fav_language" value="HTML" />{" "}
      <label>HTML</label>
      <br />
      <input type="radio" id={id} name="fav_language" value="CSS" />{" "}
      <label>CSS</label>
      <br />{" "}
      <input type="radio" id={id} name="fav_language" value="JavaScript" />
      <label>JavaScript</label> */}
    </div>
  );
};
