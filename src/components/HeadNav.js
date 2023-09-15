import styled from "styled-components";
const HeadWrapper = styled.div`
  border:solid 1px black;
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100vw;
  padding:auto;
`;
const NavWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    width:10vw;

`;
const HeadNav=()=>{
    return(<HeadWrapper>
        <h1>shop</h1>
        <NavWrapper>
            <p>cart</p>
            <p>user</p>
            <p>login/out</p>
        </NavWrapper>
    </HeadWrapper>)
}
export default HeadNav;