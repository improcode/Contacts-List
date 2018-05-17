import React from 'react'

import Task from './Task'
import Container from '../UI/Container'

const List = ({tasksList, deleteTaskFunction}) => (
    <Container>
        {
            tasksList

                .map(task => (
                    <Task
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