import React, { FunctionComponent, useState, ChangeEvent } from 'react';; // we need this to make JSX compile

const NewPost: FunctionComponent = () => {
    const [post, setPost] = useState({title:'', body:''});
    const handleSubmit =  (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if (post.title.trim() && post.body.trim()) {
              handleReset();
    }
    }
    const handleInputChange =  (event: any) : void=>{
        const name = event.target.name;
        if (name === 'title' || name === 'body') {
            setPost({
                ...post,
                [name]: event.target.value
            })    
        }
    
    }
    const handleReset = (): void =>{
        setPost({title:'', body:''})
    }
    return (
        <div>
            <form onSubmit={ handleSubmit }>
            <div className="form-group">
                <input
                type="text"
                placeholder="Title"
                className="form-control"
                name="title"
                onChange={ handleInputChange }
                value={ post.title }
              />
            </div>
            <div className="form-group">
              <textarea
                cols={19}
                rows={8}
                placeholder="Body"
                className="form-control"
                name="body"
                onChange={ handleInputChange }
                value={ post.body }>
              </textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Add Post</button>
              <button type="button" className="btn btn-warning" onClick={ handleReset }>
                Reset
              </button>
            </div>
          </form>
        </div>
      );
} 

export default NewPost;