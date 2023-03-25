//animation button Read More//
    const button = document.getElementById('animation-button');
    button.addEventListener('click', function() {
        if (button.style.animationPlayState === 'paused') {
        button.style.animationPlayState = 'running';
        } else {
        button.style.animationPlayState = 'paused';
        }
    });

    //animation button Download CV//
    const btn = document.getElementById('myButton');
    btn.addEventListener('click', function() {
    alert('Button clicked!');
    });

    //bar skills//
    const spans = document.querySelectorAll('.progress-bar span');
    spans.forEach((span) => {
        span.style.width = span.dataset.width;
        span.innerHTML = span.dataset.width;
    });

    // Get the button
    var myButton = document.getElementById("back-to-top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
      scrollFunction();
    };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
      } else {
        myButton.style.display = "none";
      }
      }

    // When the user clicks on the button, scroll to the top of the document
    myButton.addEventListener("click", function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });






