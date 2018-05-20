import React from 'react'

import {Card, CardHeader} from 'material-ui/Card';
import Delete from 'material-ui/svg-icons/action/delete';


const Contact = ({name, phone, mail, deleteTask}) => (
    <div>
        <Card>
            <CardHeader
                title={name}
                subtitle={phone + ', ' + mail}
            >
                <Delete
                    onClick={deleteTask}
                />
        </CardHeader>
        </Card>


    </div>
)

export default Contact