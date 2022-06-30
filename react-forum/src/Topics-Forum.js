import {TopicForm} from "./TopicForm";
import {TopicsList} from "./TopicsList";
import {useContext, useEffect, useState} from "react";
import {actions, AppContext} from "./AppContext";

export  function TopicsForum(){

    // const [topics, setTopics] = useState([])

    const {state, dispatch} = useContext(AppContext);

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/forum/topics/" )
            .then(res=>res.json())
            .then(data=> dispatch({type:actions.TOPIC_LOADED, topics:data}))
    }, [])


    function handleItemCreate(topic){
        fetch("http://127.0.0.1:8000/forum/topics/" ,{
            method: 'POST',
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify({
                title:topic.title, description:topic.description
            })
        }) .then(res=>res.json())
            .then(data=> dispatch({type:actions.TOPIC_CREATED, topic:data}))
    }

    return (
        <div>
            <TopicForm  onItemCreated={handleItemCreate}/>
            <TopicsList items={state.topics}/>
        </div>
    )
}