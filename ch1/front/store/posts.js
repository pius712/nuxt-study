export const state = ()=>({
    mainPosts: []
})

export const mutations = {
    addMainPost(state, payload){
        // console.log('ㅎㅇ');
        state.mainPosts.unshift(payload); 
    }
}

export const actions = {
    add(context, payload){
        context.commit('addMainPost',payload);
        //서버에 게시글 등록 요청 보냄.
    }
};