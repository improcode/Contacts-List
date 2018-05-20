import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AppBar from 'material-ui/AppBar'

import ContactsList from './components/ContactsList/ContactsList'

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
                        <Route exact path={'/'} component={ContactsList}/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App
