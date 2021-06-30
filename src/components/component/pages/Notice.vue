<template>
  <div class="Notice">
    <div class="item_container">
      <div class="item_title">{{$route.meta.title}}</div>
      <div class="item_main">填写提示内容，点击按钮弹出提示</div>
      <p-input v-model="value"></p-input>
      <br />
      <p-button @click="handleNotice" type="primary">点击触发提示</p-button>
      <div class="code">sdad</div>
      <div class="item_code" v-highlight v-html="value2"></div>
      <p-notice :show="show" :value="value"></p-notice>
      <tranTo></tranTo>
    </div>
  </div>
</template>
<script>
import tranTo from '@/components/component/tranTo'
import marked from 'marked'

export default {
  name: 'Notice',
  props: {},
  components: { tranTo },
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
      `,
      show: false
    }
  },
  methods: {
    handleNotice () {
      this.show = !this.show
    }
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
