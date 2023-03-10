###创建项目
````
npm init
````
### 安装webpack依赖
````
npm install webpack@4.43.0 webpack-cli -D
````
### 配置config文件 ###package中增加
```
"build": "npx webpack --config webpack.config.js"
```

### 打包
```
npm run build
```
### 发布前切换中央仓库
```
npm config set registry https://registry.npmjs.org/
```
###登录 npm
```
npm login
```
### 发布npm 包
```
npm publish
```
### 删除npm 包
```
npm unpublish  name@version
```
###更新npm包,修改package.json的version版本号，重新打包发布


### 下载安装插件
```
npm i js-util-plugin -D
```

### 在项目中引用 
```
import jsUtilsPlugin from 'js-util-plugin'

```

### 该项目主要包含：常用工具函数
```
```
