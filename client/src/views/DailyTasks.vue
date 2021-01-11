<template>
<div class="container">
   <h2>タスク</h2>
      <router-link to="/">ホーム</router-link>
      <div>
        <div class="order-name" v-for="orderName in orderNames" :key="orderName.id">
           {{ orderName.Order_Name}}

        </div>
        <div>
          <div v-for="(id, index) in userId" :key="index">
            UserId:{{id.User_Id }}
          </div>
        </div>
      <div>
    </div>
</div>
</div>
     
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      userId: '',
      orderNames: [],
      taskName: ''
    }
  },
  mounted: function() {
    axios.get('http://localhost:3001/api/get')
    .then(response => {
      console.log(response.data)
        this.orderNames = response.data
    })
    axios.get('http://localhost:3001/api/get/all')
    .then(response => {
      console.log('全データ',response.data)
      this.userId = response.data
    })
  },
  methods: {
   
  }
}
</script>

<style scoped>
.container {
  font-size: 10px;
}
</style>