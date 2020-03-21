import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1'

axios.get(url).then(response => {
  const todo = response.data
  console.log(todo)

  const ID = todo.id
  const title = todo.title
  console.log(`id of ${ID} and title ${title}`)
})