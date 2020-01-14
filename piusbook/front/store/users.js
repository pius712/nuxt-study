export const state = ()=> ({
    me : null
})

export const mutations = {
    setMe(state, payload){
        state.me = payload;
    }
}

export const actions = {
    signIn(context, payload){
        context.commit('setMe', payload);
    },
    signOut(context){
        context.commit('setMe', null);
    },
    signUp(context, payload){
        context.commit('setMe', payload);
    }
}