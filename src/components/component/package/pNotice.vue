<template>
  <div class="Notice">
    <div class="item_container">
      <div class="item_title">{{$route.meta.title}}</div>
      <div class="item_main">输入一下命令可以安装 peak-ui</div>
      <div class="code">sdad</div>
    </div>
    <tranTo>
      <router-link slot="left" to="/form">Form</router-link>
    </tranTo>
  </div>
</template>
<script>
import tranTo from '@/components/component/tranTo'
export default {
  name: 'Notice',
  props: {},
  components: { tranTo },
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
  },
}
</script>
<style lang="scss" scoped>
 @import url('~@/assets/styles/page.css');
</style>
