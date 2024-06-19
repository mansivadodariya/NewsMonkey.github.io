import React from 'react'

const Newsitem= (props)=> {
   

    let {title, description,imageurl,newsurl,author,date,source} = props;
    return (
      <div>
        <div className="card" >
            <div style={{display:'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}} >
            <span className=" bg-danger  badge ">{source}
        </span></div>
        <img src={!imageurl?"https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-88307658.jpg?c=16x9&q=w_800,c_fill":imageurl} className="card-img-top"   alt={title}/>
        <div className="card-body">
            <h5 className="card-title"> {title}..</h5>
            <p className="card-text">{description}..</p>
            <p className="card-text"><small className="text-body-secondary">By {author?author:"Unkown"} on {new Date (date).toGMTString()}</small></p>
            <a href={newsurl} target='_blank' rel="noreferrer" className="btn btn-dark">Read more</a>
        </div>
        </div>
      </div>
    )
  }


export default Newsitem
