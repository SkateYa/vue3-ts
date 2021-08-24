# Vue 3 + Typescript + Vite
 npm init @vitejs/app  搭建项目
 npm i @types/node -D    安装@types/node
 npm i vue-router@4  安装vue-router
 npm i vuex@next  安装支持 Vue3 的状态管理工具 vuex@next
 npm i element-plus 安装支持 Vue3 的 UI 框架 Element Plus
 npm i axios  安装 Axios
npm i stylus -D   集成 CSS 预编译器 Stylus/Sass/Less
# or
npm i sass -D
npm i less -D




### 目录结构

├── publish/
└── src/
    ├── assets/                    // 静态资源目录
    ├── common/                    // 通用类库目录
    ├── components/                // 公共组件目录
    ├── router/                    // 路由配置目录
    ├── store/                     // 状态管理目录
    ├── style/                     // 通用 CSS 目录
    ├── utils/                     // 工具函数目录
    ├── views/                     // 页面组件目录
    ├── App.vue
    ├── main.ts
    ├── shims-vue.d.ts
├── tests/                         // 单元测试目录
├── index.html
├── tsconfig.json                  // TypeScript 配置文件
├── vite.config.ts                 // Vite 配置文件
└── package.json

