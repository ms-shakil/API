console.clear()

axios.get('https://jsonplaceholder.typicode.com/posts')
.then((res)=> console.log(res.data))
.catch((res) => console.log(res))


// POST

axios.post('https://jsonplaceholder.typicode.com/posts',{

    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
})
.then((res)=> console.log(res.data))
.catch((res) => console.log(res))


// put

axios.put('https://jsonplaceholder.typicode.com/posts/1',{

    body: JSON.stringify({
      title: 'ms bar',
      body: 'this not my body',
      userId: 1,
    }),
})
.then((res)=> console.log(res.data))
.catch((res) => console.log(res))


// delete
axios.delete('https://jsonplaceholder.typicode.com/posts/1')
.then((res)=> console.log(res.data))
.catch((res) => console.log(res))