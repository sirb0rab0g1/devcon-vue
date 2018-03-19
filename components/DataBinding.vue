<template>
  <v-container>
    <code style="width:100%;">
    Native JS
    .html
    {{ nativeJs }}

    .js
    document.getElementById("item").innerHTML = "Hello World";  
    </code>

    <h1> vs </h1>

    <code style="width:100%;"> 
    Vue JS
    .html
    {{ vuejs }}  

    .js
    item: 'Hello World'
    </code>
    <br><br>
    <v-divider></v-divider>
    <h1> Example</h1>
    <v-text-field
      label="Type"
      v-model="name"
    ></v-text-field>

    <strong>Interpolations</strong> <br>
    {{ item }} <br> 

    {{ item }} {{ item }}

    <strong>Using Javascript Expressions</strong> <br>

    {{ (item * 10) + 200 }} <small>(the input item must be a number)</small><br>

    {{ item === 'true' ? true : false }} <small>(boolean statement)</small><br>

    <v-text-field
      v-model="item"
      :disabled="true"
    ></v-text-field>

  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        item: null,
        nativeJs: '<p id="item"></p>',
        vuejs: '{{ item }}',
        name: 'kent'
      }
    }
  }
</script>
