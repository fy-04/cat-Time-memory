<template>
  <div class="timeline-page">
    <!-- 顶部状态栏 -->
    <div class="header">
      <h1 class="app-title">时光轴</h1>
      <button class="add-button">+</button>
    </div>

    <!-- 时间轴主体 -->
    <timeLineCardVue :record="timeLineRecord"></timeLineCardVue>
  </div>
</template>

<script>
import timeLineCardVue from "@/components/timeLineCard.vue";

export default {
  name: "TimeLine",
  components: { timeLineCardVue },
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
</style>
