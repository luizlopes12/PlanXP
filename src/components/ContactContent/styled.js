import styled from "styled-components";
const textSecondary = "#939598";
const borderColor = "#464646";
const menuNumberColor = "#292929";

const Styles = styled.section`
  display: flex;
  margin: 210px 0 0 80px;
  section {
    width: 50%;
  }
  .texts {
    margin-top: 20px;
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
  form {
    margin-top: 40px;
    width: 100%;
    p {
      margin: 10px 0;
    }
    input {
      background-color: transparent;
      border: 1px solid ${borderColor};
      height: 35px;
      width: 100%;
      border-radius: 0 18px 0 0;
      font-size: 18px;
      padding: 5px;
    }
    .group {
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 20px;
      .group-input {
        width: 48%;
      }
    }
    textarea {
      background-color: transparent;
      border: 1px solid ${borderColor};
      width: 100%;
      border-radius: 0 18px 0 0;
      resize: none;
      font-size: 18px;
      padding: 5px;
      margin-bottom: 10px;
    }
    button {
      cursor: pointer;
      margin-top: 20px;
      background-color: transparent;
      color: ${textSecondary};
      border: none;
      font-size: 22px;
      padding: 5px 10px;
      border-radius: 5px;
      &:hover {
        background-color: ${borderColor};
      }
      img {
        margin-left: 5px;
      }
    }
  }

  .cards {
    width: 80%;
    margin-left: 50px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
  }

  .card {
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .logo {
      width: 100px;
    }
    .link {
      text-decoration: none;
      text-transform: uppercase;
      color: ${textSecondary};
      font-size: 14px;
      &:after {
        display: block;
        content: "";
        border-bottom: solid 1px #fff;
        transform: scaleX(0);
        transition: transform 200ms ease-in-out;
      }
      &:hover:after {
        transform: scaleX(0.8);
      }
      &:after {
        transform-origin: 0% 50%;
      }
      img {
        margin-left: 10px;
      }
    }
    span {
      font-size: 18px;
    }
    .socials {
      margin-top: 20px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      img {
        cursor: pointer;
      }
    }
    .maps {
      margin-top: 20px;
      p {
        font-size: 15px;
        text-transform: uppercase;

        img {
          margin-left: 5px;
        }
      }
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    margin: 20px 0;
    section {
      width: 90%;
      margin: auto;
    }
    button {
      width: 100%;
      margin: 20px auto;
    }
    .cards {
      width: 100%;
      margin: 100px auto;
      display: flex;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: wrap;
    }

    .card {
      width: 90%;
      margin: auto;
      gap: 20px;
    }
  }
`;

export default Styles;
