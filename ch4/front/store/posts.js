export const state = () => ({
  mainPosts: [],
  hasMorePost: true,
  imagePaths: [],
});
// content: this.content,
// User:{
//     nickname: this.me.nickname,
// },
// Comments:[],
// images:[],
// id: Date.now(),
// createdAt: Date.now(),
const totalPosts = 51;
const limit = 10;

export const mutations = {
  addMainPost(state, payload) {
    // console.log('ㅎㅇ');
    state.mainPosts.unshift(payload);
    state.imagePaths = [];
  },
  removeMainPost(state, payload) {
    const index = state.mainPosts.findIndex(v => v.id === payload.id);
    state.mainPosts.splice(index, 1);
  },
  addComment(state, payload) {
    // console.log("페이로드")
    console.log(payload.postId);

    const index = state.mainPosts.findIndex(v => v.id === payload.postId);
    // console.dir(state.mainPosts);
    console.log(index);
    state.mainPosts[index].Comments.unshift(payload);
  },
  loadPosts(state) {
    const diff = totalPosts - state.mainPosts.length; // 아직 안 불려진 게시글 수
    const fakedPosts = new Array(diff > limit ? limit : diff).fill().map(v => ({
      id: Math.random().toString(),
      User: {
        id: 1,
        nickname: 'pius',
      },
      content: `Hello infinite scrolling -${Math.random()}`,
      Comments: [],
      Images: [],
    }));
    state.mainPosts = state.mainPosts.concat(fakedPosts);
    state.hasMorePost = fakedPosts.length === limit;
  },
  concatImagePaths(state, payload) {
    state.imagePaths = state.imagePaths.concat(payload);
  },
  removeImagePath(state, payload) {
    state.imagePaths.splice(payload, 1);
  },
};

export const actions = {
  add(context, payload) {
    this.$axios
      .post(
        'http://localhost:8080/post',
        {
          content: payload.content,
          imagePaths: context.state.imagePaths,
        },
        {
          withCredentials: true,
        },
      )
      .then(res => {
        context.commit('addMainPost', res.data);
      })
      .catch(err => {
        console.error(err);
      });
    // context.commit('addMainPost', payload);
    //서버에 게시글 등록 요청 보냄.
  },
  remove(context, payload) {
    context.commit('removeMainPost', payload);
  },
  addComment(context, payload) {
    console.log('actionaddComment');
    context.commit('addComment', payload);
  },
  loadPosts(context) {
    console.log('?');
    if (context.state.hasMorePost) {
      context.commit('loadPosts');
    }
  },
  uploadImages({ commit }, payload) {
    this.$axios
      .post('http://localhost:8080/post/images', payload, {
        withCredentials: true,
      })
      .then(res => {
        console.log('uploaded');
        commit('concatImagePaths', res.data);
      })
      .catch(() => {});
  },
};
