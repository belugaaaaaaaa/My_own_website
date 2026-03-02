# Personal Website (GitHub Pages)

当前版本是 5 屏个人网站结构：

1. Home: 飞机大图 + 姓名 + 邮箱 + LinkedIn
2. About: 自我介绍
3. Flight Log: 世界航线地图 + 机场飞机图库（只读展示）
4. Experience: 时间线工作经历（待按 LinkedIn 真实内容替换）
5. Contact: 联系方式

## 部署

- 已配置 GitHub Actions Pages 自动部署
- 每次 push 到 `main` 会自动发布

## 后续你给我数据后我会直接替换

- `script.js` 里的 `HOBBY_DATA`：你的真实机场、航线、图片
- `script.js` 里的 `EXPERIENCE_DATA`：你的真实工作经历（时间顺序）
- `index.html` 里的邮箱、GitHub 等个人信息
