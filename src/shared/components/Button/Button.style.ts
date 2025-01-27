// 색상에 따른 기본 스타일 정의
const buttonBaseColors: Record<string, string> = {
  primary: "bg-primary-500 text-white border-primary-500",
  secondary: "bg-secondary-500 text-white border-secondary-500",
  point: "bg-point-500 text-white border-point-500",
};

export const buttonOutlineColors: Record<string, string> = {
  primary:
    "text-primary-500 border-primary-500 hover:bg-primary-600 hover:text-white",
  secondary:
    "text-secondary-500 border-secondary-500 hover:bg-secondary-600 hover:text-white",
  point: "text-point-500 border-point-500 hover:bg-point-600 hover:text-white",
};

// Variant 스타일 설정
export const buttonVariantStyles = (variant: string, color: string) => {
  return variant === "filled"
    ? `${buttonBaseColors[color]} hover:opacity-90 active:opacity-80`
    : `${buttonBaseColors[color]} bg-transparent hover:opacity-90 active:opacity-80`;
};

// 너비 설정
export const buttonWidthStyle = (isFull: boolean | undefined) => {
  return isFull ? "w-full" : "w-auto";
};
