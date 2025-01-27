interface TextLoadingType {
  text?: string;
}

const TextLoading = ({ text = "" }: TextLoadingType) => {
  return (
    <span className="flex items-center justify-center gap-2">
      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      {text}
    </span>
  );
};

export default TextLoading;
