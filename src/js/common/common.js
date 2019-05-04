{
  console.log(
    Array.from(document.querySelectorAll('a')).map((x) => {
      x.style.display = 'block'
      x.style.color = 'green'
      x.style.fontWeight = 'bold'
    })
  )
};
