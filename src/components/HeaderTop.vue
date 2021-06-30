<template>
  <div class="HeaderTop-container" id="borderTop">
    <div class="HeaderTop">
      <div class="left">
        <img alt class="img" src="@/assets/logo.png" />
        <router-link class="left_title" to="/introduce">Peak UI</router-link>
      </div>
      <div class="right">
        <div class="search_container">
          <span class="iconfont iconfont_search">&#xe632;</span>
          <input
            @input="handleSearch($event)"
            class="right_search"
            placeholder="请输入组件名"
            type="text"
          />
        </div>
        <div class="right_title">
          <router-link class="green_title" to="/introduce">
            <span class="toggle-title">主页</span>
            <div class="green_bottom"></div>
          </router-link>
          <router-link class="green_title" to="/library">
            <span class="toggle-title">组件</span>
            <div class="green_bottom"></div>
          </router-link>
          <router-link class="green_title" to="/theme">
            <span class="toggle-title">主题</span>
            <div class="green_bottom"></div>
          </router-link>
          <a class="green_title" href="javascript:;">
            <span @click="toggleVisible" class="toggle toggle-title">{{theme}}</span>
            <div class="green_bottom"></div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderTop',
  props: {},
  components: {},
  data () {
    return {
      resultRoute: [],
      titleRoute: [],
      darkShow: false,
      list: []
    }
  },
  methods: {
    handleSearch (e) {
      this.resultRoute.forEach((item, index) => {
        if (e.target.value === item) {
          this.$router.push(`/${item}`)
          e.target.value = ''
        }
      })
      this.titleRoute.forEach((item, index) => {
        if (e.target.value === item) {
          this.$router.push(`${this.list[index].path}`)
          e.target.value = ''
        }
      })
    },
    toggleVisible () {
      this.darkShow = !this.darkShow
      //切换背景颜色
      const toggle = document.querySelector('.toggle')
      const body = document.querySelector('body')
      const HeaderTop = document.querySelector('.HeaderTop-container')
      const toggleTitle = document.querySelectorAll('.toggle-title')
      if (this.darkShow) {
        body.style.backgroundColor = '#000'
        HeaderTop.style.backgroundColor = '#000'
        body.style.color = '#fff'
        toggleTitle.forEach(item => {
          item.style.color = '#fff'
        })
      } else {
        body.style.backgroundColor = '#fff'
        HeaderTop.style.backgroundColor = '#fff'
        body.style.color = '#000'
        toggleTitle.forEach(item => {
          item.style.color = '#000'
        })
      }

    }
  },
  created () {
    this.list = this.$router.options.routes[1].children[0].children[0].children
    // 组件名
    let resultList = []
    this.list.forEach((item, index) =>
      resultList.push(item.meta.english)
    )
    this.list.forEach((item, index) =>
      this.titleRoute.push(item.meta.title)
    )
    console.log(this.titleRoute);

    resultList = resultList.slice(2)
    resultList.forEach((item, index) => {
      resultList[index] = item.toLowerCase()
    }
    )
    console.log(resultList);

  },
  mounted () {
    let bottom = document.querySelectorAll('.green_bottom')
    let title = document.querySelectorAll('.green_title')

    title.forEach((item, index) => {
      title[index].addEventListener('mouseover', () => {
        bottom[index].style.display = 'block'
      })
      title[index].addEventListener('mouseout', () => {
        bottom[index].style.display = 'none'
      })
    })
    const arrRoute = this.$router.options.routes
    const childrenRoute = arrRoute[1].children
    const componentRoute = arrRoute[1].children[0].children[0].children
    childrenRoute.forEach((item, index) => {
      item.name = item.name.toLowerCase()
      this.resultRoute.push(item.name)
    })
    componentRoute.forEach((item, index) => {
      item.name = item.name.toLowerCase()
      this.resultRoute.push(item.name)
    })

  },
  updated () {

  },
  computed: {
    theme () {
      return this.darkShow ? '深色' : '浅色'
    }
  }
}
</script>
<style lang="scss" scoped>
.HeaderTop-container {
  position: fixed;
  top: 0;
  left:0 ;
  height: 70px;
  overflow: hidden;
  z-index: 22;
  background: #fff;
  border-bottom: 1px solid #ccc;
  width: 100%;
   box-shadow: 0 2px 6px #ccc;
}
  .HeaderTop {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    height: 70px;
    border-bottom: 1px solid #ccc;
    padding: 0 20px;
    font-size: 30px;
    display: flex;
    font-weight: 600;
    justify-content: space-between;
    align-items: center;
    .left {
       display: flex;
       align-items: center;
      .img {
      width: 50px;
      height: 50px;
    }
    .left_title {
      margin-left: 20px;
      color: rgb(0, 184, 61);
      
    }
    .left_title:hover {
      opacity: .8;
      text-shadow: 0 1px 1px #ccc;
    }
    }
    .right {
        display: flex;
         align-items: center;
         .search_container:hover {
           border: 1px solid rgb(0, 184, 61);
           transition: all .8s linear;
         }
       .search_container{
         width: 270px;
        height: 25px;
        border: 1px solid #ccc;
        border-radius: 15px;
        margin-right: 40px;
        padding: 5px;
         display: flex;
         align-items: center;
         box-shadow: 0 1px 2px #ccc;
        .iconfont_search {
          font-size: 20px;
           margin-left: 5px;
        }
        .right_search {
         width: 220px;
        background:none;
        outline:none;
        border: none;
        margin-left: 5px;
        }
                 }
       .right_title {
            display: flex;
         align-items: center;
        .green_title {
          font-weight: 400;
          margin-right: 16px;
          font-size: 14px ;
          position: relative;
          .toggle {

            
          }
          .green_bottom {
            width: 28px;
            position: absolute;
            top: 15px;
            left: 0;
            height: 1.5px;
            background-color: rgb(0, 184, 61);
            margin-top: 3px;
            display: none;
          }
        }
      }
    }
  }
</style>
