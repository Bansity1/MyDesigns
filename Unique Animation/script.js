// functions
function appendNewCard() {
    const card = new Card({
      imageUrl: urls[cardCount % 5],
      onDismiss: appendNewCard,
      onLike: () => {
        like.classList.add('trigger');
        like.addEventListener('animationend', () => {
          like.classList.remove('trigger');
        });
      },
      onDislike: () => {
        dislike.classList.add('trigger');
        dislike.addEventListener('animationend', () => {
          dislike.classList.remove('trigger');
        });
      }
    });
    swiper.append(card.element);
    cardCount++;
  
    const cards = swiper.querySelectorAll('.card:not(.dismissing)');
    cards.forEach((card, index) => {
      card.style.setProperty('--i', index);
    });
  }
  
  // first 5 cards
  for (let i = 0; i < 5; i++) {
    appendNewCard();
  }