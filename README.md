## Available Scripts

In the project directory, you can run:

### `npm start`

启动项目前别忘了安装依赖: `npm i`

### `React旅游网`

安装各种包哈哈.

因为我们需要模块化添加样式,本项目采用 sass.

npm 命令:`npm i sass`.

下一步:安装我们的样式文件.

antd:`npm add antd` (别忘了在 src/App.css 文件顶部引入 `@import '~antd/dist/antd.css';`).

我们看到 antd 里面还有一些高级配置:自定义主题 本项目就不再配置,采用默认主题.

好的现在来看一下本项目的架构:.

```
--src
    ---components(这里放我们的组件)
    ---pages(这里放我们的页面)
```

我们采用 React Router v6

```
npm install react-router-dom
```

安装 redux: `npm install redux --save.`

安装 axios: `npm i axios.`

这里有个小技巧:   
component 和 page,为了避免引入组件和页面造成过多杂乱代码的问题.  
我们可以在每一个组件和页面中新建一个 index.ts 文件,作为我们的统一导出文件夹,然后在 components 和 pages 文件夹下新建一个 index.ts 文件,作为每一个小文件夹的导出文件.  
如下我们就可以轻松引入 component 和 page：

```
import { SignIn, SandBox } from "../pages";
import { SideMenu, TopHeader, NewsRouter } from "../../components";
```

我们将采用 Redux Toolkit 来管理我们的全局状态,这里附上官网地址：http://cn.redux.js.org/redux-toolkit/overview/,其中有介绍相比于直接使用redux带给我们的好处

关于 toastify:

这里推荐一个消息弹出提示库,地址:https://github.com/fkhadra/react-toastify.  

为了方便使用我们这里需要对 toastify 进行一些封装:`npm install --save react-toastify`.  

本项目将封装成一个组件,并在 index.tsx 中引入.

安装 jwt 解码插件:`npm install jwt-decode`  

安装登录持久化插件:`npm i redux-persist`  

这是一个信用卡显示效果的组件:`npm i react-credit-cards`

网站的测试和部署:  

静态服务器:  

`npm install -g serve`  

npm run build`   

`serve -s build -l 123`(绑定端口123)  

项目目前已部署到:http://www.nemo.hanpigpig.top/ (开梯子会请求失败哦)  
