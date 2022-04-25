import { SearchIcon } from "@heroicons/react/solid";

type Props = {
  lable?: string;
  icon?: React.ComponentProps<"svg">;
  inputId: string;
  inputName?: string;
  inputPlaceholder?: string;
};

export const SearchField = ({
  lable,
  icon,
  inputId,
  inputName,
  inputPlaceholder,
}: Props) => {
  return (
    <div >
      <label
        htmlFor="company_website"
        className="block text-sm font-medium text-gray-700"
      >
        {lable}
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
          {/* <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" /> */}
          {icon}
        </span>
        <input
          type="text"
          name={inputName}
          id={inputId}
          className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
          placeholder={inputPlaceholder}
        />
      </div>
    </div>
  );
};
