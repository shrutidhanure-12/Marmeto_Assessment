

const productData = {
    men: [
          // Add men's products...
        { id: 1, title: "Mens Kurta", vendor: "Manyvar", price: 1199, comparePrice: 1299, image: "/images/man1.jpg", badge: "Wedding Special", discount: "50% Off" },
        { id: 2, title: "RCB Tshirt", vendor: "Puma", price: 2199, comparePrice: 4299, image: "/images/man2.jpg", badge: "", discount: "50% Off" },
        { id: 3, title: "Green Charm", vendor: "Myntra", price: 1399, comparePrice: 1499, image: "/images/man3.jpg", badge: "On offer", discount: "50% Off" },
        { id: 4, title: "Mens Tshirt", vendor: "Myntra", price: 599, comparePrice: 799, image: "/images/man4.jpg", badge: "New season", discount: "50% Off" },
    ],
    women: [
        // Add women's products...
         { id: 1, title: "Women Kurti", vendor: "*Manyvar", price: 1199, comparePrice: 1199, image: "/images/women1.jpg", badge: "Wedding Special", discount: "50% Off" },
        { id: 2, title: "yellow casual ", vendor: "Manyvae", price: 2199, comparePrice: 199, image: "/images/women2.jpg", badge: "", discount: "50% Off" },
        { id: 3, title: "Women Black", vendor: "Myntra", price: 1399, comparePrice: 1399, image: "/images/women3.jpg", badge: "On offer", discount: "50% Off" },
        { id: 4, title: "Metro-FAS.", vendor: "Myntra", price: 599, comparePrice: 1599, image: "/images/women4.jpg", badge: "New season", discount: "50% Off" },
    ],
    kids: [
        // Add kids' products...
        { id: 1, title: "Kid Blue Shirt", vendor: "Myntra", price: 1199, comparePrice: 1199, image: "/images/kid1.jpg", badge: "Wedding Special", discount: "50% Off" },
        { id: 2, title: "Kids casual ", vendor: "Myntra", price: 2199, comparePrice: 199, image: "/images/kid2.jpg", badge: "", discount: "50% Off" },
        { id: 3, title: "kids Dress", vendor: "Myntra", price: 1399, comparePrice: 1399, image: "/images/kid3.jpg", badge: "On offer", discount: "50% Off" },
        { id: 4, title: "Kids Frok", vendor: "Myntra", price: 599, comparePrice: 1599, image: "/images/kid4.jpg", badge: "New season", discount: "50% Off" },
    ]
};

function createProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.title}" class="product-image">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <h3 class="product-title">${product.title}</h3>
            <p class="product-vendor">${product.vendor}</p>
            <p class="product-price">
                Rs ${product.price.toFixed(2)} 
                <span class="compare-price">${product.comparePrice.toFixed(2)}</span>
                <span class="discount">${product.discount}</span>
            </p>
            <button class="add-to-cart">Add to Cart</button>
        </div>
    `;
}

function displayProducts(category) {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = productData[category].map(createProductCard).join('');
}

function initTabSwitching() {
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            displayProducts(button.dataset.category);
        });
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initTabSwitching();
    displayProducts('men'); // Default to men's products
});