document.addEventListener('DOMContentLoaded', () => {
  const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

  document.querySelectorAll('.save-for-later').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.getAttribute('data-item');
      savedItems.push(item);
      localStorage.setItem('savedItems', JSON.stringify(savedItems));
      alert(`You have ${savedItems.length} items saved for later.`);
    });
  });

  const savedItemsList = document.getElementById('saved-items-list');
  if (savedItemsList) {
    savedItemsList.innerHTML = savedItems.map(item => `<p>${item}</p>`).join('');
  }

  const commentForm = document.getElementById('comment-form');
  if (commentForm) {
    commentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Comment submitted!');
    });
  }

  // jQuery functionality
  $(document).ready(function(){
    // Hide/Show function
    $(".image-gallery img").click(function(){
      $(this).toggle();
    });

    // Dropdown menu
    $("nav ul li").hover(function(){
      $(this).find("ul").stop().slideToggle();
    });

    // Animation effects
    $("header").hover(
      function(){
        $(this).animate({fontSize: "2.5em"}, 500);
      },
      function(){
        $(this).animate({fontSize: "2em"}, 500);
      }
    );

    // Chained effects
    $(".block").click(function(){
      $(this).slideUp(500).slideDown(500);
    });

    // Like functionality
    $(".like-item").click(function(){
      const item = $(this).data('item');
      alert(`You liked ${item}!`);
    });
  });
});
