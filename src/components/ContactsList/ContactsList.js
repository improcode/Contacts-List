import React from 'react'
import List from './List'
import Controls from './Controls'

class ContactsList extends React.Component {
    state = {
        people: [
            {name: 'Jan Kowalski', phone: 12345, mail:'asd@op.pl', uid: 1524820880578},
            {name: 'Pani Janina', phone: 55555, mail:'aaa@op.pl', uid: 1524820890549}
        ],
        newTask: '',
        newPhone: '',
        newMail: ''
    }

    deleteTask = (uid) => {
        const newList = this.state.people.filter(people => uid !== people.uid)
        this.setState({
            people: newList
        })
    }

    addTask = () => {
        if (this.state.newTask === '' || this.state.newPhone === '' || this.state.newMail === '' )
        {alert('Musisz uzupełnić wszystkie pola')} else {
            const newTask = {
                name: this.state.newTask,
                phone: this.state.newPhone,
                mail: this.state.newMail,
                uid: Date.now()
            }
            const newTasks = this.state.people.concat(newTask)

            this.setState({
                people: newTasks,
                newTask: '',
                newPhone: '',
                newMail: ''
            })
        }
    }

    newTaskChangeHandler1 = (event, newValue) => this.setState({
        newTask: newValue
    })

    newTaskChangeHandler2 = (event, newValue) => this.setState({
        newPhone: newValue
    })

    newTaskChangeHandler3 = (event, newValue) => this.setState({
        newMail: newValue
    })

    render(){
        return (
            <div>
                <Controls
                    onClickHandler={this.addTask}
                    onChangeHandler1={this.newTaskChangeHandler1}
                    onChangeHandler2={this.newTaskChangeHandler2}
                    onChangeHandler3={this.newTaskChangeHandler3}
                    newTaskValue={this.state.newTask}
                    newPhoneValue={this.state.newPhone}
                    newMailValue={this.state.newMail}
                />
                <List
                    tasksList={this.state.people}
                    deleteTaskFunction={this.deleteTask}
                />
            </div>
        )
    }
}

export default ContactsList