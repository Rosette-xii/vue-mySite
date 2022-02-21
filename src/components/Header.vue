<template>
  <nav class="position-fixed navbar navbar-expand-lg py-lg-4 w-100" id="nav">
    <div class="container">
      <h1>
        <a href="/"><img src="../assets/images/logo.png" alt="logo" /></a>
      </h1>
      <button @click="burgerAction()" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="burger-top" :class="{ 'rotate-top': burgerTop }"></span>
        <span class="burger-bottom" :class="{ 'rotate-bottom': burgerBottom }"></span>
      </button>
      <div class="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="px-3 nav-item" :class="{ 'pe-0': item.id === 4 }" v-for="item in linkList" :key="item.id">
            <a @click.prevent="goPath(item)" class="px-0 pb-1 nav-link" :class="{ active: checkPath(item) }" :href="item.path">{{ item.label }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      linkList: [
        {
          id: 1,
          label: "GRAPHIC DESIGN",
          path: "/graphic-design",
        },
        {
          id: 2,
          label: "PRODUCT DESIGN",
          path: "/product-design",
        },
        {
          id: 3,
          label: "ABOUT",
          path: "/about",
        },
        {
          id: 4,
          label: "CONTACT",
          path: "",
        },
      ],
      burgerTop: false,
      burgerBottom: false,
    };
  },
  methods: {
    burgerAction() {
      this.burgerTop = !this.burgerTop;
      this.burgerBottom = !this.burgerBottom;
    },
    goPath(item) {
      if (item.label != "CONTACT") {
        this.$router.push(item.path);
        window.scrollTo(0, 0);
      } else {
        this.goContact();
      }
    },
    goContact() {
      document.getElementById("contact").scrollIntoView(true);
    },
  },
  computed: {
    checkPath() {
      return (item) => {
        if (item.path.substr(0, 15) === "/graphic-design") {
          return item.path.substr(0, 15) === this.$route.path.substr(0, 15);
        } else {
          return item.path === this.$route.path;
        }
      };
    },
  },
};
</script>