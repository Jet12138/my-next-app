This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
# System requirements
Before you begin, make sure your system meets the following requirements:
## 官网说的是使用pnpm（10.x的文档）要求Node.js 18.12 or later. 我直接用Node v22.14.0
## macOS, Windows (including WSL), or Linux.

# License: "Anti 996" License
This project is licensed under the Anti 996 License.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 关于pnpm的一些命令
pnpm prune // 移除不需要的包  prune
pnpm fetch //获取lockfile中列出的包到虚拟存储中，package manifest将被忽略。
只要不更改 .npmrc, package.json, pnpm-lock.yaml, pnpm-workspace.yaml, .pnpmfile.cjs, Docker构建缓存一直有效至
Run pnpm install --frozen-lockfile --prod层，而其在构建Docker 镜像时耗费绝大部分时间。
pnpm dedupe // 如果可以使用较新的版本，则执行安装并删除锁文件中的较旧依赖项。
