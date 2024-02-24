function Togglepopup() {
  document.querySelector('.popup').classList.toggle('active');
}

document.querySelector('.btn').addEventListener('click', () => {
  const textValue = textElement('.price');
  const discount = (textValue * 30) / 100;
  const GetDiscount = textValue - discount;
  const element = document.querySelector('.discount-amount');
  const spn = document.createElement('span');
  spn.innerHTML = GetDiscount;
  element.appendChild(spn);
});
