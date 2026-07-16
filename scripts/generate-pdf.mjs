import puppeteer from 'puppeteer';
import { PDFDocument } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

const TOTAL_SLIDES = 15;
const OUTPUT_PATH = '/Users/shinjuyong/Desktop/경진대회 발표자료(1등)/숨인재_발표자료_v3.pdf';

async function generatePDF() {
  console.log('브라우저 시작...');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // 사용자 스크린샷 기준 (3024x1616 / 2 = 1512x808)
  const viewportWidth = 1512;
  const viewportHeight = 808;

  await page.setViewport({
    width: viewportWidth,
    height: viewportHeight,
    deviceScaleFactor: 2 // 맥북 Retina (출력: 3024x1616)
  });

  const pdfDoc = await PDFDocument.create();

  console.log('슬라이드 캡처 시작...');

  for (let i = 0; i < TOTAL_SLIDES; i++) {
    console.log(`슬라이드 ${i + 1}/${TOTAL_SLIDES} 캡처 중...`);

    // 각 슬라이드로 이동 (URL 파라미터로 슬라이드 번호 전달)
    await page.goto(`http://localhost:3000/?slide=${i}`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // 애니메이션 완료 대기 (framer-motion 진입 애니메이션 여유)
    await new Promise(resolve => setTimeout(resolve, 3000));

    // 스크린샷 캡처
    const screenshot = await page.screenshot({
      type: 'png',
      fullPage: false
    });

    // PDF에 이미지 추가
    const image = await pdfDoc.embedPng(screenshot);

    const pdfPage = pdfDoc.addPage([viewportWidth, viewportHeight]);
    pdfPage.drawImage(image, {
      x: 0,
      y: 0,
      width: viewportWidth,
      height: viewportHeight
    });
  }

  console.log('PDF 저장 중...');

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(OUTPUT_PATH, pdfBytes);

  await browser.close();

  console.log(`PDF 생성 완료: ${OUTPUT_PATH}`);
}

generatePDF().catch(console.error);
