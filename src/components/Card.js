import React from 'react';

function Card(props) {
    return(
<div class="card">
  <img src={props.image} class="card-img-top imagPat" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{props.pet}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go</a>
  </div>
</div>
    )
}

export default Card;