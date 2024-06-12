import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1100px;
    height: 1080px;
    border: 1px solid #000;
    border-top : none;
    border-bottom : none;
    background: #FFF;
`;


export default function MainWrapper() {
    return (
        <Wrapper/>
    );
}