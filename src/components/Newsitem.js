import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title , description , img , newsurl , author , date, source} = this.props ;
        return (
            <div>
                <div className="card" >
            <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={ {zIndex: '1'} } >
                            {source}
                            <span class="visually-hidden">unread messages</span>
                        </span></h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small class="text-muted">By {author ?  author : "Unknown" } on {new Date(date).toGMTString()}</small></p>
                        <a rel= "noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem ;
