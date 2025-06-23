<template>
  <div class="home-container">
    <!-- 路由视图内容 -->
    <router-view></router-view>

    <!-- 底部导航栏 -->
    <div class="tab-bar">
      <router-link
        to="/timeline"
        class="tab-item"
        :class="{ active: $route.path === '/timeline' }"
      >
        时光轴
      </router-link>
      <router-link
        to="/todos"
        class="tab-item"
        :class="{ active: $route.path === '/todos' }"
      >
        待办事项
      </router-link>
      <router-link
        to="/important"
        class="tab-item"
        :class="{ active: $route.path === '/important' }"
      >
        重要记录
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>
.home-container {
  max-width: 500px;
  margin: 0 auto;
  position: relative;
  min-height: 100vh;
  background-color: #fff9fa;
  padding-bottom: 60px; /* 给底部导航栏留出空间 */
}

.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  background-color: white;
  padding: 12px 0;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.05);
  max-width: 500px;
  margin: 0 auto;
}

.tab-item {
  font-size: 14px;
  color: #999;
  padding: 5px 10px;
  text-decoration: none;
}

.tab-item.active {
  color: #ff7b9c;
  font-weight: 500;
}
</style>
