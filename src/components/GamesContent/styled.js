import styled from "styled-components";
const menuNumberColor = "#292929";
const textSecondary = "#939598";

const Styles = styled.section`
  display: flex;
  margin: 210px 0 0 80px;
  section {
    width: 50%;
  }
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
  .texts {
    margin-top: 20px;
    h2 {
      font-weight: normal;
      font-size: 25px;
      color: ${textSecondary};
      margin-bottom: 15px;
    }
    span {
      font-size: 18px;
      color: ${textSecondary};
    }
    p {
      margin-top: 15px;
      font-size: 18px;

      max-width: 90%;
    }
  }

  .cards {
    display: flex;
    gap: 20px;

    .card {
      position: relative;
      width: 190px;
      p {
        margin-top: 20px;
        font-size: 14px;
        line-height: 20px;
      }
      .cardImage {
        display: flex;
        height: 190px;
        align-items: flex-end;
      }
      .action {
        font-size: 22px;
        line-height: 30px;
        margin-bottom: 15px;
      }
      span {
        font-size: 14px;
        text-transform: uppercase;
        color: ${textSecondary};
      }
    }
  }

  .link {
    text-decoration: none;
    text-transform: uppercase;
    color: ${textSecondary};
    font-size: 16px;
    &:after {
      display: block;
      content: "";
      border-bottom: solid 1px #fff;
      transform: scaleX(0);
      transition: transform 200ms ease-in-out;
    }
    &:hover:after {
      transform: scaleX(0.9);
    }
    &:after {
      transform-origin: 0% 50%;
    }
    img {
      margin-left: 10px;
    }
  }
  @media (max-width: 900px) {
    flex-direction: column;
    margin: 20px 10px 100px;
    section {
      width: 100%;
    }
    .title {
      span {
        top: -30px;
      }
    }
    .texts {
      margin-top: 10px;
      h2 {
        font-size: 20px;
      }
      span {
        font-size: 16px;
      }
      p {
        margin: 20px 0;
        font-size: 16px;
        max-width: 100%;
      }
    }

    .cards {
      flex-direction: column;
      align-items: center;

      .card {
        position: relative;
        width: 100%;
        p {
          margin-top: 20px;
          font-size: 14px;
          line-height: 20px;
        }
        .cardImage {
          display: flex;
          height: 100%;
          justify-content: center;
          img {
            width: 100%;
          }
          .icon {
            width: fit-content;
          }
        }
        .action {
          font-size: 20px;
          line-height: 25px;
          margin-bottom: 50px;
        }
        span {
          font-size: 16px;
          text-transform: uppercase;
          color: ${textSecondary};
          img {
            margin-left: 5px;
          }
        }
      }
    }
  }
`;

export default Styles;
