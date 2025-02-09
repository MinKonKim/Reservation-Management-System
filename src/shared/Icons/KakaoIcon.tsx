import Image from "next/image";

const KakaoIcon = ({ width = 24, height = 24, alt = "KakaoIcon" }) => {
  return (
    <Image src={"/svg/Kakao.svg"} width={width} height={height} alt={alt} />
  );
};

export default KakaoIcon;
