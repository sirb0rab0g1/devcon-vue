<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <img src="/static/v.png" alt="Vuetify.js" class="mb-5" />
      </div>
      <v-card class="card-container">
        <v-card-text>
          <center>
            <h2>
              Make Javascript easy with Vue + Axios
            </h2>
          </center> <br><br>
          <strong>Speaker</strong>: Kent Dela Cruz Fueconcillo <br>
          Overview: <br>
          <strong>vuejs + vuetify</strong> <br>
          -basic to advance <br>
          <strong>axios</strong> <br>
          -requests <br>
          <strong>restful api(django)</strong> <br>
          -sample data <br>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" flat router to="/inspire">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style lang="stylus">
.card-container
  width:500px
</style>