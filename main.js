const content = document.querySelector(".content");
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
            const listUsers = document.querySelector(".list-users");
            const linkUser = document.createElement("a");
            linkUser.setAttribute("id", `${user}`);
            listUsers.appendChild(linkUser);
            const li = document.createElement("li");
            linkUser.appendChild(li);
            linkUser.classList.add("userbtn", "bg-gray-500", "w-full", "text-center", "py-3", "px-4", "rounded", "block", "cursor-pointer", "my-2", "text-xl", "font-medium", "dark:text-white", "text-white", "rounded-lg", "hover:bg-gray-700", "transition-all");
            const userName = document.createElement("p");
            li.appendChild(userName);
            const userEmail = document.createElement("p");
            li.appendChild(userEmail)
            userName.innerHTML = `USER-${user}`;
            linkUser.addEventListener("click", () => {
                if (content.innerHTML === ""){
                    userPosts(user);
                    }else{
                        content.innerHTML="";
                         userPosts(user);

                    }

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
        postsUser.forEach((post) => {
            if (post.userId === userId) {
                content.classList.add("p-10");
                const postsOfUser = document.createElement("div");
                postsOfUser.classList.add("max-w-md", "mx-auto", "bg-white", "my-4", "rounded-xl", "shadow-md", "overflow-hidden", "md:max-w-2xl");
                content.appendChild(postsOfUser);
                const titelOfPost = document.createElement("h1");
                titelOfPost.classList.add("font-medium", "text-xl", "px-5", "py-3", "bg-gray-100", "uppercase");
                postsOfUser.appendChild(titelOfPost);
                const textOfPost = document.createElement("p");
                textOfPost.classList.add("font-sm", "text-lg", "px-5", "py-4", "leading-7")
                postsOfUser.appendChild(textOfPost);
                const spanOfUser = document.createElement("span");
                postsOfUser.appendChild(spanOfUser);
                spanOfUser.classList.add("w-fit", "block", "ml-auto", "mr-4", "pb-5", "pl-4", "text-gray-400")
                spanOfUser.innerHTML = `By User-${userId}`;
                titelOfPost.innerHTML = post.title;
                textOfPost.innerHTML = post.body;

            } 

        })
        


    }


}
