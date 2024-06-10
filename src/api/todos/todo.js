const todos = [
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Cooking', completed: true },
    { id: 3, title: 'Pani puri making', completed: false },
    { id: 4, title: 'Exercise', completed: true },
];

export const fetchTodos=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(todos);
        },1000)
    })
}
