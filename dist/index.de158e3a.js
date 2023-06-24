document.addEventListener("DOMContentLoaded", function() {
    fetch("https://api.github.com/users/luizsant").then((response)=>response.json()).then((data)=>{
        document.querySelector(".profile-avatar").src = data.avatar_url;
        document.querySelector(".profile-name").textContent = data.name;
        document.querySelector(".profile-username").textContent = "@" + data.login;
        document.querySelector(".profile-link").href = data.html_url;
        let numbersItems = document.querySelectorAll(".numbers-item");
        numbersItems[0].querySelector("p").textContent = data.public_repos;
        numbersItems[1].querySelector("p").textContent = data.followers;
        numbersItems[2].querySelector("p").textContent = data.following;
    }).catch((error)=>console.error("Error:", error));
});

//# sourceMappingURL=index.de158e3a.js.map
