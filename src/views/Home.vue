<template>
  <div class="home">
    <h1>Homepage</h1>
    <v-btn class="pink white--text">click me</v-btn>
    <v-btn depressed dark color="pink">click me again</v-btn>
    <v-btn text color="pink">click me</v-btn>
    <v-btn text class="pink white--text">
      <v-icon left>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn text small class="pink white--text">
      <v-icon left>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn text large class="pink white--text">
      <span>email me</span>
      <v-icon right large>mdi-email</v-icon>
    </v-btn>

    <v-btn text small dark fab color="purple">
      <v-icon>mdi-heart</v-icon>
    </v-btn>
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
