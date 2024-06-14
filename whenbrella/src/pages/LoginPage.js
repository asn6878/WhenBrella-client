import styled from 'styled-components';
import MainHeader from '../components/Header/MainHeader';
import MainWrapper from '../components/Wrapper/MainWrapper';
import InputForm from '../components/Auth/InputForm';

const S = {
    Container: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    `
}

const LoginPage = () => {
    return (
        <>
            <S.Container>
                <MainHeader/>
                <MainWrapper>
                    <h1>로그인</h1>
                    <InputForm placeHolder="아이디"/>
                    <InputForm placeHolder="비밀 번호"/>
                </MainWrapper>
            </S.Container>
        </> 
    );
}

export default LoginPage;