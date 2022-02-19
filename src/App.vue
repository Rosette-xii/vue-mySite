<template>
  <div id="app">
    <Header />
    <router-view class="everyPage" />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  name: "App",
  components: { Header },
};
</script>
<style>
@import "./assets/style/CSS/all.css";
</style>
