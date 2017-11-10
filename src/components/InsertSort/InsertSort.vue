<template>
  <div class="container box">
    <PageHeader :sortName="sortName" :sortDesc="sortDesc"></PageHeader>
    <canvas id="canvas">
        你的浏览器不支持canvas，建议升级<a href="http://www.google.cn/chrome/browser/desktop/index.html">Chrome浏览器</a>
    </canvas>
  </div>
</template>

<script>
import PageHeader from '../PageHeader.vue'
import InsertAlgoVisualizer from './InsertAlgoVisualizer.js'
export default {
  name: 'InsertSort',
  data () {
    return {
			sortName: '插入排序',
			sortDesc: '插入排序的方法是每一次将一个待排序的元素插入到已经排序好的的序列中。在数字排序中，假设第一个元素已经排序好，从第二个元素开始，依次将元素按照排列规则插入到已排序序列中去。'
    }
  },
  mounted() {
		let canvas = document.getElementById('canvas'),
        g2d = canvas.getContext('2d'),
        count = 100

        canvas.width = canvas.clientWidth,
        canvas.height = canvas.clientHeight
    new InsertAlgoVisualizer(g2d, canvas.width, canvas.height, count)
  },
  components: {
      PageHeader
  }
}
</script>

<style scoped>

</style>
