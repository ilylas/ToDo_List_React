import { useState } from "react"
import { nanoid } from "nanoid"
import Listeitems from "./Listeitems"

function App() {
  

  const [todolist,settodolist] = useState([
    {id:nanoid(2),content: "item1"},
    {id:nanoid(2),content: "item2"},
    {id:nanoid(2),content: "item3"}
  ])
  const [todo,settodo] = useState("")
  console.log(todolist)

  function deleteTodo(id){
    settodolist(todolist.filter(todo=>todo.id!=id))
  }
  const [showvalidation,setvalide]=useState(false)

  function handleSubmit(e){
    e.preventDefault()
    if (todo===""){
      setvalide(true)
      return
    }

    settodolist([...todolist, {id: nanoid(), content:todo}])
    settodo("")

    setvalide(false)
  }



  return (
    <div className="h-screen ">
      <div className="max-w-4xl mx-auto pt-20 px-6">

        <h1 className="text-3xl text-slate-100 mb-4">la To-Do liste</h1>

        <form action="" onSubmit={handleSubmit} className="mb-10">
          <label htmlFor="todo-item" className="text-slate-50"> ajouter une chose a faire</label>
          
          <input type="text" value={todo}
          onChange={e=>settodo(e.target.value)}
          className="mt-1 block w-full rounded" />
          {showvalidation && (
            <p className="text-red-400">Ajouter dabord du contenu à votre tàche</p>
          )}
          <button  className="mt-4 py-2 px-2 bg-slate-50 rounded min-w-[115px]">Ajouter</button>


        </form>

        <ul>
          {todolist.length==0 && (
            <li className="text-slate-50 text-md"> Pas ditems à afficher !</li>
          )}
          {todolist.length>0 && todolist.map(item=> (
            <Listeitems key={item.id} itemData={item} deleteTodo={deleteTodo}/>
          ))}
          
        </ul>
      </div>
    </div>
  )
}

export default App
