export default {
    data () {
        return {
            
            todos: [],
            newTodo: '',
            filter: 'all',
            editing: null,
            oldTodo: ''
        }
    },
    methods :{
        addTodo () {
            this.todos.push({
                 completed:false,
                 name:this.newTodo
            })
            this.newTodo = ''
        },
        delectTodo (todo) {
            this.todos = this.todos.filter(i => i !== todo)
        },
        delectCompleted () {
            this.todos = this.todos.filter(todo => !todo.completed)

        },
        editeTodo(todo) {
            this.editing = todo
            this.oldTodo = todo.name
        },
        doneEdit (){
            this.editing = null
        },
        cancelEdit () {
            this.editing.name=this.oldTodo
            this.doneEdit()
        }
    },

    computed : {
        allDone: {
            get () {
                return this.remaining === 0

            },
            set (value) {
               if (value === true) {
                this.todos.forEach(todo => {
                    todo.completed = value
                })
               }
            },

        },
        remaining() {
           return this.todos.filter(todo => !todo.completed).length
        },
        completed() {
           return this.todos.filter(todo => todo.completed).length
        },
        filteredTodos(){
            if(this.filter === 'todo'){
                return this.todos.filter(todo => !todo.completed)
            } else if(this.filter === 'done') {
                return this.todos.filter(todo => todo.completed)
            }
            return this.todos
        }
    },
    directives: {
        focus(el , value) {
            if(value){
  
                el.focus()

            }
        }
    }

}

