import React from "react";
import "./styles.css";
import { images } from "../carousel/CarouselFunc";

function App() {
  return (
    <>
      <div className="container">
        <div className="left-column">
          <div className="box colorida">
            <a><h3>Todos</h3></a>
            <a><h3>Assistindo</h3></a>
            <a><h3>Para Assistir</h3></a>
          </div>
        </div>
        <div className="right-column">
          <div className="box">
            <div className="row">
              {images.slice(0, 3).map((image) => (
                <div key={image.id} className="teste" >
                  <img src={image.src}className="imagem"  alt="Placeholder" />
                  <p className="title">{image.title}</p>
                </div>
              ))}
            </div>
            <div className="row">
              {images.slice(3, 6).map((image) => (
                <div key={image.id} className="teste" >
                  <img src={image.src}className="imagem"  alt="Placeholder" />
                  <p className="title">{image.title}</p>
                </div>
              ))}
            </div>
            <div className="row">
              {images.slice(6, 9).map((image) => (
                <div key={image.id} className="teste" >
                  <img src={image.src}className="imagem"  alt="Placeholder" />
                  <p className="title">{image.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
