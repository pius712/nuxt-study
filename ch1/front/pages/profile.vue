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
          <follow-list/>
        </v-container>
      </v-card>
      <v-card style="margin-bottom: 20px">
        <v-container>
          <v-subheader>팔로워</v-subheader>
          <follow-list/>
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
      return this.$store.users.me;
    }
  },
  methods:{
    changeNick(){
      this.$store.dispatch('users/changeNick', this.nick);
    }
  },
  components:{
    FollowList
  }
}
</script>

<style>

</style>