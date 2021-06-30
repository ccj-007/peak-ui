<template>
  <div class="Input">
    <input
      :class="[disabled ? 'peak_allowed ' : 'peak_input',{'peak_disabled':disabled}]"
      @input="handleInput"
      style="{color:color}"
      type="text"
    />
    <div class="peak_verify" v-if="showWarning">{{type === 'username' ? '用户名不能为空' : '密码不能为空'}}</div>
  </div>
</template>
<script>
export default {
  name: 'Input',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
    },
  },
  components: {},
  data () {
    return {
      showWarning: false
    }
  },
  methods: {
    handleInput (e) {
      this.showWarning = e.target.value !== '' ? false : true
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
 .peak_input {
   width: 250px;
   height: 40px;
   border: 1px solid rgb(141, 197, 149);
   font-size: 16px;
   outline:none;
   box-sizing: border-box;
 }
  .peak_input:focus {
    border: 1px solid  rgb(0, 184, 61);
    box-shadow: -1px 2px rgb(0, 184, 61);
    width: 300px;
    transition:all .3s linear ;
  }
  .peak_input:hover {
    border-color: rgb(0, 184, 61);
  }
  .peak_disabled {
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor:not-allowed;

  }
  .peak_allowed {
  width: 250px;
   height: 40px;
   border: 1px solid rgb(141, 197, 149);
   font-size: 16px;
   outline:none;
   box-sizing: border-box;
  }
  .peak_verify {
    margin-top: 10px;
    color: red;
  }
</style>
