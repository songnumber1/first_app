<script setup>
import axios from 'axios'

const ipconfirm = () => {
  console.log('ipconfirm')

  let url = '/api/test/home'

  axios
    .get(url)
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.log(error)
    })
}
</script>

<template>
  <div>
    <el-button type="primary" @click="ipconfirm">Axios Ip comfirm</el-button>
  </div>
</template>
