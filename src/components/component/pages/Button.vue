<template>
  <div class="Button">
    <div class="item_container">
      <div class="item_title">按钮</div>
      <div class="item_main">按钮的 type 分别为 default、primary、info、success、warning 和 danger</div>
      <!-- 默认图标 -->
      <p-button type="default">默认</p-button>
      <p-button type="primary">通用</p-button>
      <p-button type="info">信息</p-button>
      <p-button type="success">成功</p-button>
      <p-button type="warning">警告</p-button>
      <p-button class="danger">危险</p-button>
      <br />
      <br />
      <!-- 朴素图标 -->
      <p-button plain type="default">默认</p-button>
      <p-button plain type="primary">通用</p-button>
      <p-button plain type="info">信息</p-button>
      <p-button plain type="success">成功</p-button>
      <p-button plain type="warning">警告</p-button>
      <p-button class="danger" plain>危险</p-button>
      <br />
      <br />
      <!-- 图标按钮 -->
      <p-button icon="icon-zuojiantou
" plain type="primary">箭头向左</p-button>
      <p-button icon="icon-youjiantou
" plain type="info">箭头向右</p-button>
      <p-button icon="icon-weixin
" plain type="success">微信</p-button>
      <p-button icon="icon-sousuo
" plain type="warning">搜索</p-button>
      <p-button class="danger" icon="icon-dianhua
" plain>电话</p-button>
      <p-button icon="icon-zuojiantou
" plain type="primary"></p-button>
      <p-button icon="icon-youjiantou
" plain type="info"></p-button>
      <p-button icon="icon-weixin
" plain type="success"></p-button>
      <p-button icon="icon-sousuo
" plain type="warning"></p-button>
      <p-button class="danger" icon="icon-dianhua
" plain>电话</p-button>
      <br />
      <br />
      <!-- 大小图标 -->
      <p-button size="mini" type="primary">小图标</p-button>
      <p-button size="medium" type="info">中等图标</p-button>
      <p-button size="large" type="success">大型图标</p-button>
      <!-- markdown -->
      <div class="item_code" v-highlight v-html="value"></div>
    </div>
    <tranTo>
      <router-link slot="left" to="/install">安装</router-link>
      <router-link slot="right" to="/input">Input</router-link>
    </tranTo>
  </div>
</template>
<script>
import tranTo from '@/components/component/tranTo'
import marked from 'marked'

export default {
  name: 'Button',
  props: {
  },
  components: {
    tranTo,
  },
  data () {
    return {
      value: ` 
      // 默认样式
      <p-button type="default">默认</p-button>
      <p-button type="primary">通用</p-button>
      <p-button type="info">信息</p-button>
      <p-button type="success">成功</p-button>
      <p-button type="warning">警告</p-button>
      <p-button type="danger">危险</p-button>
      // 椭圆样式
      <p-button type="default" plain>默认</p-button>
      <p-button type="primary" plain>通用</p-button>
      <p-button type="info" plain>信息</p-button>
      <p-button type="success" plain>成功</p-button>
      <p-button type="warning" plain>警告</p-button>
      <p-button type="danger" plain>危险</p-button>
      // 图标样式
      <p-button icon="icon-zuojiantou" plain type="primary">箭头向左</p-button>
      <p-button icon="icon-youjiantou" plain type="info">箭头向右</p-button>
      <p-button icon="icon-weixin" plain type="success">微信</p-button>
      <p-button icon="icon-sousuo" plain type="warning">搜索</p-button>
      <p-button class="danger" icon="icon-dianhua" plain>电话</p-button>
       // 图标大小
      <p-button type="primary" size='mini'>小图标</p-button>
      <p-button type="info" size='medium'>中等图标</p-button>
      <p-button type="success" size='large'>大型图标</p-button>
    `,
    }
  },
  methods: {
  },
  created () {
  },
  mounted () {
    this.value = marked(this.value)
  },
  computed: {
  },
}
</script>
<style lang="scss" scoped>
 @import url('~@/assets/styles/page.css');
</style>
