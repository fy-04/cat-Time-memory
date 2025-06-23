<template>
  <div class="timeline-page">
    <!-- 顶部状态栏 -->
    <div class="header">
      <h1 class="app-title">时光轴</h1>
      <button class="add-button">+</button>
    </div>

    <!-- 时间轴主体 -->
    <div class="timeline-container">
      <div class="timeline-item" v-for="item in timeLineRecord" :key="item.id">
        <div class="timeline-marker">
          <div class="timeline-dot"></div>
          <div class="timeline-date">{{ item.date }}</div>
        </div>
        <div class="timeline-content">
          <div class="record-time">{{ item.time }}</div>
          <img
            v-if="item.type === 'image'"
            :src="item.content.imageUrl"
            class="record-image"
            alt="猫咪照片"
          />
          <div v-else-if="item.type === 'text'" class="record-text">
            {{ item.content.text }}
          </div>
          <div v-else-if="item.type === 'video'" class="video-container">
            <!-- 使用HTML5 video标签 -->
            <video
              controls
              :poster="item.content.thumbnailUrl"
              class="video-player"
            >
              <source :src="item.content.videoUrl" type="video/mp4" />
              您的浏览器不支持视频播放
            </video>
            <p class="video-description">{{ item.content.description }}</p>
          </div>
          <div
            v-else-if="item.type === 'audio'"
            class="audio-link"
            @click="playAudio(item)"
          >
            <span class="audio-icon">🔊</span>
            <span class="audio-desc">{{ item.content.description }}</span>
            <span class="audio-duration">{{ item.content.duration }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "TimeLine",
  data() {
    return {
      timeLineRecord: [
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
          id: "5",
          date: "2025-05-12",
          time: "09:30",
          type: "text",
          content: {
            text: "今天小橘子学会了用猫抓板！不再抓沙发了，好开心 🎉",
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
      ],
    };
  },
  methods: {
    showAddModal() {
      // 这里可以触发添加记录的逻辑
      console.log("显示添加记录模态框");
    },
  },
};
</script>

<style scoped>
/* 基础样式 */
.timeline-page {
  background-color: #fff9fa;
  min-height: 100vh;
}

/* 顶部状态栏 */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px 12px 35px;
  /* background-color: blue; */
  position: relative;
}

.app-title {
  /* position: absolute;
  left: 50%; */
  transform: translateX(-50%);
  font-size: 18px;
  margin: 0;
}

.add-button {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #ff7b9c;
  color: white;
  border: none;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 时间轴主体 */
.timeline-container {
  padding: 15px 0;
}

.timeline-item {
  display: flex;
  margin-bottom: 20px;
  position: relative;
}

/* 日期标记 */
.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.timeline-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ff7b9c;
  margin-top: 4px;
}

.timeline-date {
  writing-mode: vertical-rl; /* 核心属性：竖排文字 */
  font-size: 12px;
  color: #666;
  line-height: 1.4;
  text-align: right;
  margin-top: 5px;
}

/* 内容区域 */
.timeline-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin: 0px 15px;
}

.record-time {
  align-self: flex-start; /* 强制左对齐 */
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 8px;
}

.record-image {
  width: 100%;
  border-radius: 8px;
  height: 180px; /* 根据图片比例建议的值 */
  border-radius: 8px;
  object-fit: cover; /* 关键属性：保持比例填充容器 */
  object-position: center; /* 聚焦图片中心区域 */
}

.record-text {
  font-size: 14px;
  line-height: 1.5;
  color: #333;
}
/* 视频容器 */
.video-container {
  margin: 15px 0;
  border-radius: 8px;
  overflow: hidden;
}

/* HTML5视频播放器 */
.video-player {
  width: 100%;
  max-height: 400px;
  background: #000;
}
.audio-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  cursor: pointer;
  border-radius: 6px;
}

.audio-link:hover {
  background: #f5f5f5;
}
</style>
