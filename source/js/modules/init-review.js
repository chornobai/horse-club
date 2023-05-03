
const rowCount = () => {

  const reviewItems = document.querySelectorAll('.review-item');

  reviewItems.forEach((el) => {
    const reviewText = el.querySelector('.review-item__describe').querySelector('p');
    // const reviewBtn = el.querySelector('.review-btn');
    let reviewStyle = getComputedStyle(reviewText);
    let reviewLineHight = Number.parseInt(reviewStyle.getPropertyValue('line-height'));
    let reviewHeight = reviewText.scrollHeight;
    let rows = reviewHeight / reviewLineHight;


    if (rows > 3) {
      el.classList.add('hide-text');
    } else if (rows < 3) {
      el.classList.remove('hide-text');
    }

  })

}

function initReview() {
  setTimeout(() => {
    rowCount();
  }, 500);
  window.addEventListener('resize', rowCount)
}

window.initReview = initReview;

export {initReview, rowCount};

