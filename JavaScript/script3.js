//Async programming : Callback

function fetchData(callback) {
    setTimeout(() => {
      callback("Data received");
    }, 2000); // simulates a 2-second delay, like a slow network request
  }
  
  fetchData((result) => {
    console.log(result); // "Data received" — but only after 2 seconds
  });
  
  console.log("This runs first!"); // logs immediately, before the data arrives


  function prepareFood(foodName, callback){
    console.log(`Preparing ${foodName}...`);

    setTimeout(() => {
        console.log(`${foodName} is ready`);
        callback();
    },3000)
  }

  function serveFood(){
    console.log("Enjoy your meal");
  }

  prepareFood("Burger",serveFood);


  // Promises 
  const promise = new Promise( (resolve, reject) =>{
    let success = true;

    if(success){
        resolve("data received");
    }
    else{
        reject("error occurred");
    }
  })

  promise.then ((result)=>{
    console.log(result);
  })
  .catch((error)=>{
    console.log(error);
  })

  function fetchData(){
    return new Promise((resolve, reject) =>{
        let success = true;
        setTimeout(()=>{
            if(success){
                resolve("Data received");
            }
            else{
                reject("Error occurred");
            }
        }, 5000)

    })
  }

    fetchData()
    .then((result) => {console.log(result);})
    .catch((error) =>{console.log(error);})


//Async - Await

function fetchStudent(){
    return new Promise((resolve, reject)=> {
        let success = true;
        setTimeout(()=> {
            if(success){
                resolve("Student data fetched successfully");
            }
            else{
                reject("Error fetching student data");
            }
        }, 5000)
    })
}


async function displayStudent(){
    try{
        const result = await fetchStudent();
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}

displayStudent();

// fetch() function to send HTTP requests and handle responses
async function getUser() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await response.json(); // parses the response body as JSON
      console.log(data);
    } catch (error) {
      console.log("Fetch failed:", error);
    }
  }
  
  getUser();

  async function createUser(userData) {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Failed to create user:", error);
    }
  }
  
  createUser({ name: "Srush", job: "Full Stack Dev" });


// Handson tasks / practice Assignment:

async function getUsers(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
        data.forEach((user)=>{
            console.log(`user name : ${user.name}, user email : ${user.email}`);
        })       
    
    }
    catch(error){
        console.log(error);
    }
}

getUsers();


async function createPost(postData){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
            method : "POST",
            headers: { "Content-Type": "application/json" },
            body : JSON.stringify(postData)
            })

        const data = await response.json();
        console.log(data);
        
    }
    catch(error){
        console.log("Failed to create a post" ,error);
    }
}


createPost({title: "My New Post", body: "This is the content of my new post"});