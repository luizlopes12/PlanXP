import styled from "styled-components";

const bgColor = '#1e1e1e'
const textPrimary = "#ffffff";
const textSecondary = "#939598";
const menuNumberColor = "#292929";

const Styles = styled.header`
  width: 230px;
  min-height: 100vh;
  border-right: 2px solid #3e3e3e;
  color: ${textPrimary};
  .logo {
    margin: 40px 40px 0px;
  }
  button {
    display: none;
  }
  nav {
    ul {
      list-style: none;
      border-bottom: 1px solid #3e3e3e;

      li {
        position: relative;
        margin: 80px 0 80px 40px;
      }
    }
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 16px;
    &:after {
      display: block;
      content: "";
      border-bottom: solid 1px #fff;
      transform: scaleX(0);
      transition: transform 200ms ease-in-out;
    }
    &:hover:after {
      transform: scaleX(0.7);
    }
    &:after {
      transform-origin: 0% 50%;
    }
  }
  span {
    position: absolute;
    top: -40px;
    left: 0;
    z-index: -999;
    font-size: 80px;
    font-weight: bold;
    color: ${menuNumberColor};
  }
  .bottomLink {
    position: relative;
    margin: 150px 0 0 40px;
    padding-bottom: 30px;
    p {
      max-width: 150px;
    }
    a {
      text-transform: none;
      color: ${textSecondary};
      font-weight: normal;
    }
    img {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }

  @media (max-width: 900px) {
    border-right: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    min-height: 80px;
    aside {
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #3e3e3e;
    }
    .logo {
      margin: 20px 0;
      transform: scale(0.75);
    }
    .navbutton {
      margin-right: 20px;
      background: transparent;
      border: none;
      display: flex;
      flex-direction: column;
      gap: ${(props) => (props.toggled ? "5px" : "0")};
      transition: all 0.2s linear;

      div {
        border: 1px solid #fff;
        border-radius: 1px;
        width: 20px;
      }
      .bar1 {
        margin: none;
        transform: ${(props) =>
          props.toggled ? "" : "rotate(45deg) translate(2px, 0px)"};
      }
      .bar2 {
        margin: none;
        opacity: ${(props) => (props.toggled ? "1" : "0")};
      }
      .bar3 {
        transform: ${(props) =>
          props.toggled ? "" : "rotate(-45deg) translate(2px, -1px)"};
      }
    }

    nav {
      position: fixed;
      background-color: ${bgColor};
      z-index: 9999;
      top: 80px;
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: all .2s ease-in-out;
      transform: ${(props) =>
        props.toggled ? "translateX(100vh)" : "translateX(0)"};


        ul{
          margin-top: 50px;
          width: max-content;
          li{
            width: max-content;
            margin: 50px 0;
          }
        }
        span {
    position: absolute;
    top: -30px;
    left: 0;
    z-index: -999;
    font-size: 60px;
    font-weight: bold;
    color: ${menuNumberColor};
  }
  .bottomLink {
    position: relative;
    margin: 40px 0 0 40px;
    p {
      max-width: 150px;
    }
    a {
      text-transform: none;
      color: ${textSecondary};
      font-weight: normal;
    }
    img {
      position: absolute;
      right: 5px;
      bottom: -15px;
    }
  }
    }
  }
`;

export default Styles;
