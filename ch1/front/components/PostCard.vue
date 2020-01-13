<template>
    <div>
        <v-card style="margin-bottom: 20px">
            <!-- <v-img src="/nana.png"/> -->
            <v-card-text>
                <div>
                    <h3>{{ this.post.User.nickname}}</h3>
                    <div>{{ this.post.content }}</div>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn text>
                    <v-icon>mdi-twitter-retweet</v-icon>
                </v-btn>
                <v-btn text>
                    <v-icon>mdi-heart-outline</v-icon>
                </v-btn>
                <v-btn text @click="onToggleComment">
                    <v-icon>mdi-comment-outline</v-icon>
                </v-btn>
                <v-btn text>
                    <v-icon>mdi-dots-outline</v-icon>
                </v-btn>
                <v-menu open-on-hover>
                    <template v-slot:activator="{ on }">
                        <v-btn v-on="on">
                            menu
                        </v-btn>

                    </template>
                    <div>
                        <v-btn @click="onRemovePost">삭제</v-btn>
                        <v-btn @click="onEditPost">수정</v-btn>
                    </div>
                </v-menu>
            </v-card-actions>    
        </v-card>
        <template v-if="commentOpened">
            <comment-form :postId="post.id"></comment-form>
            <v-list>
                <v-list-item v-for="c in post.Comments" :key="c.id">
                    <v-list-item-avatar>
                        <span>{{c.User.nickname[0]}}</span>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <h3>{{ c.User.nickname }}</h3>
                        <div>{{ c.content }}</div>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </template>  
    </div>
</template>

<script>
import CommentForm from '~/components/CommentForm.vue'
export default {
    data(){
        return{
            commentOpened: false,
        };
    },
    props:{
        post:{
            type: Object,
            required: true,
        }
    },
    methods:{
        onRemovePost(){
            this.$store.dispatch('posts/remove',{
                id: this.post.id
            })
        },
        onEditPost(){

        },
        onToggleComment(){
            this.commentOpened = !this.commentOpened;
        }
    },
    components:{
        CommentForm
    }
}
</script>

<style>

</style>