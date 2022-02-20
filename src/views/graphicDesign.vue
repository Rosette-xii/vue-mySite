<template>
  <div id="graphicDesign">
    <section class="main-title mb-0" id="graphic">
      <div class="container">
        <p>平面設計</p>
        <h2 class="fs-1 fw-bold pb-3 pb-md-4">GRAPHIC DESIGN</h2>
      </div>
    </section>
    <section class="categorySelecter position-sticky mb-0">
      <div class="container">
        <ul class="d-none d-md-flex flex-wrap justify-content-around justify-content-md-start">
          <li v-for="item in categoryList" :key="item.id">
            <a @click.prevent="filterCategory(item)" href="#" class="btn-tag" :class="{ active: category === item.label }">{{ item.label }}</a>
          </li>
        </ul>
        <select @change="selectCategory()" v-model="category" id="categorySelect" class="form-select d-md-none" aria-label="categorySelect">
          <option v-for="item in categoryList" :key="item.id" :value="item.label">{{ item.label }}</option>
        </select>
      </div>
    </section>
    <section class="design-item mb-0">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 col-12">
            <div class="row">
              <div class="col-lg-4 col-md-6 pb-4 pb-lg-5" v-for="item in filterData" :key="item.id" data-aos="fade-up" data-aos-duration="800">
                <a :href="item.path">
                  <div class="product-img-transform">
                    <img :src="item.imgTopUrl" :alt="item.alt" />
                  </div>
                </a>
                <h3 class="pt-2 pt-mb-3">{{ item.chTitle }}</h3>
                <p class="text-secondary fs-7 pt-2">{{ item.enTitle }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      category: "all",
      categoryList: [
        {
          id: 1,
          label: "all",
        },
        {
          id: 2,
          label: "國片",
        },
        {
          id: 3,
          label: "日本電影",
        },
        {
          id: 4,
          label: "歐美電影",
        },
      ],
      graphicData: [],
      filterData: [],
    };
  },
  methods: {
    getData() {
      this.axios({
        method: "get",
        url: "https://raw.githubusercontent.com/Rosette-xii/vue-mysite/main/src/assets/static/data.json",
      })
        .then((res) => {
          this.graphicData = res.data.graphicData.reverse();
          this.filterData = this.graphicData;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    filterCategory(item) {
      this.category = item.label;
      switch (this.category) {
        case "國片":
          this.filterData = this.graphicData.filter((item) => item.category === "國片");
          break;
        case "日本電影":
          this.filterData = this.graphicData.filter((item) => item.category === "日本電影");
          break;
        case "歐美電影":
          this.filterData = this.graphicData.filter((item) => item.category === "歐美電影");
          break;
        default:
          this.filterData = this.graphicData;
          break;
      }
    },
    selectCategory() {
      switch (this.category) {
        case "國片":
          this.filterData = this.graphicData.filter((item) => item.category === "國片");
          break;
        case "日本電影":
          this.filterData = this.graphicData.filter((item) => item.category === "日本電影");
          break;
        case "歐美電影":
          this.filterData = this.graphicData.filter((item) => item.category === "歐美電影");
          break;
        default:
          this.filterData = this.graphicData;
          break;
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>