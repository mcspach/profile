
      // navbar-banner transition
      const navbar = document.getElementById('navbar');

      window.onscroll = function() {scrollFunction()};

      function scrollFunction() {
        if (document.body.scrollTop > 240 || document.documentElement.scrollTop > 240) {
          navbar.style.top = "0";
        } else {
          navbar.style.top = "-100px";
        }
      }

