export const state = ()=>({
    me: null,

});

export const mutations = {
    setMe(state, payload){
        console.log("setME");
        state.me = payload;   // mutation 은 비동기 작업이 있으면 안된다. axios 같은
    },
    change(state,nick){
        state.me.nickname = nick;
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
    }   
}