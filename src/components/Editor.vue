<template>
  <div class="Example">
    <div class="e-editor">
      <codemirror 
        :code="code" 
        :options="editorOption" 
        ref="codeEditor"
        @change="codeChange">
      </codemirror> 
       <el-button type="success" @click="runcode()">成功按钮</el-button>
    </div>
    <pre class="e-code">{{ code }}</pre>
    <div>{{result}}</div>
  </div>
</template>

<script>
  import { codemirror } from 'vue-codemirror'
  import { mapState, mapActions } from 'vuex'

  export default {
    components: {
      codemirror
    },
    data () {
      return {
        code: '<div>1</div>',
        editorOption: {
          tabSize: 4,
          styleActiveLine: true,
          line: true,
          mode: 'text/html',
          lineWrapping: true,
          theme: 'base16-dark'
        }
      }
    },
    methods: {
      codeChange(newCode) {
        this.code = newCode
        this.$store.commit('SET_SECRIPT', newCode)
      },
      runcode() {
        this.$store.dispatch({
          type: 'RUN_CODE', 
          code: this.code
        });
      },
      ...mapActions([
          'RUN_CODE'
      ]),
    },
    computed: {
      editor() {
        return this.$refs.codeEditor.editor
      },
      result() {
        return this.$store.state.result;
      }
    },
    mounted() {
      console.log('this is my editor object', this.editor)
    }
  }
</script>


<style lang="css">
  .e-editor {
    display: inline-block;
    width: 500px;
  }
  .e-code {
    width: 800px;
    float: right;
  }
</style>
