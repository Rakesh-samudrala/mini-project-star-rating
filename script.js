const star_div = document.querySelector('#box')
    console.log(star_div)
    const count = document.querySelector('#count')
    console.log(count)
    const star_part = document.querySelectorAll('.star')
    console.log(star_part)
    const button = document.querySelector('.reset_btn')
    console.log(button)
    let value=0
    let mouse_value

    // click event adding value if clicked
    star_div.addEventListener('click', function (e) {
        let elem = e.target;
        console.log('elem:', elem)
        let validating = elem.hasAttribute('idx')
        console.log(validating)
        if (!validating) {
            return
        }
        let elem_value = elem.getAttribute('idx')

        count.textContent = elem_value
        value = elem_value
        color_function('yellow', value)



    })
    console.log(value)
    function color_function(classname, idx) {
        for (let index = 0; index < star_part.length; index++) {
            // const element = array[index];
            star_part[index].classList.remove(classname)
            
        }
        for (let index = 0; index < idx; index++) {
            // const element = array[index];
            star_part[index].classList.add(classname)

        }
    }
    function color_remove(classname, idx) {
        for (let index = 0; index < idx; index++) {
            // const element = array[index];
            console.log('remove:',star_part[index])
            star_part[index].classList.remove(classname)

        }
    }
    button.addEventListener('click', function () {
        color_remove('yellow', value)
        count.textContent = 0
    })


    // hover stars
    let hover_event = document.getElementsByClassName('star')
    star_div.addEventListener('mouseover', function (e) {
        let elem = e.target;
        console.log('elem:', elem)
        let validating = elem.hasAttribute('idx')
        console.log(validating)
        if (!validating) {
            // alert("idx not found")
            return
        }
        let elem_value = elem.getAttribute('idx')

        console.log(elem_value)
        // count.textContent = elem_value
        // console.log(count)
        mouse_value = elem_value
        color_function('yellow', mouse_value)
    })


    // after leaving

    let away = document.getElementById('box')
    console.log(mouse_value)
    away.addEventListener('mouseleave', function(){
        console.log('mouse over')
        color_function('yellow',value)
    })

    // submit button adds the rating
    let rating = document.querySelector('.submit_btn')
    rating.addEventListener('click',save())
    function save(){
        
    }