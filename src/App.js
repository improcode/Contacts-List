import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AppBar from 'material-ui/AppBar'

import ToDo from './components/ContactsList'

class App extends React.Component {


    render() {
        return (
            <div>
                <AppBar
                    title="Contacts List"
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
