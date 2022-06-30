import React from "react";
export const initialState = {
    topics:[]
}

export const actions = {
    'TOPIC_LOADED':'TOPIC_LOADED',
    'TOPIC_CREATED':'TOPIC_CREATED',
    'TOPIC_LIKED':'TOPIC_LIKED',
    'TOPIC_DISLIKED':'TOPIC_DISLIKED',
}

export  function reducer(state, action){
    switch (action.type){
        case actions.TOPIC_LOADED:
            return {
                topics: action.topics
            }
        case actions.TOPIC_CREATED:
            return {
                 ...state, topics: [action.topic].concat(state.topics)
            }
        case actions.TOPIC_LIKED:
            return {
                ...state, topics: state.topics.map(e=> e.id=== action.item ? {...e, likes:e.likes+1}:e)
            }
        case actions.TOPIC_DISLIKED:
            return {
                ...state, topics: state.topics.map(e=> e.id=== action.item ? {...e, dislikes:e.dislikes+1}:e)
            }
        default:
            return state
    }
}


export const AppContext = React.createContext()