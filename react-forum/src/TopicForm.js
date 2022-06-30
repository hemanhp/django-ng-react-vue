export  function TopicForm({onItemCreated}){

    function  handleSubmit(e){
        e.preventDefault()
        onItemCreated({title:e.target.title.value, description:e.target.description.value})
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                Title: <input type="text" name="title"/>
                Description: <textarea  name="description"/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}