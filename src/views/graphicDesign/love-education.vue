<template>
  <section class="description">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10 col-12">
          <h2 class="lh-sm fs-3 pb-3">相愛相親</h2>
          <p class="text-secondary lh-sm fs-7 pb-4">Love Education</p>
          <!-- 產品敘述 -->
          <ul class="lh-lg fs-7 mb-5">
            <li class="d-block d-md-flex pb-2">
              <h3>版本</h3>
              <p>DVD</p>
            </li>
            <li class="d-block d-md-flex pb-2">
              <h3>內容物</h3>
              <p>外紙套(象牙卡+Logo燙金)、digipack(銅版紙+霧P、裱灰紙板+局部燙金)、書腰(鑽卡反印)、明信片(麗綺紙)</p>
            </li>
            <li class="d-block d-md-flex pb-2">
              <h3>設計概要</h3>
              <p>
                本片的故事圍繞在書信上，因此將包裝設計成信的樣子，打開信封，而電影就是一封信，我們將一起閱讀這篇故事。<br />
                外紙套選用象牙卡搭配紙張紋路的印刷，讓信封帶有復古的味道；digipack大量留白，外側只印上Logo和花朵的燙金，翻開則是故事中三位主要女性的照片，再配上每個人的一句對白，讓整個畫面聚焦在她們身上；信封卡榫的部分作成櫻花花瓣，讓包裝上再多一些巧思與趣味。<br />
                明信片選擇具有水彩紙紋路的麗綺紙，搭配四幅四季插畫的水彩畫風。
              </p>
            </li>
          </ul>
          <!-- 產品圖 -->
          <!-- <ul>
            <li class="mb-5" v-for="item in data">
              <img :src="item.img" :alt="item.alt" />
              <p class="text-secondary fs-7 pt-2" v-if="item.description">{{ item.description }}</p>
            </li>
          </ul> -->
        </div>
        <div class="col-md-10 col-12 text-end pt-2 pt-mb-5">
          <a class="view-more" href="./graphic-design.html">back</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      graphicData: [],
    };
  },
  methods: {
    getData() {
      this.axios({
        method: "get",
        url: "https://raw.githubusercontent.com/Rosette-xii/vue-mysite/main/src/assets/static/data.json",
      })
        .then((res) => {
          this.graphicData = res.data.graphicData[0];
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