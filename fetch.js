console.clear()
fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    headers:{
        'Content-type': 'application/json; charset=UTF-8',
    },
    body:JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),

})
.then((res) => res.json())
.then((json)=> console.log(json))


// update
fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method:'PUT',
    headers:{
        'Content-type': 'application/json; charset=UTF-8',
    },
    body:JSON.stringify({
        id:1,
        title: 'fooms',
        body: 'barms',
        userId: 1,
    }),

})
.then((res) => res.json())
.then((json)=> console.log(json))

// patch
fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method:'PATCH',
    headers:{
        'Content-type': 'application/json; charset=UTF-8',
    },
    body:JSON.stringify({

        title: 'ms-shakil',
 
    }),

})
.then((res) => res.json())
.then((json)=> console.log(json))


// delete

fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method:'DELETE',


})
.then((res) => res.json())
.then((json)=> console.log(json))