# lowcode-server

## 接口信息

- `/api/save`：保存一个组件

  method：POST

- `/api/getList`：获取页面列表

  method：GET

## 表结构

#### lowcodeData/pageData

```sql
CREATE TABLE pageData( 
    pageID VARCHAR(16) PRIMARY KEY, 
    pageRemark VARCHAR(10),
    pageStruct VARCHAR(16000) NOT NULL
);
```



| 页面id（string） | 备注信息 | 页面结构（string）                                    |
| ---------------- | -------- | ----------------------------------------------------- |
| axxxxxxxx-xxxx   | 页面1    | [{ attribute: [], data: {}, info: {}, position: {} }] | 
|                  |          |                                                       |
|                  |          |                                                       |

