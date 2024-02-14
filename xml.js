// event ----> onload() , onerror() // event works for something
//property ---->response , responseText, responseType, responseUrl ,status, status text
// function ---> open, send, setResquestHeader

console.clear()

const makeRequest=(method, url,data)=>{
    const xhr = new XMLHttpRequest()
    xhr.open(method,url) // open function open api
    
    xhr.onload =()=>{ // onload evernt onload data
       let data = xhr.response
       console.log(JSON.parse(data)) // json.parse converst data json format to object formate
    }
    xhr.setRequestHeader("Content-Type","application/json") //json formate korte hobe
   xhr.send(JSON.stringify(data)) // post request er smy json formate korte hobe....


   xhr.onerror =()=>{
       console.log("have errror") // onerror  showing error 
   }

}

const getData =( ) =>{
    makeRequest("GET","https://jsonplaceholder.typicode.com/posts")
  

}



const sendData =( ) =>{
    makeRequest("POST","https://jsonplaceholder.typicode.com/posts",{
        title: 'foo',
        body: 'bar',
        userId: 1,
    })
  

}

const updateData= ()=>{
     makeRequest("PUT","https://jsonplaceholder.typicode.com/posts/1",{
        id: 1,
        title: 'fooma',
        body: 'bargdfdf',
        userId: 1,
     })
}

const updateSingalData= ()=>{
    makeRequest("PATCH","https://jsonplaceholder.typicode.com/posts/1",{
   
       body: 'This is not my body',
       
    })
}

const deleteData= ()=>{
    makeRequest("DELETE","https://jsonplaceholder.typicode.com/posts/1")
}

// updateData()
// sendData()

// getData()

// updateSingalData()
deleteData()