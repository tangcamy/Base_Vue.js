<script>
export default {
  props: {
    device: {
      type:Object,
      required:true,
    },
  },
  methods:{
    remove(){
      // 子層告訴上層：廣播事件
      this.$emit('remove-item',this.device.id)
    }
  }
};
</script>



<template>
  <li class="flex items-center justify-between bg-slate-100 px-2 mt-2 py-1 text-lg">{{ device.title }}
    <button @click.prevent="remove" class="bg-black text-white px-2 py-1  ">x</button>
  </li>
</template>


<!-- scoped:影響的範圍只有目前這些頁面的物件 -->
<style scoped>
button{
  background-color:gray;
  border-radius: 30px;
  opacity: 1;
}
button:hover{
  opacity: 0.5;
}
</style>