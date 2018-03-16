<template lang="jade">
  el-dialog.text-input-v1(ref="dlg", :visible="visible", :title="dlgTitle",
  :show-close="false")
    el-button.self-close(@click="visible=false")
      i.el-icon-close
    el-input(:placeholder="input",
              type="textarea",
              :rows="2",
              v-model="input")
    .handle
      el-button(@click="action(false)") Cancel
      el-button(type="primary" @click="action(true)") Confirm
</template>
<style lang="stylus">
.text-input-v1
  padding-top: 30px
  .el-dialog__header
    background: #eee
    color: #fff
    padding-bottom: 20px
  .handle
    text-align: right
    margin-top: 30px
  .self-close
    position: absolute
    top: 11px
    right: 5px
    border: none
    background: transparent
    &:hover
      color: #887bd7
</style>
<script>
import ElDialog from 'element-ui/lib/dialog'
import ElButton from 'element-ui/lib/button'
import ElInput from 'element-ui/lib/input'
export default {
  name: 'text-input',
  components: {
    ElButton,
    ElDialog,
    ElInput
  },
  data () {
    return {
      input: '',
      visible: false,
      dlgTitle: ''
    }
  },
  methods: {
    action (act) {
      this.onAction(act)
    }
  }
}
</script>
