import { useHistory } from "react-router-dom";

const NotFound = () => {
    let history = useHistory()

    const handleClickBtn = () => {
        history.push('/')
    }

    return (
        <div className="not-found-container">
            <h4>This Page Isn't Available</h4>
            <h5>The link may be broken, or the page may have been removed. Check to see if the link you're trying to open is correct.</h5>
            <button class="btn btn-primary" onClick={handleClickBtn}>Go to HomePage</button>
        </div>
    )
}

export default NotFound;