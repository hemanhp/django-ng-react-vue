import {TopicListItem} from "./TopicListItem";

export  function TopicsList(props){
    return (
        <div>
            {props.items.map(e=> <TopicListItem item={e} key={e.id} />)}
        </div>
    )
}