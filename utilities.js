function textElement(ele) {
  const element = document.querySelector(ele);
  const elementValue = parseFloat(element.innerText);
  return elementValue;
}
