<template>
    <v-container v-if="post">
        <post-card :post="post"></post-card>
    </v-container>
    <div v-else>
        해당 게시글이 존재하지 않습니다.
    </div>
</template>

<script>
import PostCard from '~/components/PostCard';

export default {
    components:{
        PostCard,
    },
    computed:{
        post(){
            return this.$store.state.posts.mainPosts.find(v=> v.id== parseInt(this.$route.params.id))
        }
    }
}
</script>

<style>

</style>