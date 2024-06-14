import MainHeader from '../components/Header/MainHeader';
import MainWrapper from '../components/Wrapper/MainWrapper';
import styled from 'styled-components';
import main_logo from '../media/main_logo.svg'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const Title = styled.a`
    color: #000;
    text-align: center;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 100px;
`;

const Detail = styled.a`
    color: #8A8A8A;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 200px;
`;

function MainPage() {
    return (
        <Container>
            <MainHeader/>
            
            <MainWrapper>
                <img src={main_logo} style={{
                    width: "405px",
                    height: "405",
                    marginBottom: "100px"
                }}/>
                <Title>
                    사용자 맞춤형 날씨 알람 서비스 Whenbrella
                </Title>
                <Detail>
                    로그인 후 위치, 일정 등록 후 서비스 이용이 가능합니다!<br/>
                    시간표 공유, 사용자 맞춤형 날씨알람 제공기능을 이용해 보세요!
                </Detail>
            </MainWrapper>
    
        </Container>
    )
}

export default MainPage;