# Cat Time Memory 服务端

这是猫咪时光记忆应用的后端服务，使用 Express.js 构建。

## 安装依赖

```bash
cd server
npm install
```

## 启动服务

开发模式：
```bash
npm run dev
```

生产模式：
```bash
npm start
```

## API 接口

服务器默认运行在 `http://localhost:3001`

### 时间线接口

- `GET /api/timeline` - 获取时间线列表（按日期和时间排序）
- `POST /api/timeline` - 添加时间线记录
- `PUT /api/timeline/:id` - 更新时间线记录
- `DELETE /api/timeline/:id` - 删除时间线记录

### 其他接口

- `GET /api/health` - 健康检查

## 数据结构

时间线记录格式：
```json
{
  "id": "string",
  "date": "YYYY-MM-DD",
  "time": "HH:MM",
  "type": "text|image|video|audio",
  "content": {
    // 根据 type 不同而不同的内容
  }
}
```

## 注意事项

- 当前数据存储在内存中
- 已预留数据库接入钩子，便于后续扩展
- 数据按日期和时间排序（最新的在前） 