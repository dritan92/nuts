import React, {Component} from 'react'

export default (props) => {
  return(
    <article id = {props.id}>
      <h2 className="major">
        {props.title}
      </h2>
      <span className="image main">
        <img src = {props.image} alt="" />
      </span>
      <p>
        {props.body}
      </p>
      <p>
        {props.description}
      </p>
      <p description = {props.description} />
    </article>

  )
}
