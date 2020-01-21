<template>
  <div>
    <v-container>
      <post-card v-for="p in mainPosts" :key="p.id" :post = "p"></post-card>
      
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
    },
    mainPosts(){
      return this.$store.state.posts.mainPosts;
    },
    hasMorePost(){
      return this.$store.state.posts.hasMorePost;
    }
  },
  fetch({ store }){
    console.log('fetch methods')
    store.dispatch('posts/loadPosts');
  },
  methods:{
    onScroll(){
      if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight -300){
        if(this.hasMorePost){
          this.$store.dispatch('posts/loadPosts');
        }
      }
    }
  },
  mounted(){
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestory(){ 
    window.removeEventListener('scroll', this.onScroll);

  },
}
</script>

<style>

</style>