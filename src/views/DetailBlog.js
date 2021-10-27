import { useParams, useHistory } from 'react-router-dom';

const DetailBlog = () => {
    let { id } = useParams();
    let history = useHistory();

    const handleBackData = () => {
        history.push("/blog");
    }

    return (
        <>
            <div> <span onClick={handleBackData}>&lt;-- Back </span></div>
            <h1> Hello detail blogs with id = {id}</h1>
        </>
    )
}

export default DetailBlog;