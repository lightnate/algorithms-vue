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
import SelectAlgoVisualizer from './SelectAlgoVisualizer.js'
export default {
  name: 'SelectSort',
  data () {
    return {
			sortName: '选择排序',
			sortDesc: '选择排序（Selection sort）是一种简单直观的排序算法。它的工作原理是每一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，直到全部待排序的数据元素排完.'
    }
  },
  mounted() {
		let canvas = document.getElementById('canvas'),
        g2d = canvas.getContext('2d'),
        count = 100

        canvas.width = canvas.clientWidth,
        canvas.height = canvas.clientHeight
    new SelectAlgoVisualizer(g2d, canvas.width, canvas.height, count)
  },
  components: {
      PageHeader
  }
}
</script>

<style scoped>

</style>
