let formEle=document.getElementById("form")
let mainContainer=document.getElementById("mainCon")
let Name=document.getElementById("name")
let Email=document.getElementById("email")
let Msg=document.getElementById("message")


function createAndAppend(){

    formEle.classList.add('d-none')

    let container=document.createElement('div')
    container.classList.add("conJs")
    mainContainer.appendChild(container)

    let paraEle=document.createElement('p')
    paraEle.textContent=Msg.value
    paraEle.classList.add("successPara")
    container.appendChild(paraEle)

    let paraEle1=document.createElement('p')
    paraEle1.textContent="submit another response"
    paraEle1.classList.add("submitResPara")
    container.appendChild(paraEle1)

    paraEle1.addEventListener('click',()=>{
        Name.value=""
        Email.value=""
        Msg.value=""
        formEle.classList.remove('d-none')
        container.classList.add('d-none')
    })



}

formEle.addEventListener('submit',(event)=>{
    event.preventDefault()
    createAndAppend()
})