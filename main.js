function readPosts() {
    let request = new XMLHttpRequest();

    request.open("GET", `https://jsonplaceholder.typicode.com/posts`);
    request.responseType = "json";
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-Type", "application/json")
    request.send();
    request.onload = () => {
        let posts = request.response;

        const numUsersId = [...new Set(posts.map((ele) => ele.userId))];

        for (const user of numUsersId) {
            console.log(user);


            const listUsers = document.querySelector(".list-users");
            const linkUser = document.createElement("a");
            linkUser.setAttribute("id", `${user}`);
            listUsers.appendChild(linkUser);
            const li = document.createElement("li");
            linkUser.appendChild(li);
            linkUser.classList.add("userbtn","bg-gray-400", "w-50", "text-center", "p-2", "block", "cursor-pointer", "my-1", "text-xl", "font-medium", "dark:text-white", "text-white");
            const userName = document.createElement("p");
            li.appendChild(userName);
            const userEmail = document.createElement("p");
            li.appendChild(userEmail)
            userName.innerHTML = `USER-${user}`;
                    linkUser.addEventListener("click", () => {
        userPosts(user); 
    });
       

        }
  
    }
}
readPosts();
function userPosts(userId) {
    let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/posts");
    request.responseType = "json";
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-Type", "application/json")
    request.send();
    request.onload = () => {
        let posts = request.response;
        const numUsersId = [...new Set(posts.map((ele) => ele.userId))];
        let postsUser = [];
        numUsersId.forEach((user) => {
            for (const post of posts) {
                if (post.userId === user) {
                    postsUser.push(post);

                }

            }

        })
        postsUser.forEach((post)=>{
            if(post.userId === userId){
                console.log(post);
            }

        })

        // تم الوصول لبوستات كل يوزر على حدى لم يتبق الا عرضهم 


        // const myPosts = document.querySelector(".my-posts");
        // const titel = document.createElement("h2");
        // myPosts.appendChild(titel);
        // const p = document.createElement("p");
        // myPosts.appendChild(p);
        // myPosts.classList.add("max-w-md", "mx-auto","bg-white","rounded-xl", "shadow-md","overflow-hidden", "md:max-w-2xl");

        // titel.innerHTML = ;

    }

}
// }
// userPosts();





// function addPost() {
//     let request = new XMLHttpRequest();
//     request.open("POST", "https://jsonplaceholder.typicode.com/posts");
//     request.responseType = "json";
//     request.setRequestHeader("Accept", "application/json");
//     request.setRequestHeader("Content-Type", "application/json",)
//     let bodyParams = {

//         "title": "Mohammad",
//         "body": "ppppppppppppppppppeeepppppppppooooooooooo",
//         "userId": 1

//     }
//     request.send(JSON.stringify(bodyParams));
//     request.onload = () => {
//         console.log(request.response);
//         const myPost = document.createElement("div");
//         document.body.appendChild(myPost);
//         myPost.classList.add("mx-auto", "flex", "max-w-sm", "items-center", "gap-x-4", "rounded-xl", "bg-cyan-400", "p-6", "shadow-lg", "outline", "outline-black/5", "dark:bg-slate-800", "dark:shadow-none", "dark:-outline-offset-1", "dark:outline-white/10", "my-1");
//         const content = document.createElement("div");
//         myPost.appendChild(content);
//         const titlePost = document.createElement("div");
//         titlePost.classList.add("text-xl", "font-medium", "text-black", "dark:text-white");
//         content.appendChild(titlePost)
//         const id = document.createElement("p");
//         id.classList.add("text-gray-500", "dark:text-gray-400");
//         content.appendChild(id)
//         titlePost.innerHTML = request.response.title;
//         id.innerHTML = `${request.response.id}  
//             status code : ${request.status}`;
//     }



// }
// // readPosts();
// // addPost();
// function updatePost() {
//     let request = new XMLHttpRequest();
//     request.open("PUT", "https://jsonplaceholder.typicode.com/posts/1");
//     request.responseType = "json";
//     request.setRequestHeader("Accept", "application/json");
//     request.setRequestHeader("Content-Type", "application/json")

//     request.send(JSON.stringify({
//         "title": "rrrrr",
//         "name": "kkkkkkkkkkkkkkk"
//     })
//     );
//     request.onload = () => {
//         console.log(request.response);
//         const myPost = document.createElement("div");
//         document.body.appendChild(myPost);
//         myPost.classList.add("mx-auto", "flex", "max-w-sm", "items-center", "gap-x-4", "rounded-xl", "bg-cyan-400", "p-6", "shadow-lg", "outline", "outline-black/5", "dark:bg-slate-800", "dark:shadow-none", "dark:-outline-offset-1", "dark:outline-white/10", "my-1");
//         const content = document.createElement("div");
//         myPost.appendChild(content);
//         const titlePost = document.createElement("div");
//         titlePost.classList.add("text-xl", "font-medium", "text-black", "dark:text-white");
//         content.appendChild(titlePost)
//         const id = document.createElement("p");
//         id.classList.add("text-gray-500", "dark:text-gray-400");
//         content.appendChild(id)
//         titlePost.innerHTML = request.response.title;
//         id.innerHTML = `${request.response.id}  
//             status code : ${request.status}`;
//     }

// }
// // updatePost();
// function deletePost() {
//     let request = new XMLHttpRequest();
//     request.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
//     request.responseType = "json";
//     request.setRequestHeader("Accept", "application/json");
//     request.setRequestHeader("Content-Type", "application/json")
//     request.send();
//     request.onload = () => console.log(request.response)
//         ;


// }
// delatePost();
