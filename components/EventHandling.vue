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
    <v-layout row wrap>
      <v-flex xs6 md4 lg2 class="pl-2 pr-2">
        <v-btn 
        block
        color="primary" 
        dark 
        @click.native.stop="dialog = true"
        >
          Open Dialog
        </v-btn>
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title class="headline">Use Google's location service?</v-card-title>
            <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">Disagree</v-btn>
              <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">Agree</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>

      <v-flex xs6 md4 lg2 class="pl-2 pr-2">
        <v-text-field class="textfield-negative-margin"
          label="Event when enter"
          v-model="input"
          @keyup.enter="enter(input)"
        ></v-text-field>
      </v-flex>

      <v-flex xs6 md4 lg4 class="pl-2 pr-2">
        <v-select
          v-model="select"
          label="I use a scoped slot"
          chips
          tags
          append-icon=""
          class="textfield-negative-margin"
        >
          <template slot="selection" slot-scope="data">
            <v-chip
              @input="data.parent.selectItem(data.item)"
              class="chip--select-multi"
              :selected="data.selected"
              :disabled="data.disabled"
              :key="JSON.stringify(data.item)"
            >
              <v-avatar class="accent">{{ data.item.slice(0, 1).toUpperCase() }}</v-avatar>
              {{ data.item }}
            </v-chip>
          </template>
        </v-select>
      </v-flex>

      <v-flex xs6 md4 lg2 class="pl-2 pr-2">
        <v-checkbox :label="`Checkbox 1: ${boolean.toString()}`" v-model="boolean"></v-checkbox>
      </v-flex>

      <v-flex xs6 md4 lg2 class="pl-2 pr-2">
        <v-switch :label="`Switch 1: ${boolean.toString()}`" v-model="boolean"></v-switch>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        input: null,
        dialog: false,
        boolean: false,
        select: [],
        nativeJs: '<div id="respond-1" class="response" style="display:none;">show</div>',
        vuejs: '<div v-if="hide === true"></div>'
      }
    },
    methods: {
      enter: function (name) {
        alert('Hi my name is ' + name)
      }
    }
  }
</script>

<style lang="stylus">
.textfield-negative-margin
  margin-top: -5px
</style>