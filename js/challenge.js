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

    const arrayOfLikedCounter = []

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
                    } else {
                        e.target.textContent = "pause"
                        incrementer = setInterval(function(){
                            counter++;
                            time.textContent = counter;
                        }, 1000)
                    }
                } else if (e.target.matches('button#minus')){
                    counter--;
                    time.textContent = counter;
                } else if (e.target.matches('button#plus')){
                    counter++;
                    time.textContent = counter;
                } else if (e.target.matches('button#heart')){
    
                    

                    function liked(array, element){

                        const li = document.createElement('li')

                        let countVar = 1;

                        for(const obj in array){
                            if (obj.hasOwnProperty(element)){
                                obj[element] += 1;
                                const existingLi = document.querySelector(`[data-number='${element}']`)
                                existingLi.textContent = `${element} was liked ${obj[element]} times`
                            } else {
                                const counterObj = {}
                                counterObj[counter] = countVar;
                                arrayOfLikedCounter.push(counterObj)
                                li.textContent = `${counter} was liked ${countVar} times`
                                li.dataset.number = counter
                    
                                const parentUl = document.querySelector("ul.likes")
                                parentUl.append(li)
                                // console.log(li)
                            }
                        }
                        // const counterObj = {}
                        // counterObj[counter] = countVar;
                        // arrayOfLikedCounter.push(counterObj)
                        // li.textContent = `${counter} was liked ${countVar} times`
                        // li.dataset.number = counter
            
                        // const parentUl = document.querySelector("ul.likes")
                        // parentUl.append(li)
                        // console.log(li)
                    }
                    liked(arrayOfLikedCounter, counter)
                        
                    
                }
            })
        }
        buttonHandler()
     
    }
    timer()

})