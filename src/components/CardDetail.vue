<template>
  <v-layout row justify-center>
    <v-dialog v-model="this.$store.state.cardDetailDialog" persistent max-width="80vh">
      <v-card>
          <v-layout row justify-end>
            <v-btn color="blue darken-1" flat @click.native="closeDialog" >Close</v-btn>
          </v-layout>
          <v-layout row pl-3>
            <span class="display-1">{{card.title}}</span>
          </v-layout>
          <v-container grid-list-md pl-5>
            <v-layout pt-3>
              <span class="title">Assigned to : {{card.assignedTo}} </span>
            </v-layout>
            <v-layout row pt-3>
              <span class="title">Description: </span>
            </v-layout>
            <v-layout row pl-4>
              <span >{{card.description}} </span>
            </v-layout>
            <v-layout row pt-3>
              <span class="title">Point: </span>
            </v-layout >
            <v-layout row pl-4>
              <span >{{card.point}} </span>
            </v-layout>
            <v-layout row pt-3>
              <span class="title">Status: </span>
            </v-layout >
            <v-layout row pl-4>
              <span >{{this.$store.state.callerId[card.status]}} </span>
            </v-layout>
          </v-container>
        <v-card-actions>
          <v-layout justify-space-between pa-3>
            <v-btn flat @click="setback" :disabled="card.status === 0"> 
              <v-icon>chevron_left</v-icon> 
                <span class="hidden-xs-only">
                  Set Back to {{this.$store.state.callerId[card.status - 1]}}
                </span>
              </v-btn>
            <v-dialog v-model="deleteDialog" persistent max-width="290">
              <v-btn color="red" flat slot="activator">Delete</v-btn>
              <v-card>
                <v-card-title class="headline">Are you sure you want to delete this story?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" flat @click.native="deleteDialog = false">Cancel</v-btn>
                  <v-btn color="red" flat @click.native="deleteStory">Delete</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-btn flat @click="pullNext" :disabled="card.status === 3">
              <span class="hidden-xs-only"> Pull to {{this.$store.state.callerId[card.status + 1]}} </span>
              <v-icon>chevron_right</v-icon>
            </v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      deleteDialog: false
    }
  },
  methods: {
    closeDialog () {
      this.$store.state.cardDetailDialog = false
    },
    pullNext () {
      this.$fbasedb.ref(`kanban/story/${this.card['.key']}`).set({
        title: this.card.title,
        description: this.card.description,
        point: Number(this.card.point),
        assignedTo: this.card.assignedTo,
        status: this.card.status + 1 //
      })
      this.$store.state.currentCardDetail.status ++
    },
    setback () {
      this.$fbasedb.ref(`kanban/story/${this.card['.key']}`).set({
        title: this.card.title,
        description: this.card.description,
        point: Number(this.card.point),
        assignedTo: this.card.assignedTo,
        status: this.card.status - 1 //
      })
      this.$store.state.currentCardDetail.status -= 1
    },
    deleteStory () {
      this.$fbasedb.ref(`kanban/story/${this.card['.key']}`).remove()
      this.deleteDialog = false
      this.$store.state.cardDetailDialog = false
    }
  },
  computed: {
    card () {
      return this.$store.state.currentCardDetail
    }
  }
}
</script>

<style>

</style>
