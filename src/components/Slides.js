import Carousel from "nuka-carousel";
import styled from "styled-components";
import { Title, VetorDiv } from "./Todos";
import react, { Component } from "react";
import { render } from "react-dom";
import Shrek from "./assets/shrek.png";
import QueHoras from "./assets/quehros.png";
import Sonho from "./assets/sonho.png";
import Sozinho from "./assets/sozinho.png";
import Capitao from "./assets/capitao.png";
import Miranha from "./assets/miranha.png";
import Galinhas from "./assets/galinhas.jpg";
import Amarelo from "./assets/AmarElo.jpg";
import Rocketman from "./assets/Rocketman.jpg";
import Seta from "./assets/seta.png";
const SlideStyle = styled.section`
  width: 100;
  height: 70vh;
  background: #000;
  color: #fff;
  padding: 30px;
`;
const CarouselList = styled.ul`
  width: 30vw;
  margin: 10px;
  h2 {
    margin: 10px 0px;
  }
`;
export const Img = styled.img`
  width: 22vw;
`;
const Destaques = styled.h2`
  margin: 10px;
`;
const MovieDesc = styled.p`
  width: 20vw;
`;

const info = {
  slidesToShow: 4,

  wrapAround: true,
  keyCodeConfig: true,
  autoplay: false,
  autoplayInterval: 3000,
  dragging: true
};
export default class App extends Component {
  state = {
    itens: [
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
      <SlideStyle>
        <Destaques> Destaques </Destaques>
        <Carousel
          {...info}
          renderBottomCenterControls={false}
          defaultControlsConfig={{
            nextButtonText: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="68"
                height="68"
                viewBox="0 0 68 68"
              >
                <g
                  id="Group_8"
                  data-name="Group 8"
                  transform="translate(-1309 -621)"
                >
                  <rect
                    id="Box"
                    width="68"
                    height="68"
                    transform="translate(1309 621)"
                    fill="none"
                  />
                  <path
                    id="Icon_Keyboard_Arrow_-_Up_Dark"
                    data-name="Icon / Keyboard Arrow - Up / Dark"
                    d="M30.033,20.967,17,7.933,3.967,20.967,0,17,17,0,34,17Z"
                    transform="translate(1353.483 637.15) rotate(90)"
                    fill="#fff"
                  />
                </g>
              </svg>
            ),

            pagingDotsStyle: {
              fill: "blue"
            }
          }}
        >
          {this.state.itens.map((item) => (
            <CarouselList>
              <Img src={item.image} />
              <Title>
                <h2>{item.title}</h2>
                <VetorDiv></VetorDiv>
              </Title>

              <MovieDesc>{item.desc}</MovieDesc>
            </CarouselList>
          ))}
        </Carousel>
      </SlideStyle>
    );
  }
}
