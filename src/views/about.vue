<template>
  <div id="about">
    <section class="main-title mb-5">
      <div class="container">
        <p>關於我</p>
        <h2 class="fs-1 fw-bold pb-3 pb-md-4">ABOUT ME</h2>
      </div>
    </section>
    <section class="profile">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 col-12">
            <div class="row flex-row-reverse align-items-end main-info" data-aos="fade-up" data-aos-duration="800">
              <div class="col-lg-5 col-12">
                <img src="../assets/images/me.jpg" alt="my photo" />
              </div>
              <div class="col-lg-7 col-12 pe-lg-5 d-flex flex-column">
                <p class="fs-6 fw-bold lh-lg py-2 py-lg-3">唐珮芳 Louise Tang</p>
                <ul class="fs-7 lh-lg fw-normal">
                  <li v-for="(item, index) in myData.resume" :key="'resume' + index">{{ item }}</li>
                </ul>
              </div>
            </div>
            <div class="row" data-aos="fade-up" data-aos-duration="800">
              <div class="col-12 col-md-4 col-lg-2">
                <h3 class="pe-3 mb-2 lh-lg">工作經驗</h3>
              </div>
              <div class="col-12 col-md-8 col-lg-4 mb-4 mb-lg-5">
                <ul class="fs-7 lh-lg fw-normal">
                  <li v-for="(item, index) in myData.works" :key="'work' + index" class="pb-2">
                    {{ item.title }}<br />{{ item.duration }}<span class="badge ms-1">{{ item.durationCol }}</span>
                  </li>
                </ul>
              </div>
              <div class="col-12 col-md-4 col-lg-2">
                <h3 class="pe-3 mb-2 lh-lg">學歷</h3>
              </div>
              <div class="col-12 col-md-8 col-lg-4 mb-4 mb-lg-5">
                <ul class="fs-7 lh-lg fw-normal">
                  <li v-for="(item, index) in myData.education" :key="'education' + index" class="pb-2">{{ item.school }}<br />{{ item.duration }}</li>
                </ul>
              </div>
              <div class="col-12 col-md-4 col-lg-2">
                <h3 class="pe-3 mb-2 lh-lg">工作技能</h3>
              </div>
              <div class="col-12 col-md-8 col-lg-4 mb-4 mb-lg-5">
                <ul class="fs-7 lh-lg fw-normal">
                  <li v-for="(item, index) in myData.skills.web" :key="'web' + index" :class="{ 'pb-2': index === webLastEl }">{{ item }}</li>
                  <li v-for="(item, index) in myData.skills.graphic" :key="'graphic' + index">{{ item }}</li>
                </ul>
              </div>
              <div class="col-12 col-lg-2">
                <h3 class="pe-3 mb-2 lh-lg">語言能力</h3>
              </div>
              <div class="col-12 col-lg-4 mb-4 mb-lg-5">
                <ul class="fs-7 lh-lg fw-normal">
                  <li v-for="(item, index) in myData.language" :key="'language' + index">{{ item }}</li>
                </ul>
              </div>
              <div class="col-12 col-lg-2">
                <h3 class="pe-3 mb-2 lh-lg">興趣&amp;喜好</h3>
              </div>
              <div class="col-12 col-lg-10 mb-4 mb-lg-5">
                <ul class="fs-7 lh-lg fw-normal hobby d-flex flex-wrap">
                  <li v-for="(item, index) in myData.hobby" :key="'hobby' + index">{{ item }}</li>
                </ul>
              </div>
              <div class="col-12 col-lg-2">
                <h3 class="pe-3 mb-2 lh-lg">自傳</h3>
              </div>
              <div class="col-12 col-lg-10 col-xl-8 lh-lg fw-normal fs-7 text-align-justify">
                <ul class="autobiography">
                  <li v-for="(item, index) in myData.autobiography" :key="'autobiography' + index" class="pb-3">
                    <h4>{{ item.title }}</h4>
                    <p class="pb-2">{{ item.content }}</p>
                    <p class="pb-2">{{ item.content2 }}</p>
                  </li>
                </ul>
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
      myData: {
        resume: ["1990.07 出生", "新北市土城人", "國立台北教育大學 藝術與造型設計學系 畢業", "得利影視股份有限公司 創意部專員 在職中", "9年設計工作經驗"],
        works: [
          {
            title: "得利影視股份有限公司 創意部專員",
            duration: "2017.07~",
            durationCol: "4年",
          },
          {
            title: "吉億有限公司 平面設計師",
            duration: "2012.11~2017.03",
            durationCol: "4年5個月",
          },
          {
            title: "超硬股份有限公司 設計工讀生",
            duration: "2011.09~2012.02",
            durationCol: "6個月",
          },
          {
            title: "摩斯漢堡 餐飲服務生",
            duration: "2010.07~2011.08",
            durationCol: "1年2個月",
          },
        ],
        education: [
          {
            school: "國立台北教育大學",
            duration: "2008.09-2012.06",
          },
          {
            school: "台北市立華江高中",
            duration: "2005.09~2008.06",
          },
          {
            school: "新北市立自強國中",
            duration: "2002.09~2005.06",
          },
          {
            school: "新北市土城區安和國小",
            duration: "1996.09~2002.06",
          },
        ],
        skills: {
          web: ["HTML5", "CSS3", "SCSS", "RWD", "JavaScript", "API串接", "Vue"],
          graphic: ["Photoshop", "Illustrator", "InDesign", "Corel Painter"],
        },
        language: ["中文", "英文", "日文"],
        hobby: ["電影", "動漫", "日劇", "音樂", "遊戲", "推理小說", "運動", "旅行", "攝影", "咖啡", "美食", "柴犬", "貓"],
        autobiography: [
          {
            title: "【自我介紹】",
            content: "出生於新北市土城區，生長在一個五人家庭。身為老么的我，受到家中長輩的影響甚大，他們負責、熱心、細心的處事態度，培養出我做事認真、守時守信與熱心助人的個性，是個家人朋友和同事都稱讚的好幫手。",
          },
          {
            title: "【大學期間】",
            content: "大學就讀於國立台北教育大學藝術與造形設計學系設計組，除了在課程上學習到手繪草圖技巧、模型製作與建立數位3D模型等專業知識。透過參加比賽、策劃展覽也讓我學習到每個專案的設計流程、理念傳達、問題解決，還有與組員及廠商的溝通技巧。",
          },
          {
            title: "【工作經歷】",
            content: "畢業後第一份工作，在「吉億有限公司」擔任動畫周邊商品設計師，在這裡接觸到許多產品種類和材質運用以及授權商品的製作與送審流程。在進公司約半年後，因為細心穩重的工作態度與表現，升為主任一職，因此除了設計的工作以外，同時也負責公司人事行政事務的管理、下屬的職務分配、會議主持、商品方向開發、市場調查、與出國考察。",
            content2: "目前任職於「得利影視股份有限公司」，主要負責獨立電影包裝設計，在此學習到平面印刷知識、包裝紙材的選擇和一些包裝結構的發想。除了電影相關設計之外，也協助集團企業蔦屋書店製作活動文宣或是攝影的部分。",
          },
          {
            title: "【專業技能】",
            content: "在設計產業工作9年後，希望可以再充實自己的專業技能，剛好身邊有朋友擔任前端工程師，接觸之後也產生興趣，便一頭栽入學習。",
            content2:
              "從大學主修產品設計、到職場做平面設計、以及現在學習前端技術，一直以來學習的都是如何「解決問題」，我認為追求的目標都是一樣的。而同時擁有設計經驗與前端知識的我，可以理解UI設計師對於畫面美感的要求，也同時可以知道轉換成網頁後可能會遇到的問題，在美感與邏輯之間取得平衡，比起一般的前端工程師更具備優勢。接下來的目標除了把目前學的技術學得更扎實，也希望能進一步接觸新技術，除了提升工作效率，也讓自己可以跟上前端設計的技術主流。",
          },
        ],
      },
    };
  },
  computed: {
    webLastEl() {
      return this.myData.skills.web.length - 1;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>