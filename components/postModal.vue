<template>
  <v-container>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="500px">
        <v-btn color="primary" dark slot="activator">Register</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="form" lazy-validation>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="First Name" required v-model="fname"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Middle Name" required v-model="mname"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Last Name" required v-model="lname"></v-text-field>
                </v-flex>
                </v-layout>
              </v-container>
            </v-form>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click="request">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>

    <v-snackbar
      :timeout="2000"
      :bottom="true"
      v-model="snackbar"
    >
      saved!
    </v-snackbar>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        fname: '',
        mname: '',
        lname: '',
        address: '',
        snackbar: false
      }
    },
    methods: {
      request: function () {
        let data = {
          firstname: this.fname,
          middlename: this.mname,
          lastname: this.lname
        }

        this.$store.dispatch('postPersonalInfo', data).then(() =>{
          console.log('successfully add')
          this.dialog = false
          this.snackbar = true
        })
      }
    }
  }
</script>