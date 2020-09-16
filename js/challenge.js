document.addEventListener("DOMContentLoaded", function(e){
    function leaveComment(){
        const form = document.querySelector("#comment-form")
        const submitButton = document.querySelector("button#submit");

        form.addEventListener('submit', function(e){
            e.preventDefault()
            const inputText = e.target.querySelector('input').value
            const div = document.createElement("div")
            div.innerHTML = `<p>${inputText}</p>`
            const parentDiv = document.querySelector("#list")
            parentDiv.append(div) 
        })
    }
    leaveComment()

    function timer(){
        const time = document.querySelector('h1#counter')

        let counter = 0;

        setInterval(function(){
            counter++;
            time.textContent = counter;
        }, 1000)

        
    }
    timer()

})