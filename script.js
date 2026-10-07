document.addEventListener('DOMContentLoaded', () => {
  const counts = document.querySelectorAll('[data-cart-count]');
  let demoCount = 0;
  document.querySelectorAll('[data-add-product]').forEach((button) => {
    button.addEventListener('click', () => {
      demoCount += 1;
      counts.forEach((count) => { count.textContent = String(demoCount); });
      const feedback = document.getElementById('catalog-feedback');
      if (feedback) feedback.textContent = '¡Listo! Producto agregado al carrito de demostración.';
      button.innerHTML = 'Agregado <span>✓</span>';
      window.setTimeout(() => { button.innerHTML = 'Agregar al carrito <span>＋</span>'; }, 1300);
    });
  });

  const terms = document.getElementById('terms-check');
  const submit = document.getElementById('register-submit');
  const registerForm = document.getElementById('register-form');
  if (terms && submit && registerForm) {
    terms.addEventListener('change', () => { submit.disabled = !terms.checked; });
    registerForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const feedback = document.getElementById('register-feedback');
      const fields = [...registerForm.querySelectorAll('input:not([type="checkbox"])')];
      const emptyField = fields.find((field) => !field.value.trim());
      if (emptyField) {
        feedback.textContent = 'Completa todos los campos antes de continuar.';
        emptyField.focus();
        return;
      }
      const invalidField = fields.find((field) => !field.checkValidity());
      if (invalidField) {
        feedback.textContent = invalidField.validationMessage || 'Revisa el formato de tus datos.';
        invalidField.focus();
        return;
      }
      if (!terms.checked) {
        feedback.textContent = 'Acepta los términos para continuar.';
        return;
      }
      feedback.textContent = '¡Gracias! Tu registro de demostración se completó.';
      registerForm.reset();
      submit.disabled = true;
    });
  }

  const moreButton = document.getElementById('more-toggle');
  if (moreButton) {
    moreButton.addEventListener('click', () => {
      const extra = document.getElementById('team-extra');
      const expanded = moreButton.getAttribute('aria-expanded') === 'true';
      extra.hidden = expanded;
      moreButton.setAttribute('aria-expanded', String(!expanded));
      moreButton.innerHTML = expanded ? 'Ver más <span>＋</span>' : 'Ver menos <span>−</span>';
    });
  }

  const currency = (value) => `$${value.toLocaleString('es-MX')} MXN`;
  const rows = [...document.querySelectorAll('.cart-row[data-price]')];
  const total = document.getElementById('cart-total');
  const updateCart = () => {
    let sum = 0;
    rows.forEach((row) => {
      const input = row.querySelector('.quantity-input');
      const quantity = Math.max(0, Math.floor(Number(input.value) || 0));
      input.value = String(quantity);
      const line = Number(row.dataset.price) * quantity;
      row.querySelector('.line-total').textContent = `$${line.toLocaleString('es-MX')}`;
      sum += line;
    });
    if (total) total.textContent = currency(sum);
  };
  rows.forEach((row) => row.querySelector('.quantity-input').addEventListener('input', updateCart));

  const searchForm = document.getElementById('search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const query = document.getElementById('search-input').value.trim();
      const results = document.getElementById('search-results');
      if (!query) {
        results.innerHTML = '<div class="results-placeholder"><span>⌕</span><p>Escribe algo para comenzar tu búsqueda.</p></div>';
        return;
      }
      const heading = document.createElement('h2');
      heading.className = 'result-heading';
      heading.textContent = `Resultados para la búsqueda de ${query}`;
      const list = document.createElement('div');
      list.className = 'result-items';
      [['CERÁMICA', 'Jarrón Alba', 'Pieza torneada en tono arena'], ['TEXTIL', 'Manta Nube', 'Algodón suave tejido'], ['MESA', 'Taza Bruma', 'Gres con acabado salvia']].forEach(([category, name, description]) => {
        const item = document.createElement('article');
        item.className = 'result-item';
        const label = document.createElement('span'); label.textContent = category;
        const title = document.createElement('strong'); title.textContent = name;
        const detail = document.createElement('p'); detail.textContent = description;
        item.append(label, title, detail); list.append(item);
      });
      results.replaceChildren(heading, list);
    });
  }
});
