<template>
  <div>
    <post-card></post-card>
    <post-card></post-card>
    <post-card></post-card>
    <post-card></post-card>
  </div>
</template>

<script>
import PostCard from '~/components/PostCard.vue';
export default {
  head(){
      return {
          title: '홈',
      };
  },
  components:{
    PostCard,
  }
}
</script>

<style>

</style>