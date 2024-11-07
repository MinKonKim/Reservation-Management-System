import React from "react";

/*
    <Title tag="h1" size="large" className="text-red-500">
        큰 제목입니다.
    </Title>
      <Title tag="h2" size="medium">
        중간 제목입니다.
      </Title>
      <Title tag="h3" size="small">
        작은 제목입니다.
      </Title>

*/

interface HeaderProps {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "small" | "medium" | "large";
  children: React.ReactNode; // 타이틀 텍스트
  className?: string; // 추가적인 Tailwind 클래스
}

const Header: React.FC<HeaderProps> = ({
  tag = "h1", // 기본 태그는 h1
  size = "large", // 기본 크기 설정
  children,
  className = "",
}) => {
  const Tag = tag; // 태그를 동적으로 설정

  // Tailwind 크기 설정
  const sizeClasses = {
    small: "text-lg", // 작은 사이즈 Tailwind 클래스
    medium: "text-2xl", // 중간 사이즈 Tailwind 클래스
    large: "text-4xl", // 큰 사이즈 Tailwind 클래스
  };

  return (
    <Tag className={`${sizeClasses[size]} font-bold ${className}`}>
      {children}
    </Tag>
  );
};

export default Header;
