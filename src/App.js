import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

import ToDo from './components/ContactsList'

class App extends React.Component {


    render() {
        return (
            <div>
                <AppBar
                    title="Contacts List"
                    showMenuIconButton={false}
                />

                <Router>
                    <div>
                        <Route exact path={'/'} component={ToDo}/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App
