import fs from 'fs';
import path from 'path';

// 读取sitemap文件
const sitemapPath = '/Volumes/ORICO/astor_site/pianyijichang.uk/dist/sitemap-0.xml';
const outputPath = '/Volumes/ORICO/astor_site/pianyijichang.uk/out.txt';

try {
  // 读取XML文件内容
  const xmlContent = fs.readFileSync(sitemapPath, 'utf8');
  
  // 使用正则表达式提取所有URL
  const urlRegex = /<loc>(https:\/\/pianyijichang\.uk[^<]+)<\/loc>/g;
  const urls = [];
  let match;
  
  while ((match = urlRegex.exec(xmlContent)) !== null) {
    urls.push(match[1]);
  }
  
  // 将URL数组转换为JSON格式并写入文件
  fs.writeFileSync(outputPath, JSON.stringify(urls, null, 2), 'utf8');
  
  console.log(`成功提取 ${urls.length} 个URL并保存到 ${outputPath}`);
} catch (error) {
  console.error('处理文件时出错:', error);
}