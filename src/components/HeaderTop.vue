<template>
  <div class="HeaderTop">
    <div class="left">
      <img alt class="img" src="@/assets/logo.png" />
      <router-link class="left_title" to="/introduce">Peak UI</router-link>
    </div>
    <div class="right">
      <div class="search_container">
        <span class="iconfont iconfont_search">&#xe632;</span>
        <input @input="handleSearch($event)" class="right_search" placeholder="请输入组件名" type="text" />
      </div>
      <div class="right_title">
        <router-link class="green_title" to="/introduce">
          <span>主页</span>
          <div class="green_bottom"></div>
        </router-link>
        <router-link class="green_title" to="/component">
          <span>组件</span>
          <div class="green_bottom"></div>
        </router-link>
        <router-link class="green_title" to="/theme">
          <span>主题</span>
          <div class="green_bottom"></div>
        </router-link>
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
      resultRoute: ['home'],
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
      if (e.target.value === '主页') {
        this.$router.push('/home')
        e.target.value = ''
      }
      if (e.target.value === '组件') {
        this.$router.push('/component')
        e.target.value = ''
      }
      if (e.target.value === '主题') {
        this.$router.push('/theme')
        e.target.value = ''
      }
    }
  },
  created () {
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
    console.log(this.resultRoute);


  },
  computed: {
  }
}
</script>
<style lang="scss" scoped>
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
          font-weight: 600;
          margin-right: 16px;
          font-size: 14px ;
          position: relative;
          .green_bottom {
            width: 28px;
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
