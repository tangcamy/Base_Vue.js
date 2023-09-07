
<script setup>
import { onBeforeMount,ref } from 'vue';
import { useRoute } from 'vue-router'
const StorageKey = 'deviceList'
const deviceTitle = ref('')
const deviceId = ref('')
const route = useRoute()
// 獲取route中params的資料
onBeforeMount(()=>{
  const id = route.params.deviceId
  const allDevice = JSON.parse(localStorage.getItem(StorageKey))
  const device = allDevice.find((d) => d.id === id)
  console.log(device.title)
  deviceTitle.value = device.title
  deviceId.value = device.id
})

</script>

<template>  
  <!-- <h1 class="my-6 text-xl">設備：{{$route.params.deviceId }}</h1> -->
  <h1 class="my-6 text-xl">設備名稱：{{ deviceTitle }}</h1>
  <h1 class="my-6 text-xl">設備ID：{{ deviceId }}</h1>
</template>