(function () {
     
     var openedItem = 'menu-container__opened';
     var containers = document.querySelectorAll('.menu-container');

     containers.forEach(function (item) {

        item.addEventListener('click', function () {
           
           containers.forEach(function(item) {
                if (item.classList.contains(openedItem)) {
                    item.classList.remove(openedItem);
                }
            });
        
        item.classList.toggle(openedItem);
        });
    });
})();