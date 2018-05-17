import React from 'react'

import {Card, CardHeader} from 'material-ui/Card';


const Task = ({name, phone, mail}) => (
        <Card>
            <CardHeader
                title={name}
                subtitle={phone + ', ' + mail}
            />


        </Card>

)

export default Task