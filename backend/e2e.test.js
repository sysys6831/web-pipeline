const { Builder, By, until } = require('selenium-webdriver');

async function runE2ETest() {
  // Headless 크롬 브라우저 세팅
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // 1. 프론트엔드 접속 (예시 로컬 주소)
    await driver.get('http://localhost:3000');

    // 2. Tiptap 에디터 영역 찾기 (실제 CSS 선택자에 맞게 수정)
    let editor = await driver.wait(until.elementLocated(By.css('.ProseMirror')), 5000);

    // 3. 텍스트 입력 테스트
    await editor.sendKeys('Selenium E2E 자동화 테스트 진행 중입니다.');

    // 4. 저장 버튼 클릭 시나리오
    let saveBtn = await driver.findElement(By.id('save-button'));
    await saveBtn.click();

    console.log('E2E 테스트 통과 완료');
  } finally {
    await driver.quit();
  }
}
runE2ETest();