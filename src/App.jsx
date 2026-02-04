import "./App.css";
import { Banner } from "./componentes/banner";
import { CardEvento } from "./componentes/CardEvento";
import { FormularioDeEvento } from "./componentes/FormularioDeEvento";
import { Tema } from "./componentes/Tema";

function App() {
  const temas = [
    {
      id: 1,
      nome: "front-end",
    },
    {
      id: 2,
      nome: "back-end",
    },
    {
      id: 3,
      nome: "devops",
    },
    {
      id: 4,
      nome: "inteligência artificial",
    },
    {
      id: 5,
      nome: "data science",
    },
    {
      id: 6,
      nome: "cloud",
    },
  ];

  const eventos = [
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      tema: temas[0],
      data: new Date(),
      titulo: "Mulhres no front",
    },
  ];


function adicionarEvento(evento){
   eventos.push(evento)
   console.log("Eventos =>", eventos)
}

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <FormularioDeEvento temas={temas} aoSubmete={adicionarEvento} />
      {temas.map((tema) => (
        <section key={tema.id}>
          <Tema tema={tema} />

          {eventos.map((evento, indice) => (
            <CardEvento key={evento.id ?? indice} evento={evento} />
          ))}
        </section>  
      ))}
    </main>
  );
}

export default App;
