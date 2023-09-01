<script>
export default {
  // 元件(接收上層給予的數值，嚴謹一點規定變數屬性 (required是否必填;dafault預設值))
  props:{
    devices:{
      type:Array,
      required:true,
      default:[],
    }
  }
}
</script>


<template>
  <h3 v-if="devices.length == 0">目前無任何設備</h3> 
  <h3 v-else>目前共計 {{ devices.length }} 項設備</h3>
</template>

<style scoped>
h3{
  color:gray;
}
</style>