<template>
  <v-row>
    <v-col
      cols=undefined
      class="d-none d-sm-flex">
      profile
    </v-col>
    <v-col
      cols=6
      class="d-12">
      <post-form></post-form>
    </v-col>
    <v-col
    cols=undefined
    class="d-none d-sm-flex">
      chat
    </v-col>
  </v-row>
</template>

<script>
import PostForm from '~/components/PostForm.vue'
export default {
    components:{
      PostForm
    }
}
</script>

<style>

</style>