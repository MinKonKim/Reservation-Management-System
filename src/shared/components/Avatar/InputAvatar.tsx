"use client";

import { Upload, X } from "lucide-react";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

interface InputAvatarProps {
  value?: string;
  onChange: (file: File | null) => void;
}

const InputAvatar = ({ value, onChange }: InputAvatarProps) => {
  const [imagePreview, setImagePreview] = useState<string | null>(
    value || null
  );

  // 이미지 파일 변경 핸들러
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      onChange(file); // 부모 컴포넌트로 업로드한 파일 전달
    }
  };

  // 이미지 제거 핸들러
  const handleRemoveImage = () => {
    setImagePreview(null);
    onChange(null); // 이미지 제거 시 null 전달
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* 프로필 이미지 미리보기 */}
      <div className="relative w-32 h-32 border rounded-full overflow-hidden">
        {imagePreview ? (
          <>
            <Image
              src={imagePreview}
              alt="Profile Preview"
              layout="fill"
              objectFit="cover"
            />
            <button
              type="button"
              className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md"
              onClick={handleRemoveImage}
            >
              <X size={16} className="text-gray-600" />
            </button>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <Upload size={32} className="text-gray-400" />
          </div>
        )}
      </div>

      {/* 파일 업로드 버튼 */}
      <label className="cursor-pointer bg-point-500 text-white px-4 py-2 rounded-md hover:bg-point-600">
        프로필 이미지 업로드
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

export default InputAvatar;
