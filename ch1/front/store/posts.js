export const state = ()=>({
    mainPosts: []
})

export const mutations = {
    addMainPost(state, payload){
        // console.log('ㅎㅇ');
        state.mainPosts.unshift(payload); 
    },
    removeMainPost(state, payload){
        const index = state.mainPosts.findIndex(v=>v.id===payload.id);
        state.mainPosts.splice(index,1);
    },
    addComment(state, payload){
        const index = state.mainPosts.findIndex(v=> v.id===payload.cc);
        console.dir(state.mainPosts);
        console.log(index);
        state.mainPosts[index].Comments.unshift(payload);
    }
}

export const actions = {
    add(context, payload){
        context.commit('addMainPost',payload);
        //서버에 게시글 등록 요청 보냄.
    },
    remove(context, payload){
        context.commit('removeMainPost', payload);
    },
    addComment(context, payload){
        console.log('actionaddComment');
        context.commit('addComment', payload);
    }
};