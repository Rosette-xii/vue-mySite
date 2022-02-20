<template>
  <div id="app">
    <Header />
    <router-view class="everyPage" />
    <Contact />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: { Header, Contact, Footer },
};
</script>
<style>
@import "./assets/style/CSS/all.css";
</style>
