<template>
  <div class="Input">
    <input
      :class="[disabled ? 'peak_allowed ' : 'peak_input',{'peak_disabled':disabled}]"
      :value="disabled ? '禁止输入' : value"
      @blur="handleBlur"
      @focus="handleFocus"
      @input="handleInput"
      style="{color:color}"
      type="text"
    />
  </div>
</template>
<script>
export default {
  name: 'Input',
  props: {
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  data () {
    return {
    }
  },
  methods: {
    handleInput (e) {
      if (this.disabled === true) {
        e.target.value = '禁止输入'
      }
      this.$emit('input', e.target.value)
    },
    handleFocus (e) {
      e.target.value = this.disabled ? '禁止输入' : ''
    },
    handleBlur (e) {
      e.target.value = this.disabled ? '禁止输入' : this.value
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
   color: rgb(199, 199, 199);
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
</style>
