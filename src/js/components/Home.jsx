import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./Card";
import { use } from "react";

//create your first component


export const Home = () => {


	
	const fondoNormal = "https://wallpapers.com/images/high/simpsons-pc-k24mil7trr87xj8x.webp";
	const fondoHalloween = "https://variety.com/wp-content/uploads/2021/10/Treehouse-of-Horror-XXXII-photo-edit-e1633367961184.png?w=1000&h=563&crop=1";


	const personajes = {
		homero: {
			nombre: "Homero Simpson",
			frase: "¡D'oh!",
			imagenNormal:
				"https://imgs.search.brave.com/1vcLMSES646IeTBaObQMoHvbax_5R2mXVk6dDnEhDu8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L3Bh/ZHJlZGVmYW1pbGlh/L2ltYWdlcy9iL2I2/L0hvbWVyb19TaW1w/c29uLnBuZy9yZXZp/c2lvbi9sYXRlc3Q_/Y2I9MjAxODAyMTUw/NTEzMzMmcGF0aC1w/cmVmaXg9ZXM",
			imagenHalloween:
				"https://preview.redd.it/i-drew-homer-simpson-as-the-trapper-v0-szwqf1v3ie6f1.png?width=640&crop=smart&auto=webp&s=b71ad98f0e7fe3e991198cd1b90e9c212bf27f46",
			color: "warning"
		},
		lisa: {
			nombre: "Lisa Simpson",
			frase: "¡Si alguien me necesita, estaré en mi habitación!",
			imagenNormal:
				"https://imgs.search.brave.com/Vla_RQdaQVlS6fgWFvu5dvuGFE7yJEcsaQ1pftq597E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L3Np/bXBzb25zL2ltYWdl/cy85LzliL1Byb2Zp/bGVfLV9MaXNhX1Np/bXBzb24ucG5nL3Jl/dmlzaW9uL2xhdGVz/dC9zY2FsZS10by13/aWR0aC1kb3duLzI2/OD9jYj0yMDI1MDQw/MzA3MTAxNQ",
			imagenHalloween:
				"https://mystickermania.com/cdn/stickers/simpsons-stickers/lizard-queen-lisa-512x512.png",
			color: "info"
		},
		bart: {
			nombre: "Bart Simpson",
			frase: "¡Ay caramba!",
			imagenNormal:
				"https://imgs.search.brave.com/TD9C7U0mViLYHtNoo3L1zwdA6by62-ES1dQ0uFjOjeo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvY29v/bC1iYXJ0LXNpbXBz/b24taW4tc3BhY2Ut/YmFja2dyb3VuZC1x/dW14NHRxMTBob253/ZnB1LmpwZw",
			imagenHalloween:
				"https://imgs.search.brave.com/9wN8cAe5ZkfTvaKt9JpIm_VxHjUFY3kjx-CPjRBIEz8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L3Np/bXBzb25zL2ltYWdl/cy9hL2FhL0h1Z29f/U2ltcHNvbjIucG5n/L3JldmlzaW9uL2xh/dGVzdC9zY2FsZS10/by13aWR0aC1kb3du/LzI2OD9jYj0yMDE4/MDEyNjAwMjA0OCZw/YXRoLXByZWZpeD1m/cg",
			color: "danger"
		}
	};
		const [personajeActual, setPersonajeActual] = useState("homero")
		const [modoHalloween, setModoHalloween] = useState(false)
		
			const personaje = personajes[personajeActual]

			const imagenMostrar = modoHalloween ? personaje.imagenHalloween : personaje.imagenNormal
			

	return (
		<div
			className="application"
			style={{
				background: "lightblue",
				backgroundImage: `url(${modoHalloween ? fondoHalloween : fondoNormal})`,
				backgroundSize: "cover",
				height: "100vh",
				backgroundRepeat: "no-repeat"
			}}
		>
			<div className="container pt-4 text-center">
				<h2>Selecciona un personaje</h2>
				<div className="mb-3">
					<button className="btn btn-primary me-2" onClick={()=> setPersonajeActual("homero")}>"Homero"</button>
					<button className="btn btn-success me-2"onClick={()=> setPersonajeActual("lisa")}>"Lisa"</button>
					<button className="btn btn-danger me-2"onClick={()=> setPersonajeActual("bart")}>"Bart"</button>
				</div>
			</div>
			<button onClick={()=>setModoHalloween(!modoHalloween)}>{modoHalloween ? "Desactivar Modo Halloween" : "Activar Modo Halloween"}</button>
			<Card 
			personaje={personaje} imagenMostrar={imagenMostrar}/>

		</div>
	)


};

