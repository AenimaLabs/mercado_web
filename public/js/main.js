let selectedProducts = [];

function toggleProduct(productName) {
    const index = selectedProducts.indexOf(productName);
    if (index === -1) {
        selectedProducts.push(productName);
        document.querySelector(`[alt="${productName}"]`).style.opacity = '0.5';
    } else {
        selectedProducts.splice(index, 1);
        document.querySelector(`[alt="${productName}"]`).style.opacity = '1';
    }
    updateModal();
}

function updateModal() {
    const productList = document.getElementById('selectedProducts');
    productList.innerHTML = '';
    selectedProducts.forEach(product => {
        const li = document.createElement('li');
        li.textContent = product;
        productList.appendChild(li);
    });
}

