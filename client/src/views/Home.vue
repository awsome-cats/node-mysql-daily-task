<template>
<div class="container">
    <!-- 右側 -->
    <router-link to="/tasks">タスク一覧へ</router-link>
    <div class="right-container">
      <div class="gantt-selected-info">
        <div v-if="selectedTask">
          <h2>{{ selectedTask.text }}</h2>
          <span><b>ID:</b>{{ selectedTask.id }}</span><br/>
          <span><b>実績: </b>{{ selectedTask.progress|toPercent}}%</span><br/>
          <span><b>開始日: </b>{{ selectedTask.start_date|niceDate }}</span><br/>
          <span><b>最終日: </b>{{ selectedTask.end_date|niceDate }}</span><br/>
        </div>
        <div v-else class="select-task-prompt">
          <h2>Click any task</h2>
        </div>
      </div>
      <ul class="gantt-messages">
        <li class="gantt-message" v-for="(message, index) in messages" :key="index">
          {{message}}
        </li>
      </ul>
    </div>
        <!-- 左側 -->
    <gantt class="left-container"
    :tasks="tasks"
    @task-updated="logTaskUpdate"
    @link-updated="logLinkUpdate"
    @task-selected="selectTask"
    />
</div>
</template>

<script>
import Gantt from '../components/Gantt'
export default {
  name: 'Home',
  components: {
  Gantt
  },
  data (){
    return {
      tasks: {
        data: [
          {
            id: 1, text: 'Task #1', start_date: '2020-01-17', duration: 2, progress: 0.6
          },
          {
            id: 2, text: 'Task #2', start_date: '2020-01-20', duration: 3, progress: 0.4
          },
        ],
        links: [
          {
            id: 1, source: 1, target: 2, type: '0'
          }
        ],
        messages: []
      },
      selectedTask: null
    }
  },

  methods: {
    addMessage (message) {
      this.messages.unshift(message)
      if (this.messages.length > 40) {
        this.messages.pop()
      }
    },
    logTaskUpdate (id, mode, task) {
      let text = (task && task.text ? `(${task.text})`: '')
      let message = `Task ${mode}: ${id} ${text}`
      this.addMessage(message)
    },
    logLinkUpdate( id, mode, link ) {
      let message = `Link ${mode}: ${id}`
      if (link) {
        message +=`(source: ${link.source}, target: ${link.target})`
      }
      this.addMessage(message)
    },
    selectTask (task) {
      this.selectedTask = task
    }
  },
  filters: {
    toPercent (val) {
      if(!val) return '0'
      return Math.round((+val) * 100)
    },
    niceDate (obj){
      return `${obj.getFullYear()} / ${obj.getMonth() + 1} / ${obj.getDate()}`
    }
    // niceDate (val) {
    //   return '${val.getFullYear()}'
    // }
  }
}
</script>

