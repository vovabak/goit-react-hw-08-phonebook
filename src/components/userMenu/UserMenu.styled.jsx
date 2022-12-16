import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    flex-wrap: wrap;
    `

export const UserInfo = styled.p`
    margin: 5px;
    font-size: 16px;
    font-weight: bold;
    color: #1976d2;
    `

export const Button = styled.button`
    margin-left: 5px;
    padding: 10px;
    background-color: #1976d2;    
    color: #FFF;
    border-radius: 4px;    
    border: none;
    opacity: 1;
    font-size: 16px;
    font-weight: bold;    

        :hover, :focus {
            box-shadow: 1px 1px rgba(0, 0, 0, 0.4);
            opacity: 0.9;    
        }
    `