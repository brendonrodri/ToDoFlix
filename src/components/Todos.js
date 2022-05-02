import styled from "styled-components";
import react, { Component } from "react";
import Shrek from "./assets/shrek.png";
import QueHoras from "./assets/quehros.png";
import Sonho from "./assets/sonho.png";
import Sozinho from "./assets/sozinho.png";
import Capitao from "./assets/capitao.png";
import Miranha from "./assets/miranha.png";
import Galinhas from "./assets/galinhas.jpg";
import Amarelo from "./assets/AmarElo.jpg";
import Rocketman from "./assets/Rocketman.jpg";

const MainTodos = styled.div`
  width: 100%;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  padding-top: 0px;
  h1 {
    text-align: left;
    width: 90%;
    position: relative;
    right: 35px;
  }
  img {
    width: 30vw;
  }
`;

const FilmesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const FilmesBlock = styled.div`
  width: 30%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  margin: 20px;
  h2 {
    margin-top: 10px;
  }
  p {
    margin-top: 10px;
  }
`;
export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const VetorDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 9px;
  position: relative;
  left: 10px;
  svg {
    position: relative;
    left: 10px;
  }
`;

export default class Todos extends Component {
  state = {
    filmList: [
      {
        image: Shrek,
        title: "Sherk",
        desc:
          "Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão."
      },
      {
        image: Sozinho,
        title: "Hoje eu quero voltar...",
        desc:
          "Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga."
      },
      {
        image: Miranha,
        title: "Spider-Man",
        desc:
          "Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo."
      },
      {
        image: Sonho,
        title: "Um Sonho de Liberdade",
        desc:
          "Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão."
      },
      {
        image: QueHoras,
        title: "Que Horas Ela Volta?",
        desc:
          "Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel."
      },

      {
        image: Amarelo,
        title: "AmarElo",
        desc:
          "Nos bastidores do show no Theatro Municipal de São Paulo, o rapper e ativista Emicida celebra o grande legado da cultura negra brasileira."
      },
      {
        image: Rocketman,
        title: "Rocktman",
        desc:
          "Em reabilitação, Elton John relembra suas origens humildes, as músicas atemporais e os momentos de inspiração e excesso. Baseado em sua verdadeira história."
      }
    ]
  };

  render() {
    return (
      <MainTodos>
        <h1> Todos</h1>
        <FilmesContainer>
          {this.state.filmList.map((item) => (
            <FilmesBlock>
              <img src={item.image} />

              <Title>
                <h2> {item.title} </h2>
                <VetorDiv>
                  <h3> 4/5 </h3>
                  <svg
                    id="Icon_Thumbs_Up_Filled"
                    data-name="Icon / Thumbs Up / Filled"
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                  >
                    <rect id="Box" width="17" height="17" fill="none" />
                    <path
                      id="Path_1994"
                      data-name="Path 1994"
                      d="M97-8.286h2.805v-8.229H97Zm15.429-7.543a1.391,1.391,0,0,0-1.4-1.371H106.6l.666-3.134.021-.219a1.021,1.021,0,0,0-.309-.727l-.743-.72-4.615,4.519a1.326,1.326,0,0,0-.414.967v6.857a1.391,1.391,0,0,0,1.4,1.371h6.312a1.394,1.394,0,0,0,1.29-.837l2.118-4.834a1.328,1.328,0,0,0,.1-.5v-1.31l-.007-.007Z"
                      transform="translate(-96.143 23.714)"
                      fill="#fff"
                    />
                  </svg>
                </VetorDiv>
              </Title>

              <p> {item.desc} </p>
            </FilmesBlock>
          ))}
        </FilmesContainer>
      </MainTodos>
    );
  }
}
