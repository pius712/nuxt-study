export const state = ()=>({
    me: null,
    followerList:[{
        id: "aksfbsgnlfls",
        nickname: "pius"
    },{
        id: "aksfbs12",
        nickname: "pius12"
    }],
    followingList:[{
        id: "aksfbsgnlfls",
        nickname: "pius"
    },{
        id: "aksfbs12",
        nickname: "pius12"
    }],
});

export const mutations = {
    setMe(state, payload){
        console.log("setME");
        state.me = payload;   // mutation 은 비동기 작업이 있으면 안된다. axios 같은
    },
    change(state,nick){
        state.me.nickname = nick;
    },
    addFollowing(state,payload){
        state.followingList.push(payload);
    },
    addFollower(state,payload){
        state.followerList.push(payload);
    },
    rmFollower(state, payload){
        const idx = state.followerList.findIndex(v=> v.id === payload.id);
        state.followerList.splice(idx,1);
    },
    rmFollowing(state, payload){
        const idx = state.followingList.findIndex(v=> v.id === payload.id);
        state.followingList.splice(idx,1);
    }
};

export const actions = {  // 비동기 작업을 하는 
    signUp( context, payload){
        console.log(context)
        // 서버에 회원가입 요청을 보내는 부분
        context.commit('setMe', payload);    
    },
    logIn(context,payload){
        context.commit('setMe', payload);
    },
    logOut(context){
        // console.log('store')
        context.commit('setMe', null);
    },
    changeNick(context, nick){
        context.commit('change', nick);
    },
    addFollowing(context, payload){
        
        context.commit('addFollowing',payload);
    },
    addFollower(context, payload){
        context.commit('addFollower',payload);
        
    },
    removeFollower(context, payload){
        console.log(payload);
        context.commit('rmFollower',payload);
    },
    removeFollowing(context, payload){
        console.log(payload);
        
        context.commit('rmFollowing', payload);
    }   
}