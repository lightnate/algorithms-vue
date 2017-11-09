<template>
  <div class="section">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><router-link to="/">主页</router-link></li>
        <li class="is-active"><a href="#" aria-current="page">选择排序</a></li>
      </ul>
    </nav>
    <div class="content">
      <h4 class="title is-4">{{sortName}}</h4>
	    <p>{{sortDesc}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
	props: {
		sortName: String,
		sortDesc: String
	},
  data () {
    return {
      
    }
  }
}

</script>

<style scoped>

</style>
