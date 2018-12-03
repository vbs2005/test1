<template>
  <div>
    <h2>{{msg}}</h2>
    <p>{{ $route.params.username}}---{{ $route.params.id}}</p>

  </div>

</template>

<script>
    export default {
        name: "hi1",
      data(){
          return{
            msg:'I am hi1 page'
          }

      }
    }
</script>

<style scoped>

</style>
