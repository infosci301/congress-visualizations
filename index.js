document.addEventListener('DOMContentLoaded', (event) => {
  // Show the alert when the document is loaded
  alert('Due to the visualizations, this webpage is best viewed on a laptop or computer screen');

  // After the alert, we'll display a confirm dialog with a button
  const userUnderstands = confirm('Click "OK" if you understand and want to proceed.');

  if (!userUnderstands) {
      // User clicked "Cancel" - You might want to redirect them or handle this case
      // window.location.href = 'https://www.example.com/alternative-page';
  }
});


$(document).ready(function(){
    
    $(window).scroll(function(){
        if($(this).scrollTop() >= 500) {
            $("#gotop").fadeIn();
      
            $("#top-btn").click(function(){
                $(window).scrollTop(0);
            });
         }
         else {
             $("#gotop").fadeOut();
         }    
    });
});

function scrollToDelivery() {
    const deliverySection = document.getElementById('delivery');
  

    deliverySection.scrollIntoView({ behavior: 'smooth' });
}
  


const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('fade-in-left') || entry.target.classList.contains('fade-in-right')) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.add('visible');
        }
        observer.unobserve(entry.target); 
      }
    });
  },
  {
    threshold: 0.1 
  });
  

  document.querySelectorAll('.fade-in-section').forEach((section) => observer.observe(section));
  document.querySelectorAll('.fade-in-left').forEach((section) => observer.observe(section));
  document.querySelectorAll('.fade-in-right').forEach((section) => observer.observe(section));

  
  