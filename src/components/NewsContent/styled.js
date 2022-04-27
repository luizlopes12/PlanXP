import styled from "styled-components";

const bgColor = '#1e1e1e'
const textPrimary = "#ffffff";
const textSecondary = "#939598";
const menuNumberColor = "#292929";

const Styles = styled.section`
display: flex;
    margin: 210px 0 0 80px;
    .title{
    position: relative;
    p{
        font-size: 14px;
    }
    h1{
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
`;


export default Styles;