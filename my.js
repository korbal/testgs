function testGS() {
  const url = "https://script.google.com/macros/s/AKfycbyF-skKhvL961u4KROfBhW6aa8jUzfoiX9govOoJQV5HVGfFeg/exec"

  fetch(url)
    .then(d => d.json())
    .then(d => {
      document.getElementById("app").textContent = d[0].status
    })
}

document.getElementById("btn").addEventListener("click", testGS)