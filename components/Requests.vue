<template>
  <v-container>
  <post-modal></post-modal>
  <v-btn small color="primary" @click="getRequest()">Fetch Data</v-btn>
  <v-data-table
    :headers="headers"
    :items="personalInformation.results"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.firstname }}</td>
      <td>{{ props.item.middlename }}</td>
      <td>{{ props.item.lastname }}</td>
      <v-btn color="primary" dark @click.native.stop="dialog = true">Action</v-btn>

      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-text>
            <v-avatar size="260px" class="avatar-margin">
              <img src="../images/9bf.jpg">
            </v-avatar>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" flat="flat" @click.native="deleteRequest(props.item.id)">Delete</v-btn>
            <v-btn color="green darken-1" flat="flat" @click.native="updateFunction(props.item.id)">Update</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
  </v-data-table>
  <v-form ref="form" lazy-validation v-show="updateTemplate">
    <v-container grid-list-md>
      <v-layout wrap>
        <v-flex xs12 sm6 md4>
          <v-text-field label="First Name" required v-model="fname"></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md4>
          <v-text-field label="Age" required v-model="mname"></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md4>
          <v-text-field
            label="Contact number" required v-model="lname"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>

    <v-btn color="blue darken-1" @click="save">Save</v-btn>
  </v-form>

  <v-snackbar
      :timeout="2000"
      :bottom="true"
      v-model="snackbar"
    >
      {{ text }}
    </v-snackbar>
  </v-container>
</template>

<script>
// import { UPDATE_REQUEST } from '@/events/event'
import axios from 'axios'
export default {
  data () {
    return {
      headers: [
        {
          text: 'Firstname (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Middle Name', align: 'left', value: 'calories' },
        { text: 'Last Name', align: 'left', value: 'fat' }
      ],
      dialog: false,
      fname: '',
      mname: '',
      lname: '',
      contact_number: '',
      updateTemplate: false,
      pk: null,
      text: '',
      snackbar: false
    }
  },
  methods: {
    getRequest: function () {
      this.$store.dispatch('fetchPersonalInfo').then((data) => {
        this.$store.commit('setPersonalInfo', data)
        console.log(data)
      }).catch(() => {
        cosole.log('no data fetched')
      })
    },
    deleteRequest: function (id) {
      this.$store.dispatch('removePersonalInfo', id).then(() =>{
        console.log('successfully removed')
        this.text = 'Successfully Deleted'
        this.dialog = false
        this.snackbar = true
        this.getRequest()
      })
    },
    updateRequest: function (id) {
      this.$eventHub.$emit(UPDATE_REQUEST, id)
    },
    updateFunction: function (id) {
      this.updateTemplate = true
      this.dialog = false
      this.pk = id
    },
    save: function () {
      let data = {
        id: this.pk,
        firstname: this.fname,
        middlename: this.mname,
        lastname: this.lname
      }
      this.$store.dispatch('updatePersonalInfo', data).then(() =>{
        console.log('successfully update')
        this.text = 'Update Success'
        this.dialog = false
        this.snackbar = true
        this.getRequest()
        this.updateTemplate = false
      })
    }
  },
  computed: {
    personalInformation: function () {
      return this.$store.getters['personalInfo']
    }
  }
}
</script>