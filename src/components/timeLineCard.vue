<template>
  <div class="timeline-container">
    <div class="timeline-item" v-for="item in record" :key="item.id">
      <!-- TODO: 把时间轴每个 card 抽成组件 把 item 和其他需要的信息传进去渲染 -->
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
          alt="猫咪照片好啦"
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
</template>

<script>
export default {
  props: {
    record: {
      type: Array,
    },
  },
};
</script>

<style>
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
