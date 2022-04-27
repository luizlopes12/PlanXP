import styled from "styled-components";

const textSecondary = "#939598";
const menuNumberColor = "#292929";

const Styles = styled.section`
  margin: 210px 0 0 80px;
  section {
    display: flex;
    gap: 80px;
    align-items: flex-end;
    .title {
      position: relative;
      p {
        font-size: 14px;
      }
      h1 {
        font-size: 40px;
        font-weight: normal;
        color: ${textSecondary};
      }
      span {
        position: absolute;
        top: -35px;
        left: 0;
        z-index: -999;
        font-size: 100px;
        font-weight: bold;
        color: ${menuNumberColor};
      }
    }
    .button {
      color: ${textSecondary};
      display: flex;
      align-items: flex-end;
      img {
        margin-left: 5px;
      }
    }
  }
  .cards {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  @media (max-width: 900px) {
    margin: 20px 10px;
    section {
      flex-direction: column;
      gap: 20px;
      align-items: initial;
      .title {
        span {
          top: -30px;
        }
      }
      .button {
        font-size: 18px;
      }
    }
    .cards {
      margin-top: 50px;
    }
  }
`;

export default Styles;
