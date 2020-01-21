<template>
  <div>
    <v-container>
      <v-card style="margin-bottom: 20px">
        <v-container>
          <v-subheader>내 프로필</v-subheader>
          <v-form @submit.prevent="changeNick">
            <v-text-field
              v-model="nick"
              label="닉네임"
              required/>
            <v-btn type="submit">수정</v-btn>
          </v-form>
        </v-container>
      </v-card>
      <v-card style="margin-bottom: 20px">
        <v-container>
          <v-subheader>팔로잉</v-subheader>
          <follow-list :users="followingList" :remove="removeFollowing"/>
          <v-btn @click="loadMoreFollowings" v-if="hasMoreFollowing" style="width:100%">더보기</v-btn>
        </v-container>
      </v-card>
      <v-card style="margin-bottom: 20px">
        <v-container>
          <v-subheader>팔로워</v-subheader>
          <follow-list :users="followerList" :remove="removeFollower"/>
          <v-btn @click="loadMoreFollowers" v-if="hasMoreFollower" style="width:100%">더보기</v-btn>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import FollowList from '~/components/FollowList';
export default {
  data(){
    return{
      nick: "",
    }
  },
  layout: 'admin',
  head(){
      return {
          title: '프로필',
      }
  },
  computed:{
    me(){
      return this.$store.state.users.me;
    },
    followerList(){
      return this.$store.state.users.followerList;
    },
     followingList(){
      return this.$store.state.users.followingList;
    },
    hasMoreFollowing(){
      return this.$store.state.users.hasMoreFollowing;
    },
    hasMoreFollower(){
      return this.$store.state.users.hasMoreFollower;
    }
  },
  methods:{
    changeNick(){
      this.$store.dispatch('users/changeNick', this.nick);
    },
    removeFollower(payload){
            
            this.$store.dispatch('users/removeFollower', payload);
        },
    removeFollowing(payload){
        console.log(payload);
        // console.log("팔로워");
        this.$store.dispatch('users/removeFollowing',payload);
    },
    loadMoreFollowers(){
      this.$store.dispatch('users/loadFollowers');
    },
    loadMoreFollowings(){
      this.$store.dispatch('users/loadFollowings');

    }
  },
  fetch(context){
    context.store.dispatch('users/loadFollowers');
    context.store.dispatch('users/loadFollowings');

  },
  components:{
    FollowList,
  },
  middleware: 'authenticated'
}
</script>

<style>

</style>