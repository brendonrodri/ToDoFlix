import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import "./styles.css";
import Mask from "./components/assets/Mask.png";
import Main from "./components/Main";
import Todos from "./components/Todos";
import ToDoFlix from "./components/assets/todologo.png";
import ArrowDown from "./components/assets/Group2.svg";
import SearchIcon from "./components/assets/Search.png";
import Perfil from "./components/assets/Group 32.png";
import Shrek from "./components/assets/shrek.png";
import QueHoras from "./components/assets/quehros.png";
import Sonho from "./components/assets/sonho.png";
import Sozinho from "./components/assets/sozinho.png";
import Miranha from "./components/assets/miranha.png";
import Amarelo from "./components/assets/AmarElo.jpg";
import Rocketman from "./components/assets/Rocketman.jpg";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: Arial, Helvetica, sans-serif;


}
`;

const Nav = styled.nav`
  width: 100%;
  height: 14vh;

  color: #fff;
  display: flex;
  justify-content: space-between;
  background: #000;
  font-size: 18px;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    left: 1%;
  }
  ul li {
    margin: 10px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const DropDownList = styled.ul`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 73px;
  background: #000;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`;
const ArrowD = styled.img`
  position: relative;
  right: 5px;
`;
const Logo = styled.img`
  margin: 8px 15px;
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  right: 5%;

  input {
    width: 27vw;
    height: 5vh;
    margin: 10px;
    background: #2c2c2c;
    border-radius: 4px;
    border: none;
    background-image: SearchIcon;
  }
  input::-webkit-input-placeholder {
    color: #fff;
    padding: 10px;
    font-size: 16px;
  }
  input::-moz-placeholder {
    color: #fff;
    padding: 15px;
    margin-left: 10px;
    font-size: 16px;
  }
`;
const Button = styled.button`
  background: #e71b27;
  width: 9vw;
  height: 5vh;
  margin: 10px;
  color: #fff;

  border: none;
  font-size: 16px;
  &:hover {
    border-radius: 4px;
  }
`;
const ButtonModal = styled.button`
  background: none;
  border: none;
  position: absolute;
  left: 94%;
  top: 15px;
`;
const Modal = styled.div`
  width: 55%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: #000;
  z-index: 1;
  position: absolute;
  margin: 0 auto;
  left: 25%;
  border-radius: 10px;
  opacity: 1;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #808080;
  color: #fff;
  label {
    font-weight: bold;
  }
  input {
    margin-bottom: 10px;
  }
  textarea {
    width: 25vw;
    height: 10vh;
    background: #2c2c2c 0% 0% no-repeat padding-box;
    border-radius: 4px;
    border: none;
    opacity: 1;
  }
`;
const SearchContainer = styled.div`
  width: 100%;
  background: #000;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  img {
    width: 20vw;
  }
`;

const CardBox = styled.div`
  width: 20%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  margin: 0px 20px;
  h2 {
    margin-top: 10px;
  }
  p {
    margin-top: 10px;
  }
`;
export default class App extends Component {
  state = {
    dropdownList: false,
    modal: false,

    movieFiltred: [],
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

  handleChange = (event) => {
    let { filmList } = this.state;

    const movieFilter = filmList.filter((item) => {
      if (item.title.toLowerCase().includes(event.target.value.toLowerCase())) {
        return true;
      }
    });

    this.setState({
      movieFiltred: movieFilter
    });
  };

  openDrodown = () => {
    this.setState({
      dropdownList: !this.state.dropdownList
    });
  };
  openModal = () => {
    this.setState({
      modal: true
    });
  };
  closeModal = () => {
    this.setState({
      modal: false
    });
  };
  render() {
    return (
      <>
        <GlobalStyle />

        <Nav>
          <ul>
            <li>
              <Logo src={ToDoFlix} />{" "}
            </li>
            <li>
              {" "}
              <Link to="/" className="link">
                {" "}
                Início{" "}
              </Link>{" "}
            </li>

            <li onClick={this.openDrodown}>
              {" "}
              Categorias
              {this.state.dropdownList && (
                <DropDownList>
                  <li> Categorias </li>
                  <li>
                    <Link to="/Todos" className="link">
                      {" "}
                      Todos{" "}
                    </Link>
                  </li>
                  <li> Favoritos </li>
                  <li> Já vistos </li>
                  <li> Adicionados </li>
                </DropDownList>
              )}
            </li>

            <ArrowD src={ArrowDown} />
          </ul>
          <InputContainer>
            <Button onClick={this.openModal}>Adicionar Filme</Button>
            <div>
              <img src={SearchIcon} />
              <input
                className="search"
                type="search"
                onChange={this.handleChange}
                placeholder="Pesquisar"
              />
            </div>
            <img src={Perfil} />
            <img src={ArrowDown} />
          </InputContainer>
        </Nav>
        <SearchContainer className="FilmesBox">
          {this.state.movieFiltred.map((item) => (
            <CardBox>
              <img src={item.image} />
              <h3> {item.title} </h3>
              <p>{item.desc}</p>
            </CardBox>
          ))}
        </SearchContainer>

        {this.state.modal && (
          <Modal>
            <div className="modalTitle">
              <h2> Adicionar Filme </h2>
            </div>
            <div className="modalFlex">
              <ButtonModal onClick={this.closeModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24.458"
                  height="24.458"
                  viewBox="0 0 24.458 24.458"
                >
                  <path
                    id="_"
                    data-name="+"
                    d="M7.413,17.294V9.882H0V7.412H7.413V0h2.47V7.412h7.413v2.47H9.882v7.412Z"
                    transform="translate(12.229) rotate(45)"
                    fill="#e3e2e2"
                  />
                </svg>
              </ButtonModal>

              <div className="inputArea1">
                <label>Título</label>
                <br />
                <input className="inputName" type="text" />
                <br />
                <label>Descrição</label>
                <br />
                <textarea />
                <div>
                  <h3> Status </h3>
                  <label className="Radio"> Já assisti </label>
                  <input type="radio" />
                  <label className="Radio"> Ainda não assisti </label>
                  <input type="radio" />
                </div>
                <div>
                  <h3> Nota </h3>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="37"
                      height="37"
                      viewBox="0 0 37 37"
                    >
                      <g id="Polygon_1" data-name="Polygon 1" fill="none">
                        <path
                          d="M18.5,0l5.55,12.421L37,14.133l-9.52,9.388L29.934,37,18.5,30.381,7.066,37,9.52,23.521,0,14.133l12.95-1.712Z"
                          stroke="none"
                        />
                        <path
                          d="M 18.5 2.451271057128906 L 13.63503074645996 13.33921051025391 L 2.157791137695312 14.85623168945312 L 10.59839057922363 23.18016052246094 L 8.437618255615234 35.05073165893555 L 18.5 29.22576904296875 L 28.56238174438477 35.05073165893555 L 26.401611328125 23.18016052246094 L 34.84220886230469 14.85623168945312 L 23.36497116088867 13.33921051025391 L 18.5 2.451271057128906 M 18.5 0 L 24.04999923706055 12.42106056213379 L 37 14.13274002075195 L 27.4800910949707 23.52106094360352 L 29.93362998962402 37 L 18.5 30.38124084472656 L 7.066370010375977 37 L 9.51991081237793 23.52106094360352 L 0 14.13274002075195 L 12.95000076293945 12.42106056213379 L 18.5 0 Z"
                          stroke="none"
                          fill="#b1b1b1"
                        />
                      </g>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="37"
                      height="37"
                      viewBox="0 0 37 37"
                    >
                      <g id="Polygon_1" data-name="Polygon 1" fill="none">
                        <path
                          d="M18.5,0l5.55,12.421L37,14.133l-9.52,9.388L29.934,37,18.5,30.381,7.066,37,9.52,23.521,0,14.133l12.95-1.712Z"
                          stroke="none"
                        />
                        <path
                          d="M 18.5 2.451271057128906 L 13.63503074645996 13.33921051025391 L 2.157791137695312 14.85623168945312 L 10.59839057922363 23.18016052246094 L 8.437618255615234 35.05073165893555 L 18.5 29.22576904296875 L 28.56238174438477 35.05073165893555 L 26.401611328125 23.18016052246094 L 34.84220886230469 14.85623168945312 L 23.36497116088867 13.33921051025391 L 18.5 2.451271057128906 M 18.5 0 L 24.04999923706055 12.42106056213379 L 37 14.13274002075195 L 27.4800910949707 23.52106094360352 L 29.93362998962402 37 L 18.5 30.38124084472656 L 7.066370010375977 37 L 9.51991081237793 23.52106094360352 L 0 14.13274002075195 L 12.95000076293945 12.42106056213379 L 18.5 0 Z"
                          stroke="none"
                          fill="#b1b1b1"
                        />
                      </g>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="37"
                      height="37"
                      viewBox="0 0 37 37"
                    >
                      <g id="Polygon_1" data-name="Polygon 1" fill="none">
                        <path
                          d="M18.5,0l5.55,12.421L37,14.133l-9.52,9.388L29.934,37,18.5,30.381,7.066,37,9.52,23.521,0,14.133l12.95-1.712Z"
                          stroke="none"
                        />
                        <path
                          d="M 18.5 2.451271057128906 L 13.63503074645996 13.33921051025391 L 2.157791137695312 14.85623168945312 L 10.59839057922363 23.18016052246094 L 8.437618255615234 35.05073165893555 L 18.5 29.22576904296875 L 28.56238174438477 35.05073165893555 L 26.401611328125 23.18016052246094 L 34.84220886230469 14.85623168945312 L 23.36497116088867 13.33921051025391 L 18.5 2.451271057128906 M 18.5 0 L 24.04999923706055 12.42106056213379 L 37 14.13274002075195 L 27.4800910949707 23.52106094360352 L 29.93362998962402 37 L 18.5 30.38124084472656 L 7.066370010375977 37 L 9.51991081237793 23.52106094360352 L 0 14.13274002075195 L 12.95000076293945 12.42106056213379 L 18.5 0 Z"
                          stroke="none"
                          fill="#b1b1b1"
                        />
                      </g>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="37"
                      height="37"
                      viewBox="0 0 37 37"
                    >
                      <g id="Polygon_1" data-name="Polygon 1" fill="none">
                        <path
                          d="M18.5,0l5.55,12.421L37,14.133l-9.52,9.388L29.934,37,18.5,30.381,7.066,37,9.52,23.521,0,14.133l12.95-1.712Z"
                          stroke="none"
                        />
                        <path
                          d="M 18.5 2.451271057128906 L 13.63503074645996 13.33921051025391 L 2.157791137695312 14.85623168945312 L 10.59839057922363 23.18016052246094 L 8.437618255615234 35.05073165893555 L 18.5 29.22576904296875 L 28.56238174438477 35.05073165893555 L 26.401611328125 23.18016052246094 L 34.84220886230469 14.85623168945312 L 23.36497116088867 13.33921051025391 L 18.5 2.451271057128906 M 18.5 0 L 24.04999923706055 12.42106056213379 L 37 14.13274002075195 L 27.4800910949707 23.52106094360352 L 29.93362998962402 37 L 18.5 30.38124084472656 L 7.066370010375977 37 L 9.51991081237793 23.52106094360352 L 0 14.13274002075195 L 12.95000076293945 12.42106056213379 L 18.5 0 Z"
                          stroke="none"
                          fill="#b1b1b1"
                        />
                      </g>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="37"
                      height="37"
                      viewBox="0 0 37 37"
                    >
                      <g id="Polygon_1" data-name="Polygon 1" fill="none">
                        <path
                          d="M18.5,0l5.55,12.421L37,14.133l-9.52,9.388L29.934,37,18.5,30.381,7.066,37,9.52,23.521,0,14.133l12.95-1.712Z"
                          stroke="none"
                        />
                        <path
                          d="M 18.5 2.451271057128906 L 13.63503074645996 13.33921051025391 L 2.157791137695312 14.85623168945312 L 10.59839057922363 23.18016052246094 L 8.437618255615234 35.05073165893555 L 18.5 29.22576904296875 L 28.56238174438477 35.05073165893555 L 26.401611328125 23.18016052246094 L 34.84220886230469 14.85623168945312 L 23.36497116088867 13.33921051025391 L 18.5 2.451271057128906 M 18.5 0 L 24.04999923706055 12.42106056213379 L 37 14.13274002075195 L 27.4800910949707 23.52106094360352 L 29.93362998962402 37 L 18.5 30.38124084472656 L 7.066370010375977 37 L 9.51991081237793 23.52106094360352 L 0 14.13274002075195 L 12.95000076293945 12.42106056213379 L 18.5 0 Z"
                          stroke="none"
                          fill="#b1b1b1"
                        />
                      </g>
                    </svg>
                    <p>(0/5) </p>
                  </div>
                </div>
              </div>
              <div>
                <h3> Imagem da Capa </h3>
                <img className="Mask" src={Mask} />
                <button className="imgButton"> Selecionar imagem </button>
              </div>
            </div>
            <div className="buttonBox">
              <button className="cancelButton"> Cancelar</button>
              <button className="saveButton"> Guardar </button>
            </div>
          </Modal>
        )}

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Todos" element={<Todos />} />
        </Routes>
      </>
    );
  }
}
