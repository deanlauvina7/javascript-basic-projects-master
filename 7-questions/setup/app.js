//using selectors inside the element
const btns = document.querySelectorAll('.question-btn');
// traversing the dom

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle('show-text');
  });
});