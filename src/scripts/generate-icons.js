// const fs = require("fs-extra");
import fs from "fs-extra";
import path from "node:path";
import { pascalCase } from "change-case";

// 📂 SVG 폴더 경로
const SVG_DIR = path.join(__dirname, "../public/svg");
// 📂 Icons 폴더 경로
const ICONS_DIR = path.join(__dirname, "../shared/Icons");
const INDEX_FILE = path.join(ICONS_DIR, "index.ts");

// 1️⃣ Icons 폴더 생성 (없으면 생성)
fs.ensureDirSync(ICONS_DIR);

// 2️⃣ public/svg 폴더에서 모든 `.svg` 파일 가져오기
const files = fs.readdirSync(SVG_DIR).filter((file) => file.endsWith(".svg"));

if (files.length === 0) {
  console.log("❌ SVG 파일이 없습니다.");
  process.exit(1);
}

// 3️⃣ 파일명을 카멜케이스로 변환하여 `index.ts` 파일에 export
const exports = files.map((file) => {
  const fileName = path.basename(file, ".svg"); // 확장자 제거
  const iconName = pascalCase(fileName); // `my-icon` → `MyIcon`
  return `export { default as ${iconName} } from "@/svg/${fileName}.svg";`;
});

// 4️⃣ index.ts 파일 생성 및 작성
fs.writeFileSync(INDEX_FILE, exports.join("\n") + "\n");

console.log(`✅ ${files.length}개의 아이콘이 등록되었습니다.`);
console.log(`📁 생성된 파일: ${INDEX_FILE}`);
