import React, {Component} from 'react';
//import './itemList.css';
import styled from 'styled-components'

const ListBlock = styled.ul`
    cursor: pointer;
`
const ListGroup = styled.li`
    cursor: pointer;
`
export default class ItemList extends Component {

    render() {
        return (
            <ListBlock>
                <ListGroup className="list-group-item">
                    John Snow
                </ListGroup>
                <ListGroup className="list-group-item">
                    Brandon Stark
                </ListGroup>
                <ListGroup className="list-group-item">
                    Geremy
                </ListGroup>
            </ListBlock>
        );
    }
}