import styled from 'styled-components';

const S = {
    Container: styled.div`
        display: flex;
        justify-content: center; /* 왼쪽과 오른쪽에 요소 배치 */
        align-items: center; /* 수직 중앙 정렬 */
        width: 100%;
        height: 100px;
        background: #CAFCF9;
    `,
    Title: styled.div`
        color: #000;
        font-family: "Noto Sans";
        font-size: 52px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-right: 682px;
    `,
    Login: styled.button`
        width: 100px;
        height: 55px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
        background: #007aff;
        color: #FFF;
        font-family: Noto Sans KR;
        font-size: 25px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    `,
}

const MainHeader= () => {
    return (
        <S.Container>
            <S.Title href="#">WhenBrella</S.Title>
            <S.Login href="#">로그인</S.Login>
        </S.Container>
    );
}

export default MainHeader;