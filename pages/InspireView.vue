<template>
  <v-layout>
    <v-flex text-xs-center>
      <v-avatar size="200px" class="avatar-margin">
        <img src="../images/9bf.jpg"  alt="Vuetify.js" class="mb-5" />
      </v-avatar> 
      <v-expansion-panel>
        <v-expansion-panel-content v-for="(item,i) in 10" :key="i">
          <div slot="header">
            {{ i === 0 ? 'Installation ': i === 1 ? 'Template Syntax' : i === 2 ? 'Conditional Rendering' :  i === 3 ? 'Event Rendering' : i === 4 ? 'Transitions' : i === 5 ? 'Components' : i === 6 ? 'Router' : i === 7 ? 'Mixins' : i === 8 ? 'Requests' : 'Conclusion'}}
          </div>
          <v-card>
            <v-card-text v-if="i === 0">
              <installation></installation>
            </v-card-text>
            <v-card-text v-if="i === 1">
              <data-binding></data-binding>
            </v-card-text>
            <v-card-text v-if="i === 2">
              <conditional-rendering></conditional-rendering>
            </v-card-text>
            <v-card-text v-if="i === 3">
              <event-handling></event-handling>
            </v-card-text>
            <v-card-text v-if="i === 4">
              <transitions></transitions>
            </v-card-text>
            <v-card-text v-if="i === 5">
              <parent-child></parent-child>
            </v-card-text>
            <v-card-text v-if="i === 6">
              <routers></routers>
            </v-card-text>
            <v-card-text v-if="i === 7">
              <mixins-component></mixins-component>
            </v-card-text>
            <v-card-text v-if="i === 8">
              <requests></requests>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      size: "100px"
    }
  }
}
</script>
<style lang="stylus">
.avatar-margin
  margin-top: 20px
.trial
  width: 100px
  height: 100px
  border:solid
</style>