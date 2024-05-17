
num =3;
window.onload = function() {
    document.getElementById("comadd").onclick = function(e){
        e.preventDefault();
        addcomment(e.target)
    }
}

function addcomment(x) {
    if(x.parentNode.parentNode.parentNode.name.value === '' || x.parentNode.parentNode.parentNode.comments.value === '')
    return;
    num++;
    let div1 = document.createElement('div')
    div1.id= `menu${num}`
    div1.classList.add("tab-pane", "fade")
    div1.innerHTML = `<h2>${x.parentNode.parentNode.parentNode.name.value}</h2>
    <p>${x.parentNode.parentNode.parentNode.comments.value}</p>`
    document.querySelector(".tab-content").append(div1)
    let list1 = document.createElement("li")
    list1.innerHTML = `<a data-toggle="tab" href="#menu${num}">${x.parentNode.parentNode.parentNode.name.value.split(" ")[0]}</a>`
    document.querySelector("ul.nav-tabs").append(list1)
}


$(document).ready(function(){
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myCarousel']").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){
                
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    
    $(window).scroll(function() {
        $(".slideanim").each(function(){
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });
})
