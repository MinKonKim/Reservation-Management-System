import { pascalCase } from "change-case";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

// __dirname 대체 (ESM 환경)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 📂 SVG 원본 폴더
const SVG_DIR = path.join(__dirname, "../../public/svg");
// 📂 React 컴포넌트가 저장될 폴더
const ICONS_DIR = path.join(__dirname, "../shared/icons");
// 📂 index.ts 파일 경로
const INDEX_FILE = path.join(ICONS_DIR, "index.ts");

// Icons 폴더 생성 (없으면 생성)
fs.ensureDirSync(ICONS_DIR);

// index.ts 초기화
fs.writeFileSync(INDEX_FILE, "");

// `.svg` 파일 가져오기
const files = fs.readdirSync(SVG_DIR).filter((file) => file.endsWith(".svg"));

if (files.length === 0) {
  console.log("❌ SVG 파일이 없습니다.");
  process.exit(1);
}

// 아이콘 컴포넌트 생성
files.forEach((file) => {
  const fileName = path.basename(file, ".svg"); // 확장자 제거
  const iconName = pascalCase(fileName) + "Icon"; // `my-icon` → `MyIcon`

  const componentFilePath = path.join(ICONS_DIR, `${iconName}.tsx`);

  // 컴포넌트 코드 생성
  const componentCode = `
import Image from "next/image";

const ${iconName} = ({ width = 24, height = 24, alt = "${iconName}" }) => {
  return <Image src={"/svg/${fileName}.svg"} width={width} height={height} alt={alt} />;
};

export default ${iconName};
  `;

  // 파일 생성
  fs.writeFileSync(componentFilePath, componentCode.trim());

  // index.ts에 export 추가
  fs.appendFileSync(
    INDEX_FILE,
    `export { default as ${iconName} } from "./${iconName}";\n`
  );
});

console.log(`✅ ${files.length}개의 아이콘 컴포넌트가 생성되었습니다.`);
console.log(`📁 생성된 파일: ${INDEX_FILE}`);
