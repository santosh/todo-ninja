<template>
  <div class="home">
    <h1>Homepage</h1>
    <v-btn class="hidden-md-and-down">will show on md and up</v-btn>
    <v-btn class="hidden-md-and-up">will show md and down</v-btn>
    <v-btn class="hidden-xs-only">hidden on xs only</v-btn>
  </div>
</template> 

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
