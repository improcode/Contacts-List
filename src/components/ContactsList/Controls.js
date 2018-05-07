import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider';

import Container from '../UI/Container'

const Controls = (props) => (
    <Container>
        <TextField
        onChange={props.onChangeHandler1}
        value={props.newTaskValue}
        name={'name'}
        placeholder={'name'}
        fullWidth={true}
    />
        <Divider />
        <TextField
            onChange={props.onChangeHandler2}
            value={props.newPhoneValue}
            name={'phone'}
            placeholder={'phone'}
            fullWidth={true}
        />
        <Divider />
        <TextField
            onChange={props.onChangeHandler3}
            value={props.newMailValue}
            name={'e-mail'}
            placeholder={'e-mail'}
            fullWidth={true}
        />
        <RaisedButton
            onClick={props.onClickHandler}
            primary={true}
            fullWidth={true}
            label={'ADD'}
        />

    </Container>
)

export default Controls