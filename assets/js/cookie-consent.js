document.addEventListener('DOMContentLoaded', () => {
    function checkConsent() {
        if (localStorage.getItem('googleConsent') !== 'true') {
          document.getElementById('consent-banner').style.display = 'block';
        } else {
          loadGoogleScripts();
        }
    }
    
    function acceptCookies() {
        localStorage.setItem('googleConsent', 'true');
        document.getElementById('consent-banner').style.display = 'none';
        loadGoogleScripts();
    }
    
    function loadGoogleScripts() {
    // Example: Load Google Analytics
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'G-8ZT7CKH3ML', 'auto');
    ga('send', 'pageview');
    }
    
    checkConsent();    
});