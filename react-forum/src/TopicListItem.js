import {useContext, useState} from "react";
import {actions, AppContext} from "./AppContext";

export  function TopicListItem({item}){


    const {dispatch} = useContext(AppContext)

    function onLike(){

            fetch("http://127.0.0.1:8000/forum/votes/" ,{
                method: 'POST',
                headers:{
                    'content-type':"application/json"
                },
                body:JSON.stringify({
                    topic:item.id, vote:'l'
                })
            }) .then(res=>res.json())
                .then((data=>dispatch({type:actions.TOPIC_LIKED, item:item.id})))

    }


    function onDisLike(){

        fetch("http://127.0.0.1:8000/forum/votes/" ,{
            method: 'POST',
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify({
                topic:item.id, vote:'d'
            })
        }) .then(res=>res.json())
            .then((data=>dispatch({type:actions.TOPIC_DISLIKED, item:item.id})))

    }

    return (
        <div>
           <p>{item.title}</p>
           <p>{item.description}</p>
           <p onClick={onLike}>{item.likes} Likes</p>
           <p onClick={onDisLike}>{item.dislikes} Dislikes</p>
        </div>
    )
}