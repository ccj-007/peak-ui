<template>
  <div class="Input">
    <div class="item_container">
      <div class="item_title">{{$route.meta.title}}</div>
      <div class="item_main">简单的输入框</div>
      <p-input v-model="value"></p-input>
      <div class="item_model">输入的值是 : {{value}}</div>
      <!-- 禁用 -->
      <p-input disabled></p-input>
      <div class="item_code" v-highlight v-html="value2"></div>
      <tranTo></tranTo>
    </div>
  </div>
</template>
<script>
import tranTo from '@/components/component/tranTo'
import marked from 'marked'
import pInput from '@/components/component/package/pInput'
export default {
  name: 'Input',
  props: {},
  components: { tranTo, pInput },
  data () {
    return {
      value: '请输入你的内容',
      value2: `
      <template>
        <div>
           <p-input :value.sync="value"></p-input>
           <div class="item_model">{{value}}</div>
            // 禁用状态
           <p-input  disabled></p-input>
        </div>
      </template>
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
   margin: 10px 0 30px 0;
 }
</style>
