import styled from "styled-components";

export const Item = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    // min-width: 80%;
    // color: rgba(0, 0, 0, 0.54);
    // outline: 1px solid red;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
        :not(:last-child){
            margin-bottom: 15px;
        }
    `

export const Text = styled.p`
    margin: 0;
    opacity: 0.8;      
    `

export const Button = styled.button`
    margin: 0;
    padding: 2px 5px;
    width: 80px;
    `