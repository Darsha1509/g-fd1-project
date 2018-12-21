(function () {

    var element = document.querySelector('.location-holder'),
        slideSize = element.clientWidth,
        currentPosition = 0;
     
    document.querySelectorAll('.location-button').forEach(function (button, index, buttons) {
        
        button.addEventListener('click', function () {
            
            switch(index) {
                case 0:
                    currentPosition = 0;
                    element.scroll({left: currentPosition, behavior: 'smooth'});
                    break;
                case 1:
                    currentPosition = slideSize;
                    element.scroll({left: currentPosition, behavior: 'smooth'});
                    break;
                case 2: 
                    currentPosition = slideSize * 2;
                    element.scroll({left: currentPosition, behavior: 'smooth'});
                    break;
            }
        });
    });
})();