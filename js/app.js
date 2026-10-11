(function () {
  var fl = document.querySelectorAll('.f'), us = document.querySelectorAll('.u');
  fl.forEach(function (b) { b.addEventListener('click', function () {
    fl.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); x.classList.toggle('on', x === b); });
    us.forEach(function (u) { u.hidden = b.dataset.f !== 'all' && u.dataset.t !== b.dataset.f; });
  }); });
  var d = document.getElementById('dlg'); if (!d || !d.showModal) return;
  document.querySelectorAll('.ub').forEach(function (b) { b.addEventListener('click', function () {
    var i = d.querySelector('img'); i.src = b.dataset.img; i.alt = b.dataset.title;
    d.querySelector('h3').textContent = b.dataset.title; d.querySelector('p').textContent = b.dataset.meta;
    d.showModal();
  }); });
  d.addEventListener('click', function (ev) { if (ev.target === d) d.close(); });
})();
