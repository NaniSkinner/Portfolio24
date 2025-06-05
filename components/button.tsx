const Button = ({
  text,
  secondaryText,
  color = "#070707",
}: {
  text: string;
  secondaryText?: string;
  color?: string;
}) => {
  // Use blue text for white backgrounds, white text for others
  const textColor = color === "#ffffff" ? "text-blue-600" : "text-white";
  const secondaryTextColor =
    color === "#ffffff" ? "text-blue-400" : "text-neutral-300";

  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className={`flex items-center gap-2 px-3 py-1 text-sm font-medium ${textColor} rounded-lg max-x-fit`}
    >
      <span>{text}</span>
      {secondaryText && (
        <span className={`font-light ${secondaryTextColor}`}>
          {secondaryText}
        </span>
      )}
    </div>
  );
};

export default Button;
