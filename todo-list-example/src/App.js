import React, {Component} from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
    constructor() {
        super();
        this.TodoItems = [
            { title: 'Mua bim bim', isComplete: true },
            { title: 'Đi đá bóng' },
            { title: 'Đi đổ xăng' } 
        ];
    }
    
    render() {
        return (
            <div className="App">
                {
                    this.TodoItems.length > 0 && this.TodoItems.map((item, index) => 
                        <TodoItem key={index} item={item} />
                    )
                }

                {
                    this.TodoItems.length === 0 && 'Nothing here.'
                }
            </div>
        );
    }
}

export default App;
