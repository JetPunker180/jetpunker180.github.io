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
	
	// Update Navigation
    const navigation = document.getElementById('i32qq');
    console.log('Found Navigation:', navigation);
    if (navigation) {
        navigation.innerHTML = ` <a id="ib7dg" href="https://notesprep.com#secondary" class="gjs-t-link nav-link">SSC</a>
          <a id="iftme" href="https://notesprep.com/entry-tests" class="gjs-t-link nav-link">Entry Tests</a>
		  <a id="iz0tt" href="https://notesprep.com/blogs" class="gjs-t-link nav-link">Blogs</a>
          <a id="ik0c6" href="https://notesprep.com/resources" class="gjs-t-link nav-link">Resources</a>
          <a id="iuxnk" href="https://notesprep.com#about" class="gjs-t-link nav-link">About</a>
          <a id="ixd44" href="https://notesprep.com/contact-us" class="gjs-t-link nav-link">Contact</a>`;
        console.log('Navigation updated to:', Navigation);
    } else {
        console.log('Navigation Not Found');
    }
    
	const footerNav = document.getElementById('i6lnig');
    console.log('Found Footer Nav:', footerNav);
    if (footerNav) {
        footerNav.innerHTML = `  <div class="footer-container" id="iv53fi" style="display: flex; flex-wrap: wrap; gap: 30px; max-width: 1200px; margin: 0 auto;">
    
    <div class="footer-column" id="ikd6lx" style="flex: 1 1 250px;">
      <a class="gjs-t-link footer-brand-link" href="https://notesprep.com/#" id="ik585v" style="text-decoration: none; display: flex; align-items: center; gap: 10px;">
        <img alt="NotesPrep Icon" class="footer-brand-icon" id="in8pwf" src="https://cdn.grapesjs.com/workspaces/cmkwruev38jlaybccwihsjbj5/assets/6f15ceee-3f30-4741-ae8d-51f3bc520494__logo.svg" style="height: 32px;"/>
        <span class="footer-brand-name" id="iyo8yn" style="font-weight: bold; color: #0f172a; font-size: 20px;">NotesPrep</span>
      </a>
      <p class="footer-text" id="inp52p" style="color: #64748b; margin-top: 15px;">Modern, minimal notes that help you focus and retain key concepts.</p>
      <div class="footer-social" id="iuh5yj" style="display: flex; gap: 15px; margin-top: 15px;">
        <a class="gjs-t-link social-link" href="https://www.instagram.com/notes_prep/" id="iq68k5">
          <img alt="Instagram" class="social-icon" id="i9amsl" src="https://api.iconify.design/lucide-instagram.svg?color=%230f172a"/>
        </a>
        <a class="gjs-t-link social-link" href="https://youtube.com/@notesprep/" id="iguhgs">
          <img alt="YouTube" class="social-icon" id="ihc0ld" src="https://api.iconify.design/lucide-youtube.svg?color=%230f172a"/>
        </a>
      </div>
    </div>

    <div class="footer-column" id="i3cuug" style="flex: 1 1 150px;">
      <h4 class="footer-heading" id="ipkdoo" style="margin-bottom: 15px; color: #0f172a;">Explore</h4>
      <a class="gjs-t-link footer-link" href="https://notesprep.com/#secondary" id="icy77g" style="display: block; margin-bottom: 8px; color: #64748b; text-decoration: none;">Secondary Notes</a>
      <a class="gjs-t-link footer-link" href="https://notesprep.com/blogs/" id="ilhc7p" style="display: block; margin-bottom: 8px; color: #64748b; text-decoration: none;">Blogs</a>
      <a class="gjs-t-link footer-link" href="https://notesprep.com/entry-tests/" id="i9tp4y" style="display: block; margin-bottom: 8px; color: #64748b; text-decoration: none;">Entry Test Prep</a>
      <a class="gjs-t-link footer-link" href="https://notesprep.com/resources/" id="i64fuj" style="display: block; margin-bottom: 8px; color: #64748b; text-decoration: none;">Resources &amp; PDFs</a>
    </div>

    <div class="footer-column" id="i533p4" style="flex: 1 1 150px;">
      <h4 class="footer-heading" id="ifdqnf" style="margin-bottom: 15px; color: #0f172a;">Help</h4>
      <a class="gjs-t-link footer-link" href="https://notesprep.com/#about" id="ifeu3p" style="display: block; margin-bottom: 8px; color: #64748b; text-decoration: none;">About Us</a>
      <a class="gjs-t-link footer-link" href="https://notesprep.com/contact-us/" id="i6kovw" style="display: block; margin-bottom: 8px; color: #64748b; text-decoration: none;">Contact</a>
      <a class="gjs-t-link footer-link" href="https://notesprep.com/faq/" id="i1o2zi" style="display: block; margin-bottom: 8px; color: #64748b; text-decoration: none;">FAQs</a>
      <a class="gjs-t-link footer-link" href="https://notesprep.com/privacy-policy/" id="ij5q7y" style="display: block; margin-bottom: 8px; color: #64748b; text-decoration: none;">Privacy Policy</a>
    </div>

    <div class="footer-column" id="ifx9c3" style="flex: 1 1 250px;">
      <h4 class="footer-heading" id="ibp3mz" style="margin-bottom: 15px; color: #0f172a;">Newsletter</h4>
      <p class="footer-text" id="iw7c21" style="color: #64748b; margin-bottom: 15px;">Get updates on new notes and tips.</p>
      <form action="https://formspree.io/f/meevqjyp" class="newsletter-form" id="i13t2g" method="POST" style="display: flex; flex-wrap: wrap; gap: 10px;">
        <input name="email" class="newsletter-input" id="iageri" placeholder="Your email" required="" type="email" style="flex: 1 1 100%; padding: 10px; border: 1px solid #e2e8f0; border-radius: 6px;"/>
        <button class="gjs-t-button newsletter-button" id="i81yxa" type="submit" style="flex: 1 1 100%; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; padding: 10px; background-color: #2563eb; color: #fff; border-radius: 6px;">
          <img alt="Send Icon" src="https://api.iconify.design/lucide-send.svg?color=%23ffffff" style="padding-right:5px;"/> Subscribe
        </button>
      </form>
    </div>
  </div> <div class="footer-divider" id="iy5fek" style="border-top: 1px solid #e5e7eb; margin-top: 40px; width: 100%;">
    <div class="footer-bottom" id="ikz5an" style="max-width: 1200px; margin: 0 auto; padding: 20px 0; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 15px;">
      <span class="footer-copyright" id="issa1h" style="font-size: 14px; color: #6b7280;">© 2025 notesprep. All rights reserved.</span>
      <div class="footer-legal-links" id="i2y36x" style="display: flex; gap: 15px;">
        <a class="gjs-t-link legal-link" href="https://notesprep.com/terms/" style="text-decoration: none; font-size: 14px; color: #6b7280;">Terms</a>
        <a class="gjs-t-link legal-link" href="https://notesprep.com/privacy-policy/" style="text-decoration: none; font-size: 14px; color: #6b7280;">Privacy</a>
        <a class="gjs-t-link legal-link" href="https://notesprep.com/cookies/" style="text-decoration: none; font-size: 14px; color: #6b7280;">Cookies</a>
      </div>
    </div>
  </div>`;
        console.log('footerNav updated');
    } else {
        console.log('Instagram link with ID "iq68k5" not found');
    }
	
    console.log('All navigation updates completed');
});
document.addEventListener('DOMContentLoaded', () => {
    // 1. Ensure the formspree function is ready
    window.formspree = window.formspree || function () { 
        (formspree.q = formspree.q || []).push(arguments); 
    };

    // 2. Initialize the newsletter form
    const newsletterForm = document.querySelector('#newsletter-form');
    if (newsletterForm) {
        formspree('initForm', { 
            formElement: '#newsletter-form', 
            formId: 'meevqjyp' 
        });
    }
});