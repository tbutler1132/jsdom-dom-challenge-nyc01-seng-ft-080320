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
            form.reset()
        })
    }
    leaveComment()

    const likesHash = {}

    function timer(){
        const time = document.querySelector('h1#counter')

        let counter = 0;

        let incrementer = setInterval(function(){
            counter++;
            time.textContent = counter;
        }, 1000)

        function buttonHandler(){
            const body = document.querySelector('body')
    
            body.addEventListener('click', function(e){
                if (e.target.matches('button#pause')){
                    if(e.target.innerText === "pause") {
                        clearInterval(incrementer);
                        e.target.textContent = "resume"
                        buttonsDisabled(true)
                    } else {
                        e.target.textContent = "pause"
                        incrementer = setInterval(function(){
                            counter++;
                            time.textContent = counter;
                        }, 1000)
                        buttonsDisabled(false)
                    }
                } else if (e.target.matches('button#minus')){
                    counter--;
                    time.textContent = counter;
                } else if (e.target.matches('button#plus')){
                    counter++;
                    time.textContent = counter;
                } else if (e.target.matches('button#heart')){
                    const parentUl = document.querySelector("ul.likes")
                    if (likesHash.hasOwnProperty(`${counter}`)){
                        likesHash[counter] += 1;
                        const existingLi = parentUl.querySelector(`li[data-number='${counter}']`)
                        existingLi.textContent = `${counter} was liked ${likesHash[counter]} times`
                        console.log(existingLi)
                    } else {
                        likesHash[counter] = 1;
                        const li = document.createElement('li')
                        li.textContent = `${counter} was liked ${likesHash[counter]} time`
                        li.dataset.number = counter
            
                        
                        parentUl.append(li)

                    }  
                }
            })
        }
        buttonHandler()
     
    }
    timer()

    function buttonsDisabled(boolean){
        document.querySelector('button#minus').disabled = boolean
        document.querySelector('button#plus').disabled = boolean
        document.querySelector('button#heart').disabled = boolean
    }

})