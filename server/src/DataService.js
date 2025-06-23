// 数据库抽象层 - 为后续接入数据库预留的钩子
class DataService {
  constructor() {
    this.timeLineData = this.initializeData();
  }

  // 初始化数据 - 从 TimeLine.vue 中提取的数据
  initializeData() {
    return [
      {
        id: "5",
        date: "2025-05-12",
        time: "09:30",
        type: "text",
        content: {
          text: "今天小橘子学会了用猫抓板！不再抓沙发了，好开心 🎉",
        },
      },
      {
        id: "4",
        date: "2025-05-13",
        time: "16:15",
        type: "audio",
        content: {
          audioUrl: "",
          duration: "0:32",
          description: "录制了小橘子的呼噜声",
          progress: 60,
        },
      },
      {
        id: "3",
        date: "2025-05-14",
        time: "14:20",
        type: "video",
        content: {
          thumbnailUrl:
            "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=250&fit=crop",
          thumbnailAlt: "小猫睡觉",
          videoUrl: "",
        },
      },
      {
        id: "1",
        date: "2025-05-16",
        time: "10:30",
        type: "image",
        content: {
          imageUrl:
            "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=250&fit=crop",
          imageAlt: "小猫玩耍",
        },
      },
      {
        id: "2",
        date: "2025-05-16",
        time: "18:45",
        type: "text",
        content: {
          text: "今天小橘子第一次主动跳到我膝上撒娇，还用小脑袋蹭我的手，好可爱！感觉终于被猫主子接受了，太开心了～",
        },
      },
      {
        id: "6",
        date: "2025-05-16",
        time: "10:30",
        type: "image",
        content: {
          imageUrl:
            "https://img0.baidu.com/it/u=2824033267,411398834&fm=253&fmt=auto&app=138&f=JPEG?w=813&h=800",
          imageAlt: "小猫玩耍",
        },
      },
      {
        id: "7",
        date: "2025-05-16",
        time: "10:30",
        type: "image",
        content: {
          imageUrl:
            "https://img2.baidu.com/it/u=552463963,3588036838&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800",
          imageAlt: "小猫玩耍",
        },
      },
    ];
  }

  // 获取时间线列表 - 按日期和时间排序
  getTimeLineList() {
    return [...this.timeLineData].sort((a, b) => {
      // 首先按日期排序
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      if (dateA.getTime() !== dateB.getTime()) {
        return dateB.getTime() - dateA.getTime(); // 最新的在前
      }

      // 如果日期相同，按时间排序
      const timeA = a.time.split(":").map(Number);
      const timeB = b.time.split(":").map(Number);

      const minutesA = timeA[0] * 60 + timeA[1];
      const minutesB = timeB[0] * 60 + timeB[1];

      return minutesB - minutesA; // 最晚的在前
    });
  }

  // 添加时间线记录 - 为后续功能预留
  addTimeLineRecord(record) {
    const newRecord = {
      ...record,
      id: Date.now().toString(), // 简单的 ID 生成
    };
    this.timeLineData.push(newRecord);
    return newRecord;
  }

  // 更新时间线记录 - 为后续功能预留
  updateTimeLineRecord(id, updates) {
    const index = this.timeLineData.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.timeLineData[index] = { ...this.timeLineData[index], ...updates };
      return this.timeLineData[index];
    }
    return null;
  }

  // 删除时间线记录 - 为后续功能预留
  deleteTimeLineRecord(id) {
    const index = this.timeLineData.findIndex((item) => item.id === id);
    if (index !== -1) {
      return this.timeLineData.splice(index, 1)[0];
    }
    return null;
  }

  // 数据库连接钩子 - 为后续接入数据库预留
  async connectDatabase() {
    // TODO: 实现数据库连接逻辑
    console.log("数据库连接钩子 - 待实现");
  }

  // 数据迁移钩子 - 为后续接入数据库预留
  async migrateToDatabase() {
    // TODO: 将内存数据迁移到数据库
    console.log("数据迁移钩子 - 待实现");
  }
}

module.exports = DataService;
