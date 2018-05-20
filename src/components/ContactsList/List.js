import React from 'react'

import Contact from './Contact'
import Container from '../UI/Container'

const List = ({tasksList, deleteTaskFunction}) => (
    <Container>
        {
            tasksList

                .map(task => (
                    <Contact
                        name={task.name}
                        phone={task.phone}
                        mail={task.mail}
                        key={task.uid}
                        deleteTask={() => deleteTaskFunction(task.uid)}
                    />
                ))
        }
    </Container>
)

export default List