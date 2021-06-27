<template>
  <div class="Introduce">
    <main>
      <div class="main_title">Peak UI</div>
      <div class="main_introduce">UI component library based on Vue.js 2.X</div>
      <div class="main_button">
        <router-link to="/component">开始体验</router-link>
        <a href="https://github.com/">github</a>
      </div>
    </main>
    <footer>
      <div class="footer_container">
        <div class="footer_title">基于Vue2.X</div>
        <div class="footer_article">享受Vue + Webpack 的开发体验，在Markdown中使用Vue组件,同时可以使用Vue来开发自定义主题</div>
      </div>
      <div class="footer_container">
        <div class="footer_title">轻量级UI</div>
        <div class="footer_article">该UI以轻量级为设计目标，同时以简约，视觉冲突为设计理念</div>
      </div>
      <div class="footer_container">
        <div class="footer_title">高复用性</div>
        <div class="footer_article">优良的API接口设计，统一的使用习惯</div>
      </div>
    </footer>
    <div class="end">Peak UI 21.6.26 · Made by CCJ</div>
  </div>
</template>
<script>
export default {
  name: 'Introduce',
  props: {},
  components: {},
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
  },
  mounted () {
  },
  computed: {
  }
}
</script>
<style lang="scss" scoped>
  .Introduce {
    main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
      .main_title {
        font-size: 80px;
        margin-top: 60px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 600;
        color:rgb(0, 184, 61);
        text-shadow: 0 1px 6px #ccc;
      }
      .main_title:hover {
        opacity: 0.5;
        transition: all .5s linear ;
        text-shadow: 0 5px 1px #ccc;
      }
      .main_introduce {
         font-size: 24px;
         color: #ccc;
         margin-top: 30px;
       
      }
      .main_button {
         margin-top: 30px;
         display: flex;
         align-items: center; 
         a {
          width: 100px;
          height: 50px;
          font-size: 16px;
          margin-left: 10px;
           text-align: center;
           line-height:  50px;
           border: none;
           border-radius: 5px;

         }  
        a:nth-child(1) {
           color: #fff;
        background-color: rgb(0, 184, 61);
          }
         a:nth-child(1):hover {
         opacity: .8;
         }
         a:nth-child(2) {
           border: 1px solid #ccc;
           color: #000;
           margin-right: 10px;

         }
         a:nth-child(2):hover {
          color: rgb(0, 184, 61);
          border: 1px solid rgb(0, 184, 61);
         }
      }
    }
    footer {
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      display: flex;
      margin: 0 80px;
      align-items: center;
      justify-content: center;
      margin-top: 80px;
      .footer_container {
        flex: 1;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        padding: 50px;
        height: 120px; 
        .footer_title {
          font-size: 24px;
           color: rgb(0, 184, 61);
        }
        .footer_article {
          line-height: 26px;
          height: 60px;
        }
      }
    }
    .end {
         display: flex;
         justify-content: space-around;
                 color: #aaa;
                 margin-top: 35px;
    }
  }
</style>
