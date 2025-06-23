const express = require("express");
const cors = require("cors");
const DataService = require("./DataService");

const app = express();
const PORT = process.env.PORT || 3001;

// 中间件配置
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 创建数据服务实例
const dataService = new DataService();

// API 路由
// 获取时间线列表
app.get("/api/timeline", (req, res) => {
  try {
    console.log("lwt log=> 111");
    const timeLineList = dataService.getTimeLineList();
    console.log("lwt log=> 222");
    res.json({
      success: true,
      data: timeLineList,
      message: "获取时间线列表成功",
    });
  } catch (error) {
    console.error("获取时间线列表失败:", error);
    res.status(500).json({
      success: false,
      message: "获取时间线列表失败",
      error: error.message,
    });
  }
});

// 添加时间线记录 - 为后续功能预留
app.post("/api/timeline", (req, res) => {
  try {
    const newRecord = dataService.addTimeLineRecord(req.body);
    res.json({
      success: true,
      data: newRecord,
      message: "添加时间线记录成功",
    });
  } catch (error) {
    console.error("添加时间线记录失败:", error);
    res.status(500).json({
      success: false,
      message: "添加时间线记录失败",
      error: error.message,
    });
  }
});

// 更新时间线记录 - 为后续功能预留
app.put("/api/timeline/:id", (req, res) => {
  try {
    const updatedRecord = dataService.updateTimeLineRecord(
      req.params.id,
      req.body
    );
    if (updatedRecord) {
      res.json({
        success: true,
        data: updatedRecord,
        message: "更新时间线记录成功",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "未找到指定的时间线记录",
      });
    }
  } catch (error) {
    console.error("更新时间线记录失败:", error);
    res.status(500).json({
      success: false,
      message: "更新时间线记录失败",
      error: error.message,
    });
  }
});

// 删除时间线记录 - 为后续功能预留
app.delete("/api/timeline/:id", (req, res) => {
  try {
    const deletedRecord = dataService.deleteTimeLineRecord(req.params.id);
    if (deletedRecord) {
      res.json({
        success: true,
        data: deletedRecord,
        message: "删除时间线记录成功",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "未找到指定的时间线记录",
      });
    }
  } catch (error) {
    console.error("删除时间线记录失败:", error);
    res.status(500).json({
      success: false,
      message: "删除时间线记录失败",
      error: error.message,
    });
  }
});

// 健康检查接口
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "服务运行正常",
    timestamp: new Date().toISOString(),
  });
});

// 404 处理
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "接口不存在",
  });
});

// 错误处理中间件
app.use((error, req, res, next) => {
  console.error("服务器错误:", error);

  // 如果响应已经发送，则传递给默认错误处理器
  if (res.headersSent) {
    return next(error);
  }

  res.status(500).json({
    success: false,
    message: "服务器内部错误",
    error: process.env.NODE_ENV === "development" ? error.message : undefined,
  });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`🚀 Cat Time Memory 服务器运行在端口 ${PORT}`);
  console.log(`📍 本地访问地址: http://localhost:${PORT}`);
  console.log(`🔗 API 文档:`);
  console.log(`   GET  /api/timeline     - 获取时间线列表`);
  console.log(`   POST /api/timeline     - 添加时间线记录`);
  console.log(`   PUT  /api/timeline/:id - 更新时间线记录`);
  console.log(`   DEL  /api/timeline/:id - 删除时间线记录`);
  console.log(`   GET  /api/health       - 健康检查`);
});

module.exports = app;
