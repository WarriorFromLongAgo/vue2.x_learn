<template>
  <quill-editor
    class="editor"
    ref="myTextEditor"
    v-model="content"
    :options="editorOption"
    @change="onEditorChange($event, content, decimalNum)"
  ></quill-editor>
</template>

<script>
import { reactive, toRefs } from '@vue/composition-api'
const toolbar = [
  ['bold', 'italic', 'underline'] // 加粗 斜体 下划线
] // 工具菜单栏配置
export default {
  props: { editorContent: String },
  setup(props, context) {
    const that = context.parent
    const state = reactive({
      decimalNum: 10000, // 字数限制
      content: '', // 内容
      myTextEditor: null,
      editorOption: {
        modules: {
          toolbar
        },
        placeholder: '清输入回答', // 提示
        theme: 'snow', // 主题 snow/bubble
        syntax: true // 语法检测
      }
    })
    // 值发生变化
    const onEditorChange = (e, strValue, decimalNum) => {
      const reg = /<img[^>]*>/gi
      if (reg.test(state.content)) {
        that.$message('无法插入图片,请单独上传')
        state.content = state.content.replace(reg, '')
      }
      e.quill.deleteText(decimalNum, 1, strValue) // 保留 strValue 的 前 decimalNum 位字符，
      that.$emit('content', state.content)
    }
    state.content = props.editorContent
    return {
      ...toRefs(state),
      onEditorChange
    }
  }
}
</script>

<style lang="less" scoped>
.editor {
  /deep/.ql-editor {
    height: 200px;
    color: #666;
    line-height: 2;
    p {
      font-size: 14px;
    }
  }
  /deep/.ql-toolbar.ql-snow {
    border-radius: 10px 10px 0 0;
  }
  /deep/.ql-toolbar.ql-snow + .ql-container.ql-snow {
    border-radius: 0 0 10px 10px;
  }
  /deep/.ql-editor.ql-blank::before {
    color: #ccc;
    font-style: normal;
    font-style: 14px;
  }
  /deep/.ql-snow.ql-toolbar button,
  /deep/.ql-snow .ql-toolbar button {
    margin-right: 18px;
  }
}
</style>
