import styled from 'styled-components';

const Input = styled.input`
    width: 300px;
    height: 50px;
    margin-bottom: 20px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #CCC;
    border-radius: 5px;
    outline: none;

    &:focus {
        border-color: #007aff;
    }
`;

const LoginForm = ({ placeHolder }) => {
    return (
        <>
            <Input type="text" placeholder={placeHolder} />
        </>
        
    );
}

export default LoginForm;