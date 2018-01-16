<template>
  <v-container fluid pa-0>
    <v-layout row align-baseline justify-left>
      <v-flex sm3 justify-left>
        <v-btn @click="addNewStory" light color="yellow">
          Add new story
        </v-btn>
      </v-flex>
      <v-flex sm6 >
        <h1 class="display-3">Kanban Board</h1>
      </v-flex>
    </v-layout>
      <kanban-board></kanban-board>
      <add-story></add-story>
      <card-detail></card-detail>
  </v-container>
</template>

<script>
import KanbanBoard from './KanbanBoard'
import AddStory from './AddStory'
import CardDetail from './CardDetail'
export default {
  components: {
    KanbanBoard, AddStory, CardDetail
  },
  methods: {
    addNewStory () {
      this.$store.state.addNewStoryDialog = true
    }
  }
}
</script>

<style>

</style>
