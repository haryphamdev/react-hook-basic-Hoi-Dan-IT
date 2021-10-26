import { useParams } from 'react-router-dom';

const DetailBlog = () => {
    let { id } = useParams();
    console.log('>>> check use param: ', useParams())
    return (
        <h1> Hello detail blogs with id = {id}</h1>
    )
}

export default DetailBlog;