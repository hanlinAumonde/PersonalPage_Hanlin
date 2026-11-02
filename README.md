# 🌟 个人作品集网站 | Personal Portfolio

一个现代化、响应式的个人作品集网站，使用 React 19、TypeScript 和 Vite 构建，支持中英文双语切换。

## 🔗 在线演示

👉 [https://hanlinAumonde.github.io/PersonalPage_Hanlin](https://hanlinAumonde.github.io/PersonalPage_Hanlin)

## ✨ 功能特性

- 🎨 **现代化设计** - 采用渐变色彩和流畅动画效果
- 🌍 **双语支持** - 支持英语和法语切换
- 📱 **完全响应式** - 适配桌面、平板和移动设备
- ✉️ **联系表单** - 集成 EmailJS 实现邮件发送功能
- 🎭 **动态背景** - tsParticles 粒子动画效果
- 🧭 **智能导航** - 滚动监听和平滑锚点跳转
- 🎯 **滚动动画** - 基于 Intersection Observer 的进场动画
- ⚡ **性能优化** - 使用 SWC 编译器实现快速构建
- 🔍 **SEO 优化** - 使用 react-helmet-async 管理元数据

## 🛠️ 技术栈

### 核心框架
- **React 19** - 最新版本 React 框架
- **TypeScript 5.7** - 类型安全的 JavaScript
- **Vite 6.2** - 下一代前端构建工具

### UI 库和样式
- **Material-UI (MUI) v6** - React UI 组件库
- **Emotion** - CSS-in-JS 样式解决方案
- **CSS Modules** - 组件级样式隔离

### 功能库
- **tsParticles** - 粒子动画效果
- **EmailJS** - 客户端邮件发送服务
- **react-helmet-async** - 动态管理文档头部

### 开发工具
- **ESLint** - 代码质量检查
- **SWC** - 超快的 TypeScript/JavaScript 编译器
- **GitHub Actions** - 自动化部署

## 🚀 快速开始

### 前置要求

- Node.js >= 16.0.0
- npm >= 8.0.0

### 安装

```bash
# 克隆仓库
git clone https://github.com/hanlinAumonde/PersonalPage_Hanlin.git

# 进入项目目录
cd PersonalPage_Hanlin

# 安装依赖
npm install
```

### 开发

```bash
# 启动开发服务器
npm run dev

# 浏览器访问 http://localhost:5173
```

### 构建

```bash
# 生产环境构建
npm run build

# 预览构建结果
npm run preview
```

### 代码检查

```bash
# 运行 ESLint
npm run lint
```

## 📁 项目结构

```
PersonalPage_Hanlin/
├── .github/
│   └── workflows/          # GitHub Actions 工作流
├── public/                 # 静态资源
│   └── assets/            # 图片、图标等资源
├── src/
│   ├── components/        # React 组件
│   │   ├── Contents/     # 内容区域组件
│   │   ├── Header.component.tsx
│   │   ├── NavBar.component.tsx
│   │   ├── Footer.component.tsx
│   │   └── MainContainer.component.tsx
│   ├── config/           # 配置文件
│   │   ├── languageContext.ts
│   │   ├── Emailjs_config.ts
│   │   └── ts_particle_config.ts
│   ├── seo/              # SEO 组件
│   ├── styles/           # CSS Modules 样式
│   ├── util/             # 工具函数和 hooks
│   │   ├── hooks/       # 自定义 React hooks
│   │   ├── ui/          # UI 组件
│   │   └── TextContent/ # 多语言文本内容
│   ├── App.tsx          # 根组件
│   └── main.tsx         # 应用入口
├── index.html
├── vite.config.ts       # Vite 配置
├── tsconfig.json        # TypeScript 配置
└── package.json
```

## 🎨 核心功能模块

### 1. 个人简介 (Profil)
展示个人基本信息、头像和简要介绍

### 2. 技能展示 (Skills)
以卡片形式展示技术栈和专业技能

### 3. 工作经验 (Experience)
时间线形式呈现工作和教育经历

### 4. 项目展示 (Projects)
展示个人项目作品集

## 🌐 多语言配置

项目使用 React Context API 实现全局多语言支持：

- 默认语言：法语 (fr)
- 支持语言：英语 (en)、法语 (fr)、中文 (zh)
- 文本内容存储在 `src/util/TextContent/` 目录

## 📧 EmailJS 配置

如需修改联系表单配置，请编辑 `src/config/Emailjs_config.ts`:

```typescript
export const EMAILJS_CONFIG = {
    serviceId: 'your_service_id',
    templateId: 'your_template_id',
    publicKey: 'your_public_key'
};
```

## 🚢 部署

项目配置了 GitHub Actions 自动部署到 GitHub Pages：

1. 推送代码到 `main` 分支
2. GitHub Actions 自动触发构建
3. 构建产物自动部署到 GitHub Pages

### 手动部署

```bash
# 构建项目
npm run build

# dist 目录包含所有构建产物
```

## 🔧 自定义配置

### 修改 Base URL

如果部署到不同的路径，需要修改 `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // 修改为你的仓库名
})
```

### 修改粒子动画

编辑 `src/config/ts_particle_config.ts` 来自定义粒子效果。


## 👤 作者

Hanlin

- GitHub: [@hanlinAumonde](https://github.com/hanlinAumonde)
