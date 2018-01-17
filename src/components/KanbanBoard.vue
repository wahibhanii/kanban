<template>
  <v-container fluid black pa-0>
    <v-layout wrap>
      <kanban-section :status="0" :itemCards="backlogCards"></kanban-section>
      <kanban-section :status="1" :itemCards="todoCards"></kanban-section>
      <kanban-section :status="2" :itemCards="inProgressCards"></kanban-section>
      <kanban-section :status="3" :itemCards="doneCards"></kanban-section>
    </v-layout>
  </v-container>
  
</template>

<script>
import KanbanSection from './KanbanSection'
export default {
  firebase () {
    return {
      stories: {
        source: this.$fbasedb.ref('kanban/story'),
        anArray: true
      }
    }
  },
  components: {
    KanbanSection
  },
  computed: {
    backlogCards () {
      let arrBacklog = this.stories.filter(story => story.status === 0)
      arrBacklog = arrBacklog.sort((a, b) => { return (a.point < b.point) ? 1 : ((b.point < a.point) ? -1 : 0) })
      return arrBacklog
    },
    todoCards () {
      let arrTodo = this.stories.filter(story => story.status === 1)
      arrTodo = arrTodo.sort((a, b) => { return (a.point < b.point) ? 1 : ((b.point < a.point) ? -1 : 0) })
      return arrTodo
    },
    inProgressCards () {
      let arrInProgress = this.stories.filter(story => story.status === 2)
      arrInProgress = arrInProgress.sort((a, b) => { return (a.point < b.point) ? 1 : ((b.point < a.point) ? -1 : 0) })
      return arrInProgress
    },
    doneCards () {
      let arrDone = this.stories.filter(story => story.status === 3)
      arrDone = arrDone.sort((a, b) => { return (a.point < b.point) ? 1 : ((b.point < a.point) ? -1 : 0) })
      return arrDone
    }
  }
}
</script>

<style>

</style>
