const puppeteer = require('puppeteer');

async function multipleInstances() {
  const instance = await puppeteer.launch({
    headless: true,
    // devtools: true,
    defaultViewport: { width: 1920, height: 1080 }, 
    args: [
      '--no-sandbox',
      '--start-maximized',
    ]
  }); // 创建浏览器实例
  console.time('本次耗时');

  // 创建新页面
  await Promise.all([
    createPage(instance, 'https://www.baidu.com'),
    // createPage(instance, 'https://www.qq.com'),
    // createPage(instance, 'https://www.126.com'),
    // createPage(instance, 'https://www.163.com'),
    // createPage(instance, 'https://www.taobao.com'),
    // createPage(instance, 'https://www.hao123.com')
  ]);

  console.log('puppeteer调用chrome成功');

  // 关闭浏览器实例
  await instance.close();

  console.timeEnd('本次耗时');
}

async function createPage(instance, url) {
  const page = await instance.newPage();
  page.setDefaultTimeout(1000 * 60 * 5);
  await page.goto(url, { waitUntil: 'networkidle0' });
  console.log('当前浏览页面：' + url);
  const userAgent =  await page.evaluate(() => navigator.userAgent);
  console.log('userAgent: ' + userAgent);
}

multipleInstances();
