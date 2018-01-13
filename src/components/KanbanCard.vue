<template>
  <v-card class="ma-1 elevation-4 teal lighten-3" light >
    <v-card-title primary-title>
      <v-container fluid ma-0 pa-0>
        <v-layout row fluid>
          <v-flex class="headline">
            {{card.title}}
          </v-flex>
        </v-layout>
        <v-layout row justify right>
            {{card.point}} Point
        </v-layout>
        <v-layout>
            <span>Assigned to: {{card.assignedTo}}</span> 
        </v-layout>
      </v-container>
    </v-card-title>
    <v-card-actions>
      <v-layout justify-space-between>
        <v-btn flat icon @click="setback" :disabled="card.status === 0"> <v-icon>chevron_left</v-icon> </v-btn>
        <v-btn flat small @click="cardDetail" >Detail</v-btn>
        <v-btn flat icon @click="pullNext" :disabled="card.status === 3"> <v-icon>chevron_right</v-icon> </v-btn>
      </v-layout>
    </v-card-actions>
</v-card>
</template>

<script>
export default {
  props: ['card'],
  methods: {
    pullNext () {
      console.log('pull', this.card['.key'])
      this.$fbasedb.ref(`kanban/story/${this.card['.key']}`).set({
        title: this.card.title,
        description: this.card.description,
        point: Number(this.card.point),
        assignedTo: this.card.assignedTo,
        status: this.card.status + 1 //
      })
    },
    setback () {
      console.log('back')
      console.log('pull', this.card['.key'])
      this.$fbasedb.ref(`kanban/story/${this.card['.key']}`).set({
        title: this.card.title,
        description: this.card.description,
        point: Number(this.card.point),
        assignedTo: this.card.assignedTo,
        status: this.card.status - 1 //
      })
    },
    cardDetail () {
      this.$store.state.currentCardDetail = this.card
      this.$store.state.cardDetailDialog = true
    }
  }
}
</script>

<style>

</style>
