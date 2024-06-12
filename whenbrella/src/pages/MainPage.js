import MainHeader from '../components/Header/MainHeader';
import MainWrapper from '../components/Wrapper/MainWrapper';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

function MainPage() {
    return (
        <Container>
            <MainHeader/>
            
            <MainWrapper>
                메인 화면
            </MainWrapper>
    
        </Container>
    )
}

export default MainPage;