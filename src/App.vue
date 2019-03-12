<template>
  <div id="app">
    <router-view/>

    <!--底部导航 路由 -->
    <footer class="app-footer">
      <wx-nav></wx-nav>
       <!-- <nav-mint></nav-mint> -->
    </footer>
  </div>
</template>

<script>
import WxNav from "./components/wx-nav";
// import WxNavNew from "./components/nav-mint";
export default {
  //加入搜索历史记录
  //或者时间选择框，选择一段时间的
  //2 是否可以仿照抖音，图片，点击背面是信息，下滑是下一个
  name: "App",
  components: {
    WxNav
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app-footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 3rem;
  background: #26a2ff;
}
body{
  margin: 0px;
}
</style>
