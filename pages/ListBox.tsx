import { SearchIcon } from "@heroicons/react/solid";

type Props = {
  lable?: string;
  items: {}[];
};

export const ListBox = ({ lable, items }: Props) => {
  return (
    <div>
      <label
        htmlFor="company_website"
        className="block text-sm font-medium text-gray-700"
      >
        {lable}
      </label>
      <select name="Cars" size={5}>
        {items.map((anObjectMapped, index) => {
          return (
            <option key={anObjectMapped.id} value={anObjectMapped.name}>
              {anObjectMapped.name}
            </option>
          );
        })}
      </select>
      {/* <select name="Cars" size={5}>
        <option value="Merceders"> Merceders </option>
        <option value="BMW"> BMW </option>
        <option value="Jaguar"> Jaguar </option>
        <option value="Lamborghini"> Lamborghini </option>
        <option value="Ferrari"> Ferrari </option>
        <option value="Ford"> Ford </option>
      </select> */}
    </div>
  );
};
