window.getCurrentDir = () => window.location.pathname.split('/').pop();

let mcqNumber = Number(window.location.pathname.match(/mcq(\d+)/)?.[1]);
console.log("MCQ Number:", mcqNumber); // Should show 1

console.log(mcqNumber);


document.addEventListener('DOMContentLoaded', function() {
	const elem = document.getElementById('q123');
	window.arrayNumber = mcqNumber - 1;
    window.revealElement = function() {
        document.querySelector('.revealed-answer').style.display = 'block';
		
		
		window.currentCorrectValue = window.questions[window.arrayNumber].correct;
		window.correctOptionID = 'option' + '-' + window.currentCorrectValue;
		document.getElementById(window.correctOptionID).style.backgroundColor = 'green';
		document.getElementById(window.correctOptionID).style.color = 'white';
	
	};

	questionContent = questions[arrayNumber].q;
	option1 = questions[arrayNumber].options[0];
	option2 = questions[arrayNumber].options[1];
	option3 = questions[arrayNumber].options[2];
	option4 = questions[arrayNumber].options[3];
	explanation = questions[arrayNumber].explanation;

window.goToNextPage = function() {
	  const maxPages = window.questions.length;
    const nextPageNumber = mcqNumber + 1;
    
    if (nextPageNumber > maxPages) {
        // Redirect to page 1
        const firstPageURL = location.pathname.replace(/mcq\d+/, 'mcq1');
        location.pathname = firstPageURL;
        console.log('Reached max pages, redirecting to page 1');
    } else {
        // Go to next page normally
        const nextURL = location.pathname.replace(/mcq\d+/, 'mcq' + nextPageNumber);
        location.pathname = nextURL;
    }
};
	window.goToPrevPage = function() {
	const maxPages = window.questions.length;
    const prevPageNumber = mcqNumber - 1;
    
    if (prevPageNumber < 1) {
        // If on page 1, go to last page
        const lastPageURL = location.pathname.replace(/mcq\d+/, 'mcq' + maxPages);
        location.pathname = lastPageURL;
        console.log('At first page, redirecting to last page');
    } else {
        // Go to previous page normally
        const prevURL = location.pathname.replace(/mcq\d+/, 'mcq' + prevPageNumber);
        location.pathname = prevURL;
    }
};




	
elem.innerHTML = `<div class="question-heading"><b>Question ${mcqNumber}</b> : ${questionContent}</div>
	<div class="option-container">
    <fieldset id="i0uj86" class="options-group">
	<div class="option-div">
	  <div class="ind-option-div" id="option-0">
      <label id="im3rle" class="option-item">
        <input type="radio" name="contact_method" value="email" id="ilzl9s" class="option-control" /> ${option1} </label>
		</div>
		<br>
		
		 <div class="ind-option-div" id="option-1">
      <label id="iroqki" class="option-item">
        <input type="radio" name="contact_method" value="whatsapp" id="io707p" class="option-control" /> ${option2} </label>
		</div>
		<br>
		 <div class="ind-option-div" id="option-2">
		 
      <label id="i2hdtl" class="option-item">
        <input type="radio" name="contact_method" value="phone" id="iln1qf" class="option-control" /> ${option3} </label>
		</div>
		<br>
		 <div class="ind-option-div" id="option-3">
	  <label id="rert54" class="option-item">
        <input type="radio" name="contact_method" value="phone" id="iln2qf" class="option-control" /> ${option4} </label>
		</div>
		<br>
		 
		</div>
    </fieldset>

	<button class="submit-option-button" onclick="revealElement()">View Answer</button><br>
	<div class="button-row"><button class="prev-button" onclick="goToPrevPage()">Previous Question</button>
	<button class="next-button" onclick="goToNextPage()">Next Question</button>
	</div>
	<div class="revealed-answer" style="display:none">${explanation}</div></div>`;

});


document.addEventListener('DOMContentLoaded', function() {
	const navBar = document.getElementById('i90df');
	navBar.innerHTML = `<div id="is0gk" class="header-container">
        <a href="https://notesprep.com/#" id="ir3cl" class="gjs-t-link brand-link">
	<img src="https://notesprep.com/logo.svg" alt="NotesPrep Icon" id="ip2st" class="brand-icon" />

          <span id="irlbe" class="brand-name">NotesPrep</span>
        </a>
<nav aria-label="Primary" class="primary-navigation" id="i32qq">
<a class="gjs-t-link nav-link" href="https://notesprep.com/class9" id="iz0tt">Class 9</a>
<a class="gjs-t-link nav-link" href="https://notesprep.com/class10" id="iftme">Class 10</a>
<a class="gjs-t-link nav-link" href="https://notesprep.com/blogs" id="ib7dg">Blogs</a>
<a class="gjs-t-link nav-link" href="https://notesprep.com/entry-tests" id="ik0c6">Entry Tests</a>
<a class="gjs-t-link nav-link" href="https://notesprep.com/resources" id="iuxnk">Resources</a>
<a class="gjs-t-link nav-link" href="https://notesprep.com/contact-us" id="ixd44">Contact</a>
</nav>
        <button type="button" aria-label="Open menu" aria-controls="i32qq" aria-expanded="false" data-js="hamburger" id="iora6" class="hamburger-btn">
          <img src="https://api.iconify.design/lucide-menu.svg?color=%230f172a" alt="" id="iqvio" class="hamburger-icon" />
        </button>
      </div>`;
});

document.addEventListener('DOMContentLoaded', function() {
	const aboutSection = document.getElementById('about');
	aboutSection.innerHTML = `      <div id="ieip5r" class="about-container">
        <div id="i4c2gc" class="about-content">
          <h2 id="iikf3z" class="gjs-t-h2 section-title">About NotesPrep</h2>
          <p id="izgt5t" class="about-paragraph">NotesPrep is built by educators and exam mentors to deliver concise, high-retention notes and practice material. We focus on clarity, step-by-step explanations, and exam relevance to help you revise smarter.</p>
          <div id="ihffy9" class="about-stats">
            <div id="iqbnj8" class="gjs-t-border stat-card">
              <div id="iied1d" class="stat-header">
                <img src="https://api.iconify.design/lucide-file-stack.svg?color=%231e3a8a" alt="Files Icon" id="ijm79p" class="stat-icon" />
                <span id="it3rs3" class="stat-text">120+ PDFs</span>
              </div>
              <span id="ioq1rg" class="stat-subtext">Across subjects and levels</span>
            </div>
            <div id="iimuio" class="gjs-t-border stat-card">
              <div id="i59qpv" class="stat-header">
                <img src="https://api.iconify.design/lucide-users.svg?color=%231e3a8a" alt="Users Icon" id="i3ja69" class="stat-icon" />
                <span id="iguqy6" class="stat-text">5k+ learners</span>
              </div>
              <span id="i3zs2q" class="stat-subtext">Guided every month</span>
            </div>
            <div id="ix2p46" class="gjs-t-border stat-card">
              <div id="ir3xnn" class="stat-header">
                <img src="https://api.iconify.design/lucide-trophy.svg?color=%231e3a8a" alt="Trophy Icon" id="ici0x1" class="stat-icon" />
                <span id="i95zcp" class="stat-text">Top results</span>
              </div>
              <span id="ihqwtg" class="stat-subtext">Board and entry tests</span>
            </div>
          </div>
        </div>
        <div id="iapk2k" class="gjs-t-border about-media">
          <img src="https://app.grapesjs.com/api/assets/random-image?query=%22teacher%20explaining%22&amp;w=1200&amp;h=800" alt="Teacher explaining concepts" id="i74wq8" width="594" height="380" loading="lazy" data-desktop-src="https://app.grapesjs.com/api/assets/random-image?query=%22teacher%20explaining%22&amp;w=1200&amp;h=800" data-mobile-src="https://app.grapesjs.com/api/assets/random-image?query=%22teacher%20explaining%22&amp;w=480&amp;h=280" class="about-image mobile-img" />
          <div id="i1ngqg" class="about-badge">
            <img src="https://api.iconify.design/lucide-heart-handshake.svg?color=%231e3a8a" alt="Support Icon" id="ifbyi3" class="badge-icon" />
            <p id="ih632f" class="badge-text">We prioritize student support and accessible content</p>
          </div>
        </div>
      </div>`;
});

document.addEventListener('DOMContentLoaded', function() {
	const footer = document.getElementById('i6lnig');
	footer.innerHTML = `      <div id="iv53fi" class="footer-container">
        <div id="ikd6lx" class="footer-column">
          <a href="https://notesprep.com/#" id="ik585v" class="gjs-t-link footer-brand-link">
            <img src="https://cdn.grapesjs.com/workspaces/cmkwruev38jlaybccwihsjbj5/assets/6f15ceee-3f30-4741-ae8d-51f3bc520494__logo.svg" alt="NotesPrep Icon" id="in8pwf" class="footer-brand-icon" />
            <span id="iyo8yn" class="footer-brand-name">NotesPrep</span>
          </a>
          <p id="inp52p" class="footer-text">Modern, minimal notes that help you focus and retain key concepts.</p>
          <div id="iuh5yj" class="footer-social">
            <a href="https://www.instagram.com/notesprep.com" id="iq68k5" class="gjs-t-link social-link">
              <img src="https://api.iconify.design/lucide-instagram.svg?color=%230f172a" alt="LinkedIn" id="i9amsl" class="social-icon" />
            </a>
            <a href="https://youtube.com/@notesprep.com" id="iguhgs" class="gjs-t-link social-link">
              <img src="https://api.iconify.design/lucide-youtube.svg?color=%230f172a" alt="YouTube" id="ihc0ld" class="social-icon" />
            </a>
          </div>
        </div>
        <div id="i3cuug" class="footer-column">
          <h4 id="ipkdoo" class="footer-heading">Explore</h4>
          <a href="https://notesprep.com/#secondary" id="icy77g" class="gjs-t-link footer-link">Secondary Notes</a>
          <a href="https://notesprep.com/#higher-secondary" id="ilhc7p" class="gjs-t-link footer-link">Higher Secondary Notes</a>
          <a href="https://notesprep.com/#entry-test" id="i9tp4y" class="gjs-t-link footer-link">Entry Test Prep</a>
          <a href="https://notesprep.com/#resources" id="i64fuj" class="gjs-t-link footer-link">Resources &amp; PDFs</a>
        </div>
        <div id="i533p4" class="footer-column">
          <h4 id="ifdqnf" class="footer-heading">Help</h4>
          <a href="https://notesprep.com/#about" id="ifeu3p" class="gjs-t-link footer-link">About Us</a>
          <a href="https://notesprep.com/#contact" id="i6kovw" class="gjs-t-link footer-link">Contact</a>
          <a href="https://notesprep.com/faq" id="i1o2zi" class="gjs-t-link footer-link">FAQs</a>
          <a href="https://notesprep.com/privacy-policy" id="ij5q7y" class="gjs-t-link footer-link">Privacy Policy</a>
        </div>
        <div id="ifx9c3" class="footer-column">
          <h4 id="ibp3mz" class="footer-heading">Newsletter</h4>
          <p id="iw7c21" class="footer-text">Get updates on new notes, practice sets, and study tips.</p>
          <form method="get" action="#" id="i13t2g" class="gjs-t-button newsletter-form">
            <input type="email" placeholder="Your email" required id="iageri" class="newsletter-input" />
          </form>
	</div>
        <button type="button" id="i81yxa" class="gjs-t-button newsletter-button">
          <img src="https://api.iconify.design/lucide-send.svg?color=%23ffffff" alt="Send Icon" id="ir1egw" class="button-icon" /> Subscribe </button>
      </div>
      <div id="iy5fek" class="footer-divider">
        <div id="ikz5an" class="footer-bottom">
          <span id="issa1h" class="footer-copyright">© 2025 notesprep. All rights reserved.</span>
          <div id="i2y36x" class="footer-legal-links">
            <a href="https://notesprep.com/terms" id="iw4fka" class="gjs-t-link legal-link">Terms</a>
            <a href="https://notesprep.com/privacy-policy" id="in7fsw" class="gjs-t-link legal-link">Privacy</a>
            <a href="https://notesprep.com/cookies" id="i36amh" class="gjs-t-link legal-link">Cookies</a>
          </div>
        </div>
      </div>`;



    if (window.MathJax) {
        console.log('🔄 Rendering math with MathJax...');
        
        // Method 1: Typeset the specific element
        MathJax.typesetPromise([elem])
            .then(() => {
                console.log('✅ Math rendered successfully!');
                // Check if rendering worked
                const mathElements = elem.querySelectorAll('.mjx-chtml, .MathJax');
                console.log(`Found ${mathElements.length} rendered math elements`);
            })
            .catch((err) => {
                console.error('❌ MathJax rendering error:', err);
                
                // Method 2: If that fails, try rendering everything with a delay
                setTimeout(() => {
                    MathJax.typesetPromise()
                        .then(() => console.log('✅ Math rendered on retry'))
                        .catch(e => console.error('Still failed:', e));
                }, 100);
            });
    } else {
        console.error('❌ MathJax not loaded!');
        
        // Try to load MathJax dynamically if missing
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.min.js';
        script.onload = () => {
            console.log('✅ MathJax dynamically loaded');
            MathJax.typesetPromise([elem]);
        };
        document.head.appendChild(script);
    }
});























