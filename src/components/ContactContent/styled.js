import styled from "styled-components";
const menuNumberColor = "#292929";
const textSecondary = "#939598";

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
      border: 1px solid #464646;
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
      gap: 50px;
      .group-input {
        width: 48%;
      }
    }
    textarea {
      background-color: transparent;
      border: 1px solid #464646;
      width: 100%;
      border-radius: 0 18px 0 0;
      resize: none;
      font-size: 18px;
      padding: 5px;
      margin-bottom: 10px;
    }
    button{
        cursor: pointer;
        margin-top: 20px;
        background-color: transparent;
        color: ${textSecondary};
        border: none;
        font-size: 22px;
        padding: 5px 10px;
        border-radius: 5px;
        &:hover{
            background-color: #464646;
        }
        img{
            margin-left: 5px;
        }

    }
  }
`;

export default Styles;
