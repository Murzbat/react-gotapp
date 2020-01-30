import React, {Component} from 'react';
//import './randomChar.css';
import styled from 'styled-components'

const AppBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`
const RandomBlock = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`
const SpanBlock = styled.span`
    font-weight: bold;
`

export default class RandomChar extends Component {

    render() {

        return (
            <AppBlock>
                <RandomBlock>Random Character: John</RandomBlock>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <SpanBlock>Gender </SpanBlock>
                        <span>male</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <SpanBlock>Born </SpanBlock>
                        <span>11.03.1039</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <SpanBlock>Died </SpanBlock>
                        <span>13.09.1089</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <SpanBlock>Culture </SpanBlock>
                        <span>Anarchy</span>
                    </li>
                </ul>
            </AppBlock>
        );
    }
}
