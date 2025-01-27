export const focusInputStyle = `
  focus:shadow-[0_2px_4px_rgba(0,0,0,0.2)]
  focus:outline-none
  focus:ring-0
`;

export const hoverInputStyle = `
  hover:border-gray-300
  hover:bg-gray-50
`;

export const borderColor = (validation: boolean | undefined) => {
  return validation === undefined
    ? "border-gray-300"
    : validation
    ? "border-green-500 focus:ring-green-500"
    : "border-red-500 focus:ring-red-500";
};

export const isRequired = (required: boolean | undefined) => {
  return required ? "text-red-500 mx-1" : "";
};
