const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el))

  //Como usar map e useRef pra fazer o mesmo que o código acima

  //Ao inves de usar forEach use map: por que não usar map sobre uma referencia do useRef dos elementos com a classe hidden.Por exemplo, imagine que hiddenElements é uma referencia de todos os elementos com a classe hidden e map esta no lugar de foreach: 
  // hiddenElements.map((el) => observer.observe(el))

