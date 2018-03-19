<template>
  <v-container>
    <code style="width:100%;">
    Native JS
    .html
    {{ nativeJs }}  

    .js
    function hideDiv () {
      if(div.className === 'response') {
        div.style.display = 'none';
      }
    }
    </code>

    <h1> vs </h1>

    <code style="width:100%;">
    Vue JS
    .html
    {{ vuejs }}  

    .js
    hideDiv: function () {
      this.hide = true
    }
    </code>
    <br><br>
    <v-divider></v-divider>
    <h1> Example </h1>
    <v-text-field
      label="Type"
      v-model="input"
    ></v-text-field>

    <v-flex v-show="input === 'btn'">
      <v-btn color="success">Success</v-btn>
      <v-btn color="error">Error</v-btn>
      <v-btn color="warning">Warning</v-btn>
      <v-btn color="info">Info</v-btn>
    </v-flex>

    <v-flex v-if="input === '#'">
      <ul>
        <li v-for="(item, index) in 5" :key="index">
          {{ index }}
        </li>
      </ul>
    </v-flex>

    <span v-if="input === 'mars'">
      {{ name }}
    </span>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        input: null,
        nativeJs: '<div id="respond-1" class="response" style="display:none;">show</div>',
        vuejs: '<div v-if="hide === true"></div>',
        name: 'mars'
      }
    }
  }
</script>