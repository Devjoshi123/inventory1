document.addEventListener('DOMContentLoaded', () => {
    fetchItems();
  
    const form = document.getElementById('inventory-form');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const name = document.getElementById('name').value;
      const quantity = document.getElementById('quantity').value;
      const description = document.getElementById('description').value;
  
      const response = await fetch('http://localhost:3000/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, quantity, description })
      });
  
      const newItem = await response.json();
      addItemToDOM(newItem);
      form.reset();
    });
  });
  
  async function fetchItems() {
    const response = await fetch('http://localhost:3000/items');
    const items = await response.json();
    items.forEach(item => addItemToDOM(item));
  }
  
  function addItemToDOM(item) {
    const list = document.getElementById('inventory-list');
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    itemDiv.innerHTML = `
      <h3>${item.name}</h3>
      <p>Quantity: ${item.quantity}</p>
      <p>${item.description}</p>
    `;
    list.appendChild(itemDiv);
  }
  