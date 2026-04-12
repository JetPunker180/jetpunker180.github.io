// script.js - Basic functionality for notesprep website
document.addEventListener('DOMContentLoaded', function() {
    console.log('notesprep website loaded');
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Newsletter form handling
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('.newsletter-input');
            if (emailInput.value) {
                alert('Thank you for subscribing! You\'ll receive updates on new notes and study tips.');
                emailInput.value = '';
            }
        });
    }
    
    // Navigation link updates - all in one place
    console.log('Starting navigation updates...');
    
    // Update HSSC to Blogs link
    const blogsNavLink = document.getElementById('iz0tt');
    console.log('Found Blogs Link:', blogsNavLink);
    if (blogsNavLink) {
        blogsNavLink.href = 'https://notesprep.com/blogs/';
        blogsNavLink.textContent = blogsNavLink.textContent.replace('HSSC', 'Blogs');
        console.log('Blogs navigation updated successfully!');
    } else {
        console.log('Element with ID "iz0tt" not found');
    }
    
    // Update Entry Tests link
    const entryTestsNavLink = document.getElementById('iftme');
    console.log('Found Entry Tests Link:', entryTestsNavLink);
    if (entryTestsNavLink) {
        entryTestsNavLink.href = 'https://notesprep.com/entry-tests';
        console.log('Entry Tests navigation updated successfully!');
    } else {
        console.log('Element with ID "iftme" not found');
    }
    
    // Update YouTube link
    const youtubeLink = document.getElementById('iguhgs');
    console.log('Found YouTube link:', youtubeLink);
    if (youtubeLink) {
        youtubeLink.href = 'https://youtube.com/@notesprep';
        console.log('YouTube link updated to:', youtubeLink.href);
    } else {
        console.log('YouTube link with ID "iguhgs" not found');
    }
    
    // Update Instagram link
    const instagramLink = document.getElementById('iq68k5');
    console.log('Found Instagram link:', instagramLink);
    if (instagramLink) {
        instagramLink.href = 'https://www.instagram.com/notes_prep/';
        console.log('Instagram link updated to:', instagramLink.href);
    } else {
        console.log('Instagram link with ID "iq68k5" not found');
    }
	
	// Update Navigation
    const navigation = document.getElementById('i32qq');
    console.log('Found Navigation:', navigation);
    if (navigation) {
        navigation.innerHTML = ` <a id="ib7dg" href="https://notesprep.com#secondary" class="gjs-t-link nav-link">SSC</a>
          <a id="iftme" href="https://notesprep.com/entry-tests" class="gjs-t-link nav-link">Entry Tests</a>
		  <a id="iz0tt" href="https://notesprep.com/blogs" class="gjs-t-link nav-link">Blogs</a>
          <a id="ik0c6" href="https://notesprep.com#resources" class="gjs-t-link nav-link">Resources</a>
          <a id="iuxnk" href="https://notesprep.com#about" class="gjs-t-link nav-link">About</a>
          <a id="ixd44" href="https://notesprep.com/contact-us" class="gjs-t-link nav-link">Contact</a>`;
        console.log('Navigation updated to:', Navigation);
    } else {
        console.log('Navigation Not Found');
    }
    
	const footerContact = document.getElementById('i6kovw');
    console.log('Found Instagram link:', footerContact);
    if (instagramLink) {
        instagramLink.href = 'https://notesprep.com/contact-us';
        console.log('Instagram link updated to:', footerContact.href);
    } else {
        console.log('Instagram link with ID "iq68k5" not found');
    }
	
    console.log('All navigation updates completed');
});