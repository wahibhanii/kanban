<template >
  <v-flex xs12 sm6 md4 lg3 pa-1 >
    <v-flex >
      <v-card >
        <v-flex elevation-4 :class="colorStatus[status]">
          <h1 class="display-1">{{this.$store.state.callerId[status]}}</h1>
        </v-flex>
        <v-flex v-for="(card, i) in itemCards" :key="i" pa-1 class="orange lighten-4">
          <kanban-card :card="card"></kanban-card>
        </v-flex>
      </v-card>
    </v-flex>
  </v-flex>
</template>

<script>
import KanbanCard from './KanbanCard'
export default {
  data () {
    return {
      colorStatus: ['red', 'yellow', 'blue', 'green'],
    }
  },
  props: [
    'status', 'itemCards'
  ],
  components: {
    KanbanCard
  }

}
</script>

<style scoped>
  .section{
    min-width: 400px;
  }
</style>
