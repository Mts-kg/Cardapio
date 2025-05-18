const items = document.querySelectorAll('.menu-item');

items.forEach(item => {
  const name = item.querySelector('.dish-name');
  const img = item.querySelector('.dish-thumb');
  const details = item.querySelector('.dish-details');

  const toggle = () => {
    document.querySelectorAll('.dish-details').forEach(d => {
      if (d !== details) d.classList.remove('show');
    });
    details.classList.toggle('show');
  };

  name.addEventListener('click', toggle);
  img.addEventListener('click', toggle);
});
