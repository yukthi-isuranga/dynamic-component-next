type Props = {
    text: string;
    h1Style: string;
    textStyle: string;
};

export const GradientText = ({ text, h1Style, textStyle}: Props) => {
  return (
    <div
      className={`${h1Style}  flex items-center justify-center bg-cool-gray-700`}
    >
      <h1 className={` ${textStyle} font-black text-white text-center`}>
        <span className="bg-gradient-to-r text-transparent bg-clip-text from-green-400 to-purple-500">
          {text}
        </span>
      </h1>
    </div>
  );
};
