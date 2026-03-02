# Aviation Personal Website (GitHub Pages)

这是一个纯前端静态网站，核心功能：

- 世界地图显示你飞过的航线（大圆航线）
- 机场标记与照片数量统计
- 机场飞机图库展示
- 自定义新增航线和照片
- `localStorage` 本地持久化
- JSON 导入/导出（便于备份和跨设备迁移）

## 本地预览

直接双击 `index.html` 即可打开，或用任意静态服务器。

## 部署到 GitHub Pages

1. 新建仓库，例如 `my-aviation-site`
2. 把以下文件提交到仓库根目录：
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
3. 在 GitHub 仓库打开 `Settings` -> `Pages`
4. 在 `Build and deployment` 下选择：
   - `Source`: `Deploy from a branch`
   - `Branch`: `main` + `/ (root)`
5. 保存后等待 1-2 分钟，访问页面地址：
   - `https://<你的用户名>.github.io/<仓库名>/`

## 数据说明

- 默认数据在 `script.js` 的 `DEFAULT_DATA` 中
- 你在网页里新增的数据会保存在浏览器 `localStorage`
- 如果想长期保存并同步到 GitHub：
  1. 点击“导出数据 JSON”
  2. 把导出的 JSON 保存到项目里（例如 `data/backup.json`）
  3. 提交到 GitHub

## 后续可扩展

- 增加“按年份筛选航线”
- 支持删除/编辑航线与照片
- 接入 Cloudflare R2 / Supabase 存储图片和结构化数据
