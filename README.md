- husky 提交前测试  不符合eslint规则 拒绝提交

- commander ：参数解析 --help其实就借助了他~
- inquirer ：交互式命令行工具，有他就可以实现命令行的选择功能
- download-git-repo ：在git中下载模板
- chalk ：粉笔帮我们在控制台中画出各种各样的颜色
- metalsmith ：读取所有文件,实现模板渲染
- consolidate ：统一模板引擎

---

```js

npm install -g yo generator-eslint // ESLint官方为了方便开发者开发插件，提供了使用Yeoman模板(generator-eslint)。

```

```js

### husky

> "必须使用npm安装eslint 和 husky   window yarn安装拦截钩子"
git commit -m 'eslint before commit' -n // 忽略本次检查  提交
```