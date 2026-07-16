import puppeteer from 'puppeteer';
import { PDFDocument } from 'pdf-lib';
import fs from 'fs';

const TOTAL_SLIDES = 38;
const PORT = 4173; // vite preview
const OUTPUT_PATH = '/Users/shinjuyong/Desktop/경진대회 발표자료(1등)/범정부추천후보_아이디어_숨어있는재능을찾아서_숨인재.pdf';

// 16:9 네이티브 + 초고배율 캡처
const CSS_W = 1600;
const CSS_H = 900;
const SCALE = 3; // 출력 4800 x 2700 px (초고화질)

async function generatePDF() {
  console.log('브라우저 시작...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--force-device-scale-factor=3', '--high-dpi-support=1'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: CSS_W, height: CSS_H, deviceScaleFactor: SCALE });

  const pdfDoc = await PDFDocument.create();

  for (let i = 0; i < TOTAL_SLIDES; i++) {
    console.log(`슬라이드 ${i + 1}/${TOTAL_SLIDES} 캡처 중...`);
    await page.goto(`http://localhost:${PORT}/?slide=${i}`, { waitUntil: 'networkidle0', timeout: 30000 });
    // framer-motion 진입 애니메이션 완료 대기
    await new Promise((r) => setTimeout(r, 3000));

    const screenshot = await page.screenshot({ type: 'png', fullPage: false });
    const image = await pdfDoc.embedPng(screenshot);
    const pdfPage = pdfDoc.addPage([CSS_W, CSS_H]);
    pdfPage.drawImage(image, { x: 0, y: 0, width: CSS_W, height: CSS_H });
  }

  console.log('PDF 저장 중...');
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(OUTPUT_PATH, pdfBytes);
  await browser.close();
  console.log(`PDF 생성 완료: ${OUTPUT_PATH}`);
}

generatePDF().catch((e) => { console.error(e); process.exit(1); });
