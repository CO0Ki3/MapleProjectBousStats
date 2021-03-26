import styled from 'styled-components';

const InfoHeaderStyle = styled.div`
    background-color: red;
    padding: 1.8%;
    font-size: 5vh;
`

function InfoHeader() {
    return(
        <InfoHeaderStyle>한국 메이플스토리 머시기머시기</InfoHeaderStyle>
    );
}

export default InfoHeader;