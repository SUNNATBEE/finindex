const elForm = document.querySelector(".form-js");
const elUserName = document.querySelector(".username-js");
const elFamily = document.querySelector(".family-js");
const elPhone = document.querySelector(".phone-js");
const elList = document.querySelector(".hero-list");

const newArray = [];

function renderArray(){
    elList.textContent = ""
    for (const arr of newArray) {
        const newItem = document.createElement("li");
        const userNameResult = document.createElement("h2");
        const userFamilyResult = document.createElement("p");
        const userPhoneResult = document.createElement("a");
        const deletebtn = document.createElement("button");

        userPhoneResult.classList.add("text-decoration-none");
        deletebtn.classList.add("btn", "btn-danger", "d-block" , "mt-3");
        deletebtn.textContent = "Delete";
        deletebtn.classList.add("btn-del");
        deletebtn.classList.add("text_shadows");
        
        userPhoneResult.href = `${"tel:" + arr.phone}`
        
        userNameResult.textContent = arr.nameUsers;
        userFamilyResult.textContent = arr.Family;
        userPhoneResult.textContent = arr.phone;
        
        newItem.classList.add("items-styles");
        userNameResult.classList.add("text-title")
        newItem.append(userNameResult, userFamilyResult, userPhoneResult,deletebtn);
        elList.appendChild(newItem);
    } 
}
elForm.addEventListener("submit" , function(evt){
    evt.preventDefault()
    const nameValue = elUserName.value;
    const familyValue = elFamily.value;
    const phoneValue = elPhone.value;
    
    const obj = {
        nameUsers: nameValue,
        Family :familyValue,
        phone: phoneValue,
    }
    newArray.push(obj);
    renderArray();
})

elList.addEventListener("click" , function(evt){
    evt.preventDefault();

})
