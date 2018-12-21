(function () {

    //for destination

      document.querySelector('.destination-form').addEventListener('click', function () {
           document.querySelector('.destination-variants').classList.toggle('destination-variants__opened');
        });


      document.querySelectorAll('.destination-variants-item').forEach(function(item) {

        item.addEventListener('click', function() {
            document.querySelector('.place.destination-style').textContent = item.textContent;
        });
      });

    //for guests

    document.querySelector('.destination-place-guests').addEventListener('click', function () {
           document.querySelector('.destination-guest-variants').classList.toggle('destination-guest-variants__opened');
        });

      document.querySelectorAll('.destination-guest-variants-item').forEach(function(guest) {

        guest.addEventListener('click', function() {
            document.querySelector('.guests.destination-style').textContent = guest.textContent;
        });
      });

})();