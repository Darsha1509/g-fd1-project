document.querySelectorAll('.item').forEach(function(item, index, items) {
    item.addEventListener('click', function() {

    var contents = document.querySelectorAll('.item-content');
    var currentElement = contents[index];

    if(currentElement.classList.contains('item-content__opened')) {
        currentElement.classList.toggle('item-content__opened', false);
    } else {
            contents.forEach(function(content) {
            content.classList.toggle('item-content__opened', false);
        });
        currentElement.classList.toggle('item-content__opened');
    }
    });
});