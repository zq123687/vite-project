# vite创建

npm init vite-app <project-name>
cd <project-name>
npm install
npm run dev

## 修改main.js

将main.js改为main.ts, 并修改index.html
在.vue中使用Ts, 将<script>修改为<script lang="ts">

## vite开启类型推断

#### 安装typescript

npm install -D typescript
----
生成配置文件
tsc --init
配置校验文件
include exclude

#### 添加类型声明文件
项目会报错，找不到App.vue模块相应的类型声明。
在/src目录下创建一个*.d.ts文件, 添加.vue文件的类型声明
在/src目录下创建一个*.d.ts文件, 添加优化编译器提示，声明静态资源文件

#### 修改build构建命令, 添加tsc校验
"build": "tsc --noEmit && vite build"

## 安装eslint-plugin-vue

cnpm install -D eslint eslint-plugin-vue
----
在根目录下创建.eslintrc.js文件

## 安装pritter

cnpm install -D prettier eslint-config-prettier eslint-plugin-prettier
----
项目根目录创建配置文件：.prettierrc.js

## 安装vue-router

cnpm install vue-router@next
----
在./src下创建router/index.ts文件

## 安装vuex

cnpm install vuex@next
----
在./src下创建store/index.ts文件

## 配置vite设置

在根目录下创建vite.config.ts

## 安装less

cnpm install less less-loader

## typescript中的声明文件

[查看](https://blog.csdn.net/weixin_34357887/article/details/93163641)

## 使用jsx [参考](https://github.com/vuejs/jsx-next/blob/dev/packages/babel-plugin-jsx/README-zh_CN.md)
