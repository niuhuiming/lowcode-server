## lowcode-server

低代码平台后端项目。低代码项目地址：https://github.com/niuhuiming/lowcode



### 接口信息

- `/api/save`：保存一个组件

  method：POST

- `/api/getList`：获取页面列表

  method：GET

### 表结构

#### lowcodeData.pageData

```sql
CREATE TABLE pageData( 
    pageID VARCHAR(16) PRIMARY KEY, 
    pageRemark VARCHAR(10),
    pageStruct VARCHAR(16000) NOT NULL
);
```

| pageID（页面ID） | pageRemark（备注信息） | pageStruct（页面结构）                                |
| ---------------- | ---------------------- | ----------------------------------------------------- |
| axxxxxxxx-xxxx   | 页面1                  | [{ attribute: [], data: {}, info: {}, position: {} }] |

### 项目部署

1. 服务器的选择与购买

2. 连接远程服务器

   1. 云服务器提供的网页
   2. Xshell
   3. VanDyke

3. 在服务器安装Node环境

   1. 执行rz，选择Linux版本的Node.js压缩包。将压缩包解压到某文件夹下

      ```shell
      /user/local/node/node-v16.17.0-linux-x64
      ```

   2. 将Node和npm配置到环境变量。

      ```shell
      ln -s /user/local/node/node-v16.17.0-linux-x64/bin/npm /user/local/bin/npm
      ```

      Node同理，将npm换为node。设置完后使用`node -v`和`npm -v`检验是否成功。

   3. 执行rz传入自己压缩后的Node项目，解压后使用`node app.js`运行项目。即可在公网IP访问

4. 使用PM2部署Node项目

   使用`node xxx.js`运行项目存在的问题：①不能再进行其他操作②退出终端后接口将不能访问

   解决方法：使用pm2，让Node项目在后台运行

   1. 全局安装pm2。`npm install pm2 -g`
   2. 配置环境变量。配置方法和Node相同
   3. 常用指令：
      - `pm2 start app.js`
      - `pm2 list`
      - `pm2 delete id`

5. 在服务器安装MongoDB

   注意：

   - 默认不支持中文

6. 在Node项目中使用MongoDB

7. 在服务器安装Nginx

   nginx重启：`nginx -s reload`

8. 部署前端项目

9. 配置域名

10. 使用https
