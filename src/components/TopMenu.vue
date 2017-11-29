<template>
<div class="container">
  <el-tabs type="border-card">
    <el-tab-pane v-for="item in list" :key="item.id" :label="item.label">
      <Editor></Editor>
    </el-tab-pane>
  </el-tabs>
</div>
</template>

<script>
import Editor from './Editor'

export default {
  name: 'TopMenu',
  computed: {
    list() {
      return this.$store.state.menu.menus
    }
  },
  created() {
    this.$store.dispatch('GET_MEMUS')
  },
  compontents: {
    Editor
  }
}
</script>


<style lang="css">
.container{
  display: flex;
}
.demo-flat-button {
  margin: 12px;
}
</style>