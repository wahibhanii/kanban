<template>
  <v-layout row justify-center>
    <v-dialog v-model="this.$store.state.addNewStoryDialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Add New Story</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-form v-model="valid">
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field label="Title" v-model="title" required :rules="requiredRule"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Description"  v-model="description" multi-line></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Point" required  v-model="point" :rules="pointRule"></v-text-field>
                </v-flex>
               <v-flex xs12>
                  <v-text-field label="Assigned To"  v-model="assignedTo" ></v-text-field>
                </v-flex>
              </v-layout>
            </v-form>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="closeDialog">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="saveStory">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      valid: false,
      title: '',
      description: '',
      point: '',
      assignedTo: '',
      pointRule: [
        (v) => !!v || 'This field is required',
        (v) => /^[0-9]+$/.test(v) || 'Point must be a number'
      ],
      requiredRule: [
        (v) => !!v || 'This field is required'
      ]
    }
  },
  methods: {
    closeDialog () {
      this.$store.state.addNewStoryDialog = false
    },
    saveStory () {
      this.$fbasedb.ref('kanban').child('story').push({
        title: this.title,
        description: this.description,
        point: Number(this.point),
        assignedTo: this.assignedTo,
        status: 0 // status 0-4 => backlog - done
      })
    }
  }
}
</script>

<style>

</style>
