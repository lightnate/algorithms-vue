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
import ShellAlgoVisualizer from './ShellAlgoVisualizer.js'
export default {
  name: 'ShellSort',
  data () {
    return {
			sortName: '希尔排序',
			sortDesc: '希尔排序是插入排序的一种，希尔排序按照一定的增量将序列分为若干组，对每一组使用插入排序；然后减少增量，继续将序列分为若干组进行插入排序；最后增量为1时，整个序列是一组，则排序完成。'
    }
  },
  mounted() {
		let canvas = document.getElementById('canvas'),
        g2d = canvas.getContext('2d'),
        count = 100

        canvas.width = canvas.clientWidth,
        canvas.height = canvas.clientHeight
    new ShellAlgoVisualizer(g2d, canvas.width, canvas.height, count)
  },
  components: {
      PageHeader
  }
}
</script>

<style scoped>

</style>
