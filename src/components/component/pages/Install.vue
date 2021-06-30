<template>
  <div class="Install">
    <div class="item_container">
      <div class="item_title">开发指南</div>
      <div class="item_main">输入以下命令可以安装 peak-ui</div>
      <div class="item_code" v-highlight v-html="value"></div>
      <div class="item_main">全局导入组件库</div>
      <div class="item_code" v-highlight v-html="value2"></div>
    </div>
  </div>
</template>
<script>
import tranTo from '@/components/component/tranTo'
import marked from 'marked'
export default {
  name: 'Install',
  props: {},
  components: {
  },
  data () {
    return {
      value: ` 
      npm  install  peak-ui   --save
    `,
      value2: ` 
      import peakUI from 'peak-ui'
       Vue.use(peakUI)
    `,
    }
  },
  methods: {
  },
  created () {
  },
  mounted () {
    this.value2 = marked(this.value2)
    this.value = marked(this.value)
    this.value2 = marked(this.value2)
  },
  computed: {
  },
}
</script>
<style lang="scss" scoped>
 @import url('~@/assets/styles/page.css');
</style>
