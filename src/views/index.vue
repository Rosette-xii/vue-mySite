<template>
  <div id="index">
    <section class="banner">
      <div class="container">
        <div id="banner" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item" v-for="(item, index) in bannerData" :key="item.id" :class="{ active: index === 0 }">
              <div class="carousel-img"><img :src="item.imgUrl" :alt="item.alt" /></div>
            </div>
          </div>
        </div>
        <p class="py-2">Welcome! Please scroll down to see more.</p>
      </div>
    </section>
    <section class="about">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 col-12">
            <h2 class="fw-bold pb-3 lh-sm">About<br />me</h2>
            <p class="name fw-bold pb-lg-0 pb-3">唐珮芳 Louise Tang</p>
            <div class="row flex-row-reverse align-items-end" data-aos="fade-up" data-aos-duration="800">
              <div class="col-lg-5 col-12">
                <img src="../assets/images/me.jpg" alt="my photo" />
              </div>
              <div class="col-lg-7 col-12 pe-lg-5 d-flex flex-column">
                <p class="lh-lg py-lg-0 py-3">
                  具有九年設計經驗，<br />
                  曾經接觸過平面設計與授權商品設計，<br />
                  目前正在學習前端工程技術，<br />
                  希望能將自己的設計背景結合前端知識，<br />
                  拓展未來的設計領域。
                </p>
                <div class="pt-lg-3 pt-2 align-self-end">
                  <a href="/about" class="view-more">view more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="graphic-design">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 col-12">
            <div class="subtitle">平面設計</div>
            <h2 class="fs-1 fw-bold pb-3 pb-md-5">Graphic Design</h2>
            <div class="row">
              <div class="col-md-6 col-12 pb-5" v-for="item in graphicData" :key="item.id" data-aos="fade-up" data-aos-duration="800">
                <a :href="item.path">
                  <div class="product-img">
                    <img :src="item.imgIndexUrl" :alt="item.alt" />
                  </div>
                </a>
                <h3 class="pt-2 pt-mb-3">{{ item.chTitle }}</h3>
                <p class="text-secondary fs-7 pt-2">{{ item.enTitle }}</p>
              </div>
              <div class="col text-end pt-2 pt-mb-5">
                <a class="view-more" href="./graphic-design.html">view more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="product-design">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 col-12">
            <div class="subtitle">產品設計</div>
            <h2 class="fs-1 fw-bold pb-3 pb-md-5">Product Design</h2>
            <div class="row">
              <div class="col-lg-4 col-md-6 col-12 pb-4 pb-lg-5" v-for="item in productData" :key="item.id" data-aos="fade-up" data-aos-duration="800">
                <div :id="item.name" data-bs-interval="false" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img :src="item.img01Url" class="d-block w-100" :alt="item.alt" />
                    </div>
                    <div v-if="item.img02Url" class="carousel-item">
                      <img :src="item.img02Url" class="d-block w-100" :alt="item.alt" />
                    </div>
                    <div v-if="item.img03Url" class="carousel-item">
                      <img :src="item.img03Url" class="d-block w-100" :alt="item.alt" />
                    </div>
                    <div v-if="item.img04Url" class="carousel-item">
                      <img :src="item.img04Url" class="d-block w-100" :alt="item.alt" />
                    </div>
                  </div>
                  <button v-if="item.img02Url" class="carousel-control-prev" type="button" :data-bs-target="`#${item.name}`" data-bs-slide="prev">
                    <span class="carousel-arrow" aria-hidden="true"><i class="bi bi-chevron-left"></i></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button v-if="item.img02Url" class="carousel-control-next" type="button" :data-bs-target="`#${item.name}`" data-bs-slide="next">
                    <span class="carousel-arrow" aria-hidden="true"><i class="bi bi-chevron-right"></i></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
                <h3 class="pt-2 pt-mb-3">{{ item.chTitle }}</h3>
                <p class="text-secondary fs-7 py-2">{{ item.enTitle }}</p>
                <span class="badge">{{ item.category }}</span>
              </div>
              <div class="col text-end pt-2 pt-mb-5">
                <a class="view-more" href="./product-design">view more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "App",
  data() {
    return {
      bannerData: [
        {
          id: 1,
          imgUrl: require("../assets/images/banner-01.jpg"),
          alt: "banner01",
          isActive: true,
        },
        {
          id: 2,
          imgUrl: require("../assets/images/banner-02.jpg"),
          alt: "banner02",
          isActive: false,
        },
        {
          id: 3,
          imgUrl: require("../assets/images/banner-03.jpg"),
          alt: "banner03",
          isActive: false,
        },
      ],
      graphicData: [],
      productData: [],
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
          this.graphicData = this.graphicData.filter((i) => i.isNew);
          this.productData = res.data.productData;
          this.productData = this.productData.filter((i) => i.isNew);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
