<template>
  <v-container>
    <center>
    	<v-btn color="info" @click="increment()">Increment</v-btn>

		<v-btn color="info" @click="decrement()">Decrement</v-btn>  

	    {{ this.$data }}
    </center>
  </v-container>
</template>

<script>
  import DefaultMixins from '../mixins/index'
  export default {
    mixins: [DefaultMixins]
  }
</script>