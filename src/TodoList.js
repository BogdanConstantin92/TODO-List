import React, {Component} from 'react';

export default class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            newItem: '',
            list: []
        }

    }
    updateInput(key, value) {
        this.setState({[key]: value});
    }
    addItem() {
        const newItem = {
            id: 1 + Math.random(),
            value: this.state.newItem
        }
        const list = [...this.state.list];
        if(newItem.value !== ''){
            list.push(newItem);
        }
        
        this.setState({
            list: list,
            newItem: ''
        })
    }
    deleteItem(id){
        const list = [...this.state.list];
        const updatedList = list.filter(item => item.id !== id);
        this.setState({list: updatedList})
    }
    render() {
        return(
            <div className="todo-container">
                <h1 className="title">TO DO List</h1>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Enter your TO DO here..."
                        value={this.state.newItem}
                        onChange={e => this.updateInput('newItem', e.target.value)}
                        className="input"
                    />
                    <button onClick={() => this.addItem()}>Add</button>
                </div>
                <ul>
                    {this.state.list.map(item => {
                        return (
                            <li key={item.id}>
                                <div style={{color: '#fff', maxWidth: '90%', fontSize: '1.2rem'}}>{item.value}</div>
                               
                                <button onClick={() => this.deleteItem(item.id)}>X</button>
                            </li>
                        )
                    })}
                </ul>
                
            </div>
        );
    }
} 