<template>
  <v-card>
    <v-container>
      <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
        <v-textarea
          v-model="content"
          outlined
          auto-grow
          clearable
          label="무슨 일이 있었는지 공유하세요"
          :hide-details="hideDetails"
          :success="success"
          :success-messages="successMessages"
          :rules="[v => !!v.trim() || '입력하라구~']"
          @input="onChangeTextareas"
        ></v-textarea>
        <v-btn type="submit" absolute right>업로드</v-btn>
        <input
          ref="imageInput"
          type="file"
          multilple
          hidden
          @change="onChangeImages"
        />
        <v-btn type="button" @click="onClickImageUpload">이미지 업로드</v-btn>
        <div v-for="(p, i) in imagePaths" :key="i" style="display:inline-block">
          <img :src="`http://localhost:8080/${p}`" style="width: 200px" />
          <div>
            <button type="button" @click="onRemoveImage(i)">제거</button>
          </div>
        </div>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      valid: false,
      hideDetails: true,
      success: false,
      successMessages: '',
      content: '',
    };
  },
  computed: {
    ...mapState('users', ['me']),
    ...mapState('posts', ['imagePaths']),
  },
  methods: {
    onChangeTextareas(value) {
      if (value.length) {
        this.hideDetails = true;
        this.success = false;
        this.successMessage = '';
      }
      //글자 칠때마다 발생하는 메서드 input
    },
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        console.log(this.me);
        this.$store
          .dispatch('posts/add', {
            content: this.content,

            // content: this.content,
            // User: {
            //   nickname: this.me.nickname,
            // },
            // Comments: [],
            // images: [],
            // id: Date.now(),
            // createdAt: Date.now(),
          })
          .then(() => {
            this.hideDetails = false;
            this.success = true;
            this.successMessages = '게시글 등록 성공';
            this.content = '';
          });
      }
    },
    onClickImageUpload() {
      this.$refs.imageInput.click();
    },
    onChangeImages(e) {
      console.log(e.target.files);
      const imageFormData = new FormData();
      [].forEach.call(e.target.files, f => {
        // e.target.files가 유사배열이라서, forEach를 못쓴다. forEach는 인자가 콜백함수.
        imageFormData.append('image', f);
      });
      this.$store.dispatch('posts/uploadImages', imageFormData);
    },
    onRemoveImage(idx) {
      this.$store.commit('posts/removeImagePath', idx);
    },
  },
};
</script>

<style></style>
