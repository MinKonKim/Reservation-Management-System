import { pascalCase } from "change-case";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

// ✅ __dirname 대체 코드 (ESM 방식)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 📂 SVG 폴더 경로
const SVG_DIR = path.join(__dirname, "../svg");
// 📂 Icons 폴더 경로
const ICONS_DIR = path.join(__dirname, "../shared/Icons");
const INDEX_FILE = path.join(ICONS_DIR, "index.ts");

// Icons 폴더 생성 (없으면 생성)
fs.ensureDirSync(ICONS_DIR);

// ✅ 기존 `index.ts` 파일 읽기 (없으면 빈 문자열)
const existingExports = fs.existsSync(INDEX_FILE)
  ? fs.readFileSync(INDEX_FILE, "utf-8")
  : "";

// ✅ 기존에 등록된 아이콘 목록 추출
const existingIcons = new Set(
  existingExports
    .split("\n")
    .map((line) => {
      const match = line.match(/export \{ default as (\w+) \}/);
      return match ? match[1] : null;
    })
    .filter(Boolean)
);

// ✅ svg 폴더에서 모든 `.svg` 파일 가져오기
const files = fs.readdirSync(SVG_DIR).filter((file) => file.endsWith(".svg"));

if (files.length === 0) {
  console.log("❌ SVG 파일이 없습니다.");
  process.exit(1);
}

// ✅ 새롭게 추가할 아이콘만 필터링
const newExports = files
  .map((file) => {
    const fileName = path.basename(file, ".svg"); // 확장자 제거
    const iconName = pascalCase(fileName); // `my-icon` → `MyIcon`

    // 기존에 등록된 아이콘은 추가하지 않음
    if (existingIcons.has(iconName)) {
      return null;
    }

    return `export { default as ${iconName} } from "@/svg/${fileName}.svg";`;
  })
  .filter(Boolean); // null 값 제거

if (newExports.length === 0) {
  console.log(
    "✅ 추가할 아이콘이 없습니다. 모든 아이콘이 이미 등록되어 있습니다."
  );
  process.exit(0);
}

// ✅ 기존 `index.ts`에 새로운 아이콘 추가
fs.appendFileSync(INDEX_FILE, newExports.join("\n") + "\n");

console.log(`✅ ${newExports.length}개의 새로운 아이콘이 추가되었습니다.`);
console.log(`📁 생성된 파일: ${INDEX_FILE}`);
