import './Comment.css'

function Comment(props){

    

    return(
    <div>
    {
        props.data.map(item => {
            return <div>
                    <p>{item.name}</p>
                    <p>{item.comment}</p>
                    <p>{item.date}</p>
                </div>
        })
    }
            
        </div>
    )
}

export default Comment;