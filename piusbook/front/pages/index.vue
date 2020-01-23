<template>
  <v-row>
    <v-col cols="undefined" class="d-none d-sm-flex">{{ me.nickname }}님 안녕하세요</v-col>
    <v-col cols="6" class="d-12">
      <post-form></post-form>
    </v-col>
    <v-col cols="undefined" class="d-none d-sm-flex">chat</v-col>
  </v-row>
</template>

<script>
import PostForm from "~/components/PostForm.vue";
export default {
  components: {
    PostForm
  },
  computed: {
    me() {
      return this.$store.state.users.me;
    }
  },
  middleware: "anonymous"
};
</script>

<style>
</style>