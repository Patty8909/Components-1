import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Artista.css'

class Artista extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  }

  render() {
    // const {artista, img, bio} = this.props;
    // const artista = this.props.artista;
    // const img = this.props.img;
    // const bio = this.props.bio;
    const list = this.props.data.map((el)=> 
      <div key={el.id} className="card col-12 col-sm-4 mt-3" id="card">
        <img className="card-img-top" src={el.imagen} alt={el.nombre}/>
        <div className="card-body">
          <h5 className="card-title">{el.nombre.toUpperCase()}</h5>
          <p className="card-text">{el.descripción}</p>
        </div>
      </div> 
    )

    return (
      <div className="container">
        <div className="row">{list}</div>
      </div>
    );
  }
}

export default Artista;

/* <h5>Canciones: </h5>
        <ul>{canciones}</ul> */
// tarjetas.map((tarjeta) => (
//   <Tarjeta imagenUrl={tarjeta.imagenUrl}
//     titulo={tarjeta.titulo}
//     descripcion={tarjeta.descripcion}/>
// <p>{this.props.bio}</p>
// key tiene q ser único, por eso le pongo un key
/* <h3>{artista}</h3> */
      // <img src={img}/>
      // <p>{bio}</p>
