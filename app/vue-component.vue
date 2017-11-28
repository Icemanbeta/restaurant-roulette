<template>
  <label>A {{val}} component.</label>
</template>

<script>
export default {
  data: () => {
    return {
      val: 'Vue.js'
    }
  }
}
</script>

<style lang="scss" scoped>
	$red: red;

	label {
		color: $red;
	}
</style>
