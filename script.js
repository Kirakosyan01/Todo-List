const form = document.querySelector("form");
const userTasks = [];
const userDiv = document.querySelector(".userDivPlace")


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const p = document.createElement("p");

    if(formData.get("userText") !== ""){
        p.textContent = formData.get("userText");
        userTasks.push(formData.get("userText"))
    } else{
        return alert("Please! Write something...")
    }

    const userNewDiv = document.createElement("div");
    userNewDiv.className = "userND";
    
    ///\\\ CREATING REMOVE BUTTON
    
    const removeBtn = document.createElement("button");
    removeBtn.style.backgroundImage = "url('./assets/trashCan.webp')";
    removeBtn.style.width = "30px";
    removeBtn.style.height = "30px";
    removeBtn.style.backgroundSize = "contain";
    removeBtn.style.backgroundRepeat = "no-repeat";
    removeBtn.style.cursor = "pointer";
    removeBtn.style.backgroundColor = "transparent";
    removeBtn.style.border = "none";
    removeBtn.title = "Remove Task"
    
    removeBtn.addEventListener("click", () => {
        userDiv.removeChild(userNewDiv);
        userTasks.pop()
    });
    
    //////\\\\\\
    console.log(userTasks);
    
    ///\\\ CREATING CHANGE BUTTON

    const changeBtn = document.createElement("button");
    changeBtn.style.backgroundImage = "url('./assets/pen.png')";
    changeBtn.style.width = "30px";
    changeBtn.style.height = "30px";
    changeBtn.style.backgroundSize = "contain";
    changeBtn.style.backgroundRepeat = "no-repeat";
    changeBtn.style.cursor = "pointer";
    changeBtn.style.backgroundColor = "transparent";
    changeBtn.style.border = "none";
    changeBtn.title = "Change Task";

    changeBtn.addEventListener("click", () => {
        const newTask = prompt("Please! Change whatever you want", [p.textContent]);
        p.textContent = newTask;
    })

    //////\\\\\\

    userNewDiv.append(p);
    userNewDiv.append(removeBtn);
    userNewDiv.append(changeBtn);
    userDiv.append(userNewDiv);
    document.querySelector("input[name='userText']").value = "";
    
});