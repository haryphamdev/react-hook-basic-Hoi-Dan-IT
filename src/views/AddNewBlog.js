import './Blog.scss';
import { useState } from 'react';

const AddNewBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmitBtn = () => {
        console.log('>>>> check data state: ', title, content)
    }
    return (
        <div className="add-new-container">

            <div className="text-add-new">---Add new blogs ---</div>
            <div className="inputs-data">
                <label>Title: </label>
                <input type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </div>
            <div className="inputs-data">
                <label>Content: </label>
                <input type="text"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                />
            </div>
            <button className="btn-add-new" onClick={handleSubmitBtn}>Submit</button>

        </div>
    )
}

export default AddNewBlog;