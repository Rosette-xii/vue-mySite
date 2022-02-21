<template>
  <section class="description">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10 col-12">
          <h2 class="lh-sm fs-3 pb-3">{{ data.chTitle }}</h2>
          <p class="text-secondary lh-sm fs-7 pb-4">{{ data.enTitle }}n</p>
          <ul class="lh-lg fs-7 mb-5">
            <li class="d-block d-md-flex pb-2">
              <h3>版本</h3>
              <p>{{ description.version }}</p>
            </li>
            <li class="d-block d-md-flex pb-2">
              <h3>內容物</h3>
              <p v-html="description.content"></p>
            </li>
            <li class="d-block d-md-flex pb-2">
              <h3>設計概要</h3>
              <p v-html="description.concept"></p>
            </li>
          </ul>
          <ul>
            <li class="mb-5" v-for="(item, index) in data.imgIntro" :key="index" data-aos="fade-up">
              <img :src="item.imgUrl" :alt="item.alt" />
              <p class="text-secondary fs-7 pt-2" v-if="item.description">{{ item.description }}</p>
            </li>
          </ul>
        </div>
        <div class="col-md-10 col-12 text-end pt-2 pt-mb-5">
          <a @click.prevent="goPath()" class="view-more" href="#">back</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      data: {},
      description: {},
    };
  },
  methods: {
    getData() {
      this.axios({
        method: "get",
        url: "https://raw.githubusercontent.com/Rosette-xii/vue-mysite/main/src/assets/static/data.json",
      })
        .then((res) => {
          this.data = res.data.graphicData[0];
          this.description = this.data.description;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    goPath() {
      this.$router.push("../graphic-design");
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    this.getData();
  },
};
</script>