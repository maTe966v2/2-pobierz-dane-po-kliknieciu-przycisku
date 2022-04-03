const button = document.querySelector(".get-data");
const userContainer = document.querySelector(".user");

let user = {
    userId: "",
    id: "",
    title: "",
    body: "",
};

const createUser = () => {
    userContainer.innerHTML = `
        <p>User ID: ${user.userId}</p>
        <p>ID: ${user.id}</p>
        <p>title: ${user.title}</p>
        <p>body: ${user.body}</p>
    `;
};

const getData = async () => {
    await fetch("https://akademia108.pl/api/ajax/get-post.php")
        .then(res => res.json())
        .then(data => {
            user.userId = data.userId;
            user.id = data.id;
            user.title = data.title;
            user.body = data.body;
        })
        .catch(err => console.log(err));
    createUser();
};

button.addEventListener("click", getData);
