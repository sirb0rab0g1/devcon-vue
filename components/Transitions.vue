<template>
  <v-container>
    <code style="width:100%;">
    Native JS
    .html
    {{ nativeJs }}

    .js
    document.getElementById("myDIV").style.transition = "all 2s"; 

    .css
    #myDIV {
        border: 1px solid black;
        background-color: lightblue;
        width: 270px;
        height: 200px;
        overflow: auto;
    }

    #myDIV:hover {
        background-color: coral;
        width: 570px;
        height: 500px;
        padding: 100px;
        border-radius: 50px;
    }
    </code>

    <h1> vs </h1>

    <code style="width:100%;"> 
    Vue JS
    .html
    {{ vuejs }}    
    </code>
    <br><br>
    <v-divider></v-divider>
    <h1> Example </h1>
    <div class="text-xs-center">
      <v-menu transition="slide-x-transition">
        <v-btn dark color="primary" slot="activator">Slide X Transition</v-btn>
        <v-list>
          <v-list-tile v-for="n in 5" :key="n" @click="">
            <v-list-tile-title v-text="'Item ' + n"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-menu transition="slide-x-reverse-transition">
        <v-btn dark color="secondary" slot="activator">Slide X Reverse Transition</v-btn>
        <v-list>
          <v-list-tile v-for="n in 5" :key="n" @click="">
            <v-list-tile-title v-text="'Item ' + n"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </div>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        item: null,
        nativeJs: '<div id="myDIV">\n    <h1>myDIV</h1>\n  </div>',
        vuejs: '<v-menu transition="slide-x-transition">\n  <v-btn dark color="primary"slot="activator">Slide X Transition</v-btn>\n    <v-list> \n      <v-list-tile v-for="n in 5" :key="n" @click="">\n        <v-list-tile-title v-text="item + n"></v-list-tile-title>\n      /v-list-tile>\n    </v-list>\n  </v-menu>'
      }
    }
  }
</script>