import Image from "next/image";

const GoogleIcon = ({ width = 24, height = 24, alt = "GoogleIcon" }) => {
  return (
    <Image src={"/svg/Google.svg"} width={width} height={height} alt={alt} />
  );
};

export default GoogleIcon;
