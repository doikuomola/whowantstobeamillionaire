// @ts-nocheck
import { useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 250px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
`;
const Input = styled.input`
    width: 100%;
    height: 30px;
    border: none;
    border-radius: 5px;
    text-align: center;
    font-size: 18px;
    &:focus {
        outline: none;
    }
`;
const Button = styled.button`
    width: 100%;
    height: 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
`;

const Start = ({ setUsername }) => {
    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.value && setUsername(inputRef.current.value);
    };
    return (
        <Container>
            <Input placeholder="enter your name" ref={inputRef} />
            <Button onClick={handleClick}>Start</Button>
        </Container>
    );
};

export default Start;
