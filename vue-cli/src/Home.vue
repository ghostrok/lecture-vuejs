<template>
<div>
    <p>Server status : {{ status }} </p>
    <button @click="changeStatus">change status </button>
</div>
</template>

<script>
export default {
    name : 'home',
    data : function() {
    return {
      status : 'Critical'
    }
    
  }, 
  methods: {
      changeStatus: function() {
          this.status = 'normal';
      }
  }
}
</script>

<style>
</style>
