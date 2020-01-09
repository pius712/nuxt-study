<template>
  <div>
    <v-container>
      <post-form v-if="me"></post-form>
    </v-container>
    <v-container>
      <post-card></post-card>
      <post-card></post-card>
      <post-card></post-card>
      <post-card></post-card>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PostForm from '~/components/PostForm.vue';
import PostCard from '~/components/PostCard.vue';

export default {
  head(){
      return {
          title: '홈',
      };
  },
  components:{
    PostForm,
    PostCard,
  },
  computed:{
    // ...mapState(['users/me'])
    me(){
      return this.$store.state.users.me;
    }
  }
}
</script>

<style>

</style>