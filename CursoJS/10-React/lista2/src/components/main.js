import React, {Component} from 'react'

import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa'

import './main.css'
//component stateles -> estatico -> function
//component stateFull -> com estado -> class

export default class Main extends Component{
    //cria state
    state = {
        newTask: '',
        tasks: [],
        index: -1
    }
    
    componentDidMount(){//esta função é executada quando o component é montado na tela
        const tasks = JSON.parse(window.localStorage.getItem('tasks'))

        if(tasks){
            this.setState({
                tasks: tasks
            })
        }
    }  

    componentDidUpdate(prevProps, prevState){//esta função é executada quando o component é atualizado
        const { tasks } = this.state

        if(prevState.tasks === tasks) return

        return window.localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    handleChange = (e) => {
        const vlInput = e.target.value
        this.setState({
            newTask: vlInput
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { tasks, index } = this.state //É passsado por referencia
        let { newTask } = this.state //É copiado para a variavel
        newTask = newTask.trim()
        
        if(!newTask) return
        if(tasks.indexOf(newTask) !== -1) return
        
        const newsTasks = [...tasks]
        /* 
            Não posso alterar ou interar na const "tasks" porque o state é 
            um array e arrays são passados por referencia
        */

       if(index === -1){
            return this.setState({
                tasks: [...newsTasks, newTask],
                newTask: ''
            })
       }else{
        newsTasks[index] = newTask

        return this.setState({
            tasks: newsTasks,
            newTask: ''
        })
       }
       
    }

    handleDelet = (e ,i) => {
        let { tasks } = this.state

        const newsTasks = [...tasks]
        newsTasks.splice(i, 1)
        this.setState({
            tasks: newsTasks
        })
    }

    handleEdit = (e, i) => {    
        let { tasks } = this.state

        this.setState({
            index: i,
            newTask: tasks[i]
        })
    }

    render(){
        const { newTask, tasks } = this.state

        return(
            <>
                <form action="#" onSubmit={this.handleSubmit}>
                    {/* 
                    onChange é captura o evento de 
                    "chage" e chama a function "handleChange()"

                    Além disso é usado "{" para escrever
                    js no jsx
                    */}
                    <h1>Lista de tarefas</h1>
                    <div className='cont-newTask'>
                        <input 
                        className='newTask' 
                        onChange={this.handleChange} 
                        type='text'
                        value={newTask}
                        />
                        <button type='submit'>
                            <FaPlus />{/*FaPlus é um component*/}
                        </button>
                    </div>
                    <div className='tasks'>
                    <ul>
                        {tasks.map((task, index) => (
                            <li key={task}>
                                {task}
                                <div className='cont-edit-delet'>

                                    <FaEdit 
                                        onClick={(e) => this.handleEdit(e, index)} 
                                        className='edit'
                                    />

                                    <FaWindowClose 
                                        onClick={(e) => this.handleDelet(e, index)} 
                                        className='delet'
                                    />
                                </div>
                            </li>
                        )
                        )}
                    </ul>
                </div>
                </form>
            </>
        )
    }
}