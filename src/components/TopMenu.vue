<template>
<div class="container">
  <div v-for="item in list" :key="item.id">
    {{ item.label }}
  </div>
  <!-- <el-tabs type="border-card">
    <el-tab-pane v-for="item in list" :key="item.id" label="{{item.label}}">
      {{item.label}}
    </el-tab-pane>
  </el-tabs> -->
</div>
</template>

<script>

export default {
  name: 'TopMenu',
  computed: {
    list() {
      return this.$store.state.menu.menus
    }
  },
  created() {
    this.$store.dispatch('GET_MEMUS')
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