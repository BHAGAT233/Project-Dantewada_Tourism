      // Mobile Menu Toggle Functionality
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const nav = document.getElementById('nav');
        
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on nav links
        const navLinks = document.querySelectorAll('#nav li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = nav.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && nav.classList.contains('active')) {
                nav.classList.remove('active');
                mobileMenuToggle.classList.toggle('active');
            }
        });
        
        // Smooth scroll for explore button
        document.querySelector('#id button').addEventListener('click', function() {
            document.querySelector('.popular').scrollIntoView({
                behavior: 'smooth'
            });
        });
        
        // Header background change on scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.head');
            if (window.scrollY > 100) {
                header.style.backgroundColor = 'rgba(227, 230, 243, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.backgroundColor = '#e3e6f3';
                header.style.backdropFilter = 'none';
            }
        });

        // typewriter effect reverse  
     const element = document.getElementById("runText");
    const text = "WelCome to Dantewada";
    let index = 0;
    let isDeleting = false;

    function typeWriter() {
      if (isDeleting) {
        element.innerText = text.substring(0, index--);
      } else {
        element.innerText = text.substring(0, index++);
      }

      if (!isDeleting && index === text.length + 1) {
        isDeleting = true;
        setTimeout(typeWriter, 1000); // Wait before deleting
        return;
      }

      if (isDeleting && index === 0) {
        isDeleting = false;
      }

      setTimeout(typeWriter, isDeleting ? 50 : 100);
    }

    typeWriter();