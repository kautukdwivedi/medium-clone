import {React} from 'react'

export default function Blog(props) {
    
    let data = props.location.state;
    let article = "";
    for (let i = 0; i < data.Article.length; i++) {
        article += data.Article[i];       
    }
    return (
        <div className="Page">
            <h1>{data.Title}</h1>
            <img src = {data.Image} alt="item" />
            <p><span>Author : </span>{data.Creator}</p>
            <p><span>Date : </span>{data.Date}</p>
            <p><span>Article : </span>{article}</p>
            <p><span>Article Link : </span>{data.Link}</p>
            <div className="related-tags-list">
            {data.Tags.map((tag) => {
                return (<div className="related-tags">
                    {tag}
                </div>)
            })}
            </div>
        </div>
    )
}
