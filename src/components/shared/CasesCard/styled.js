import styled from "styled-components";

const cardColor = "#292929";
const textSecondary = "#939598";

const Styles = styled.div`
  margin-top: 50px;
  width: 280px;
  background-color: ${cardColor};
  cursor: pointer;
  .img {
    position: relative;
    .badge {
      position: absolute;
      display: flex;
      justify-content: end;
      width: 70px;
      height: 70px;
      background-color: #1e1e1e;
      clip-path: polygon(100% 0, 0 0, 100% 100%);
      z-index: 999;
      right: 0;
      top: 0;
      img {
        width: initial;
        height: 20px;
      }
    }
  }

  .desc {
    padding: 20px;
    .gamename {
      width: max-content;
      font-weight: bold;
      padding: 1px 6px;
      color: #000;
      background-color: #939598;
    }
    .title {
      margin: 5px 0;
      font-size: 20px;
      color: ${textSecondary};
    }
    .text {
      font-size: 14px;
      line-height: 25px;
    }
    .link {
      margin-top: 20px;
      color: ${textSecondary};
      display: flex;
      align-items: flex-end;
      img {
        margin-left: 5px;
      }
    }
  }

  @media (max-width: 900px) {
    margin-top: 5px;
    width: 100%;
    .img {
      img {
        width: 100%;
      }
    }
  }

  .desc {
    padding: 20px;
    .title {
      margin: 5px 0;
      font-size: 22px;
    }
    .text {
      font-size: 18px;
      line-height: 25px;
    }
    .link {
      margin-top: 20px;
      font-size: 25px;
      img {
        margin-left: 2px;
      }
    }
  }
`;

export default Styles;
