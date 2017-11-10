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
import BubbleAlgoVisualizer from './BubbleAlgoVisualizer.js'
export default {
  name: 'BubbleSort',
  data () {
    return {
			sortName: '冒泡排序',
			sortDesc: '冒泡排序（Bubble sort）是一种简单直观的排序算法。它的工作原理是：在待排序的元素中，从最大或最小的元素作为起点，每个元素依次和相邻的元素进行比较，符合设定的排序条件则交换它们的位置。每一趟排序都会将最大或最小的元素排到一侧。'
    }
  },
  mounted() {
		let canvas = document.getElementById('canvas'),
        g2d = canvas.getContext('2d'),
        count = 100

        canvas.width = canvas.clientWidth,
        canvas.height = canvas.clientHeight
    new BubbleAlgoVisualizer(g2d, canvas.width, canvas.height, count)
  },
  components: {
      PageHeader
  }
}
</script>

<style scoped>

</style>
