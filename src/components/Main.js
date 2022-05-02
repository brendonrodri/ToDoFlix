import styled from "styled-components";
import Slides from "./Slides";

import Capitao from "./assets/capitao.png";

const HeaderStyle = styled.header`
  width: 100%;
  height: 70vh;
  background: #000;
`;
const VetorDiv = styled.section`
  width: 100px;
  display: flex;
  position: relative;
  right: 2px;
  top: 10px;
  p {
    font-size: 1.3em;
  }
  svg {
    position: relative;
    left: 10px;
  }
`;
const Banner = styled.section`
  width: 80%;
  height: 80%;
  margin-top: 0;
  margin-left: 3%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    margin-bottom: 5px;
  }
`;
const BannerBox = styled.div`
  width: 90vw;
  height: 80%;
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    width: 40vw;
  }
  h1 {
    font-size: 2.5em;
    margin-top: 10px;
  }
  h3 {
    font-size: 1.2em;
  }

  div {
    width: 40vw;
    position: relative;
    left: 40px;
  }
`;
const Desc = styled.section`
  width: 100%;
  margin-top: 10px;
  font-size: 1.3em;
  text-align: justify;
`;
export default function Main() {
  return (
    <div>
      <HeaderStyle>
        <Banner>
          <BannerBox>
            <img src={Capitao} />

            <div>
              <svg
                id="Component_11_1"
                data-name="Component 11 – 1"
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="28"
                viewBox="0 0 21 22"
              >
                <ellipse
                  id="Ellipse_8"
                  data-name="Ellipse 8"
                  cx="10.5"
                  cy="11"
                  rx="10.5"
                  ry="11"
                  fill="#717171"
                />
                <path
                  id="Path_407"
                  data-name="Path 407"
                  d="M865.16-1403.7l-.893-.813c-3.172-2.877-5.266-4.774-5.266-7.1a3.355,3.355,0,0,1,3.388-3.388,3.689,3.689,0,0,1,2.772,1.287,3.689,3.689,0,0,1,2.772-1.287,3.355,3.355,0,0,1,3.388,3.388c0,2.328-2.094,4.225-5.267,7.108Z"
                  transform="translate(-854.5 1421)"
                  fill="#fff"
                />
              </svg>

              <h3>Visto recentemente</h3>
              <h1>Capitão Fantástico</h1>
              <Desc>
                Nas florestas do estado de Washington, um pai cria seus seis
                filhos longe da civilização, em uma rígida rotina de aventuras.
                Ele é forçado a deixar o isolamento e leva sua família para
                encarar o mundo, desafiando sua ideia do que significa ser pai.
              </Desc>
              <VetorDiv>
                <p> 4/5 </p>
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
                    fill="#6cbe61"
                  />
                </svg>
              </VetorDiv>
            </div>
          </BannerBox>
        </Banner>
        <Slides />
      </HeaderStyle>
    </div>
  );
}
