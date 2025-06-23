<template>
  <div class="todo-app">
    <!-- 顶部状态栏 -->
    <div class="header">
      <div class="time-display">9:41</div>
      <h1 class="app-title">待办事项</h1>
      <button class="add-button" @click="showAddModal">+</button>
    </div>

    <!-- 待办事项统计 -->
    <div class="todo-stats">
      <div class="stat-item">
        <span class="stat-count">4</span>
        <span class="stat-label">待完成</span>
      </div>
      <div class="stat-item">
        <span class="stat-count">2</span>
        <span class="stat-label">已完成</span>
      </div>
      <div class="stat-item">
        <span class="stat-count">1</span>
        <span class="stat-label">即将到期</span>
      </div>
    </div>

    <!-- 待办事项列表 -->
    <div class="todo-lists">
      <!-- 待完成列表 -->
      <div class="todo-category">
        <h3 class="category-title">待完成</h3>
        <ul class="task-list">
          <li v-for="task in pendingTasks" :key="task.id" class="task-item">
            <div class="task-checkbox unchecked"></div>
            <div class="task-content">
              <span class="task-text">{{ task.text }}</span>
              <span class="task-date">{{ task.date }}</span>
            </div>
          </li>
        </ul>
      </div>

      <!-- 已完成列表 -->
      <div class="todo-category">
        <h3 class="category-title">已完成</h3>
        <ul class="task-list">
          <li v-for="task in completedTasks" :key="task.id" class="task-item">
            <div class="task-checkbox checked">✓</div>
            <div class="task-content">
              <span class="task-text">{{ task.text }}</span>
              <span class="task-date">{{ task.date }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoApp",
  data() {
    return {
      tasks: [
        { id: 1, text: "购买猫粮", date: "2025-05-20", completed: false },
        { id: 2, text: "预约兽医体检", date: "2025-05-25", completed: false },
        { id: 3, text: "清洗猫窝", date: "2025-05-17", completed: false },
        { id: 4, text: "更换猫砂", date: "2025-05-16", completed: false },
        { id: 5, text: "购买猫玩具", date: "2025-05-15", completed: true },
        { id: 6, text: "整理猫咪照片", date: "2025-05-10", completed: true },
      ],
    };
  },
  computed: {
    pendingTasks() {
      return this.tasks.filter((task) => !task.completed);
    },
    completedTasks() {
      return this.tasks.filter((task) => task.completed);
    },
  },
  methods: {
    showAddModal() {
      // 添加新待办事项的逻辑
      console.log("打开添加模态框");
    },
  },
};
</script>

<style scoped>
/* 基础样式 */
.todo-app {
  max-width: 500px;
  margin: 0 auto;
  background-color: #fff9fa; /* 浅粉色背景 */
  min-height: 100vh;
  font-family: "PingFang SC", "Helvetica Neue", Arial, sans-serif;
}

/* 顶部状态栏 */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  position: relative;
}

.time-display {
  font-size: 14px;
  color: #333;
}

.app-title {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.add-button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ff7b9c; /* 粉色按钮 */
  color: white;
  border: none;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

/* 待办事项统计 */
.todo-stats {
  display: flex;
  justify-content: space-around;
  padding: 15px 0;
  background-color: white;
  margin: 10px 15px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-count {
  font-size: 20px;
  font-weight: 600;
  color: #333;
}

.stat-label {
  font-size: 12px;
  color: #999;
  margin-top: 5px;
}

/* 待办事项列表 */
.todo-lists {
  padding: 0 15px;
}

.todo-category {
  margin-bottom: 20px;
  background-color: white;
  border-radius: 12px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.category-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 15px 0;
}

.task-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.task-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
}

.task-item:last-child {
  border-bottom: none;
}

.task-checkbox {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #ff7b9c; /* 粉色边框 */
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.task-checkbox.checked {
  background-color: #4caf50; /* 绿色背景 */
  border-color: #4caf50;
  color: white;
}

.task-content {
  flex: 1;
}

.task-text {
  font-size: 15px;
  color: #333;
  display: block;
}

.task-date {
  font-size: 12px;
  color: #999;
}
</style>
