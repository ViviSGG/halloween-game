import React, { useState } from "react";
import Bruxa from "../assets/img/bruxa.png";
import Fada from "../assets/img/fada.png";
import Fantasma from "../assets/img/fantasma.png";
import Pirata from "../assets/img/pirata.png";
import Vampiro from "../assets/img/vampiro.png";
import Zumbi from "../assets/img/zumbi.png";
import "./style.css"

function Index() {
    const [conteudo, setConteudo] = useState([
        {
        nome: "Bruxa",
        imagem: Bruxa
        },
        {
        nome: "Fada",
        imagem: Fada
        },
        {
        nome: "Fantasma",
        imagem: Fantasma
        },
        {
        nome: "Pirata",
        imagem: Pirata
        },
        {
        nome: "Vampiro",
        imagem: Vampiro
        },
        {
        nome: "Zumbi",
        imagem: Zumbi
        }
    ]);
    return (
        <main>
            <h1>Halloween VnW</h1>
            <section>
                {/* map - é um método que recebe até 3 parametros */}
                {conteudo.map((elemento) => ( /* sem parametro ele conta quantos elementos tem dentro, com parametro ele tem acesso para puxar um elemento de dentro */
                <figure>
                    <img src={elemento.imagem} alt={elemento.nome}/>
                    <figcaption>{elemento.nome}</figcaption>
                </figure>
                ))}
                {conteudo.map((elemento) => ( 
                <figure>
                    <img src={elemento.imagem} alt={elemento.nome}/>
                    <figcaption>{elemento.nome}</figcaption>
                </figure>
                ))}
            </section>
        </main>
    );
}
export default Index;
