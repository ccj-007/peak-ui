<template>
  <div class="Input">
    <div class="item_container">
      <div class="item_title">{{$route.meta.title}}</div>
      <div class="item_main">用于表单验证</div>
      <div class="item_model">用户名</div>
      <p-form type="username"></p-form>
      <!-- 禁用 -->
      <div class="item_model">密码</div>
      <p-form type="password"></p-form>
      <div class="item_code" v-highlight v-html="value2"></div>
      <tranTo></tranTo>
    </div>
  </div>
</template>
<script>
import tranTo from '@/components/component/tranTo'
import marked from 'marked'
import pForm from '@/components/component/package/pForm'
export default {
  name: 'Input',
  props: {},
  components: { tranTo, pForm },
  data () {
    return {
      value2: `

      `
    }
  },
  methods: {
  },
  created () {
  },
  mounted () {
    this.value2 = marked(this.value2)
  },
  computed: {
  },
}
</script>
<style lang="scss" scoped>
 @import url('~@/assets/styles/page.css');
 .item_model {
   margin: 10px 0 10px 0;
 }
</style>
