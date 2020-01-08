<template>
  <v-app>
      <div>
        <v-toolbar color=blue>
            <v-toolbar-title>
                piusbook
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
               
                <v-text-field
                label="이메일 또는 휴대폰"
                placeholder=''
                clearable
                hide-details
                style="margin-right: 5px; display:flex; align-items:center"
                >
                </v-text-field>
                <v-text-field
                label="비밀번호"
                placeholder=''
                clearable
                hide-details
                style="display:flex; align-items:center"
                >
                </v-text-field>
            
                <v-btn class="login_btn" tile color="indigo" dark>로그안</v-btn>
            </v-toolbar-items>
        </v-toolbar>
      </div>
      <nuxt/>
  </v-app>
</template>

<script>
export default {

}
</script>

<style scoped>
.v-toolbar__items{
    height: 80%;
    width: 50%;
    padding:0
}
</style>