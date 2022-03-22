import React from 'react'
import styled, { keyframes } from "styled-components";

export default function Coffee() {
    return (
        <CoffeeContainer>
            <CoffeeHeader>
                <CoffeeButton left={'14px'} />
                <CoffeeButton left={'50px'} />
                <CoffeeDisplay />
                <CoffeeDetails />
            </CoffeeHeader>
            <CoffeeMiddle>
                <CoffeeExit />
                <CoffeeArm />
                <CoffeeLiquid />
                <CoffeeSmokeOne bottom={'50px'} left={'102px'} animation={'3s 4s linear infinite'} />
                <CoffeeSmokeTwo bottom={'70px'} left={'118px'} animation={'3s 5s linear infinite'} />
                <CoffeeSmokeTwo bottom={'65px'} left={'118px'} animation={'3s 6s linear infinite'} />
                <CoffeeSmokeOne bottom={'50px'} left={'102px'} animation={'3s 5s linear infinite'} />
                <CoffeeCup />
            </CoffeeMiddle>
            <CoffeeFooter />
        </CoffeeContainer>
    )
}



const CoffeeContainer = styled.div`
    width: 300px;
    height: 280px;
    position: absolute;
    top: calc(40%);
    left: calc(40%);
    @media (max-width: 500px){
        top: calc(25%);
        left: calc(20%);    
    }
`
const CoffeeHeader = styled.div`
    width: 100%;
    height: 80px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ddcfcc;
    border-radius: 10px;
`
type CoffeeButtonsProps = {
    left?: string;
}

const CoffeeButton = styled.div<CoffeeButtonsProps>`
    width: 25px;
    height: 25px;
    position: absolute;
    top: 25px;
    background-color: #282323;
    border-radius: 50%;
    &::after {
        content: "";
        width: 8px;
        height: 8px;
        position: absolute;
        bottom: -8px;
        left: calc(50% - 4px);
        background-color: #615e5e;
    }
    left: ${props => props.left}; 
`

const CoffeeDisplay = styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 25px);
    border-radius: 50%;
    background-color: #9acfc5;
    border: 5px solid #43beae;
    box-sizing: border-box;
`

const CoffeeDetails = styled.div`
    width: 8px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #9b9091;
    box-shadow: -12px 0 0 #9b9091, -24px 0 0 #9b9091;
`

const CoffeeMiddle = styled.div`
    width: 90%;
    height: 160px;
    position: absolute;
    top: 80px;
    left: calc(50% - 45%);
    background-color: #bcb0af;
    &::before {
        content: "";
        width: 90%;
        height: 100px;
        background-color: #776f6e;
        position: absolute;
        bottom: 0;
        left: calc(50% - 45%);
        border-radius: 20px 20px 0 0;
    }
`

const CoffeeExit = styled.div`
    width: 60px;
    height: 20px;
    position: absolute;
    top: 0;
    left: calc(50% - 30px);
    background-color: #231f20;
    &::before {
        content: "";
        width: 50px;
        height: 20px;
        border-radius: 0 0 50% 50%;
        position: absolute;
        bottom: -20px;
        left: calc(50% - 25px);
        background-color: #231f20;
    }
    &::after {
        content: "";
        width: 10px;
        height: 10px;
        position: absolute;
        bottom: -30px;
        left: calc(50% - 5px);
        background-color: #231f20;
    }
`

const CoffeeArm = styled.div`
    width: 70px;
    height: 20px;
    position: absolute;
    top: 15px;
    right: 25px;
    background-color: #231f20;

    &::before{
        content: "";
        width: 15px;
        height: 5px;
        position: absolute;
        top: 7px;
        left: -15px;
        background-color: #9e9495;
    }
`

const CoffeeCup = styled.div`
    width: 80px;
    height: 47px;
    position: absolute;
    bottom: 0;
    left: calc(50% - 40px);
    background-color: #fff;
    border-radius: 0 0 70px 70px / 0 0 110px 110px;

    &::after {
        content: "";
        width: 20px;
        height: 20px;
        position: absolute;
        top: 6px;
        right: -13px;
        border: 5px solid #fff;
        border-radius: 50%;
    }
`
const liquid = keyframes`
    0% {
        height: 0px;
        opacity: 1;
    }
    5% {
        height: 0px;
        opacity: 1;
    }
    20% {
        height: 62px;
        opacity: 1;
    }
    95% {
        height: 62px;
        opacity: 1;
    }
    100% {
        height: 62px;
        opacity: 0;
    }
`

const CoffeeLiquid = styled.div`
    width: 6px;
    height: 63px;
    opacity: 0;
    position: absolute;
    top: 50px;
    left: calc(50% - 3px);
    background-color: #74372b;
    animation: ${liquid} 4s 4s linear infinite;
`

const CoffeeFooter = styled.div`
    width: 95%;
    height: 15px;
    position: absolute;
    bottom: 25px;
    left: calc(50% - 47.5%);
    background-color: #41bdad;
    border-radius: 10px;

    &::after {
        content: "";
        width: 106%;
        height: 26px;
        position: absolute;
        bottom: -25px;
        left: -8px;
        background-color: #000;
    }
`
type CoffeeSmokeProps = {
    bottom?: string;
    left?: string;
    animation?: string;
}

const smoke1 = keyframes`
    0% {
        bottom: 20px;
        opacity: 0;
    }
    40% {
        bottom: 50px;
        opacity: 0.5;
    }
    80% {
        bottom: 80px;
        opacity: 0.3;
    }
    100% {
        bottom: 80px;
        opacity: 0;
    }
`

const smoke2 = keyframes`
    0% {
        bottom: 40px;
        opacity: 0;
    }
    40% {
        bottom: 70px;
        opacity: 0.5;
    }
    80% {
        bottom: 80px;
        opacity: 0.3;
    }
    100% {
        bottom: 80px;
        opacity: 0;
    }
`

const CoffeeSmokeOne = styled.div<CoffeeSmokeProps>`
    width: 8px;
    height: 20px;
    position: absolute;
    border-radius: 5px;
    background-color: #b3aeae;
    opacity: 0;
    bottom: ${props => props.bottom};
    left: ${props => props.left};
    animation: ${smoke2} ${props => props.animation};
`

const CoffeeSmokeTwo = styled.div<CoffeeSmokeProps>`
    width: 8px;
    height: 20px;
    position: absolute;
    border-radius: 5px;
    background-color: #b3aeae;
    opacity: 0;
    bottom: ${props => props.bottom};
    left: ${props => props.left};
    animation: ${smoke1} ${props => props.animation};
`




