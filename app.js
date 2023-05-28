let mainMenu = document.getElementById('main_menu');
let closeMenu = document.getElementById('close_menu');
let openMenu = document.getElementById('open_menu');
let menuLinks = document.querySelectorAll('#main_menu a');
// Hide the menu initially
mainMenu.classList.add('hidden');
closeMenu.addEventListener("click", () => {
    mainMenu.classList.add('hidden');
});


menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mainMenu.classList.add('hidden');
    });
});

openMenu.addEventListener("click", () => {
    mainMenu.classList.remove('hidden');
});

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mainMenu.classList.add('hidden');
    });
});

function openModal(productId) {
    // Get the product details based on the productId
    const productDetails = getProductDetails(productId);

    // Set the product details in the modal
    document.getElementById('productDetails').innerHTML = productDetails;

    // Show the modal
    document.getElementById('modal').classList.remove('hidden');
}

function closeModal() {
    // Hide the modal
    document.getElementById('modal').classList.add('hidden');
}

function sendOrder(productId) {
    const orderDetails = "Hi, I would like to place an Order " + productId
    const whatsappNumber = 8921494337; // Replace with your WhatsApp phone number

    const encodedMessage = encodeURIComponent(orderDetails);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
}

function getProductDetails(productId) {

    if (productId === 'product1') {
        return 'Vaidyamrutam haircare oil is a traditional ayurvedic preparation which makes hair root healthier and strong.its a proven and effective formulation of Dr. Vineetha manoj,expert in Ayurveda cosmetology. Vaidyamrutam hair oil will reduce hairfall, removes dandruff and promotes hairgrowth. It nourishes your hair and its a complete solution for a healthy hair. <br> <b>Ingredients</b> <br>Durva(Cynodon dactylon) <br>Kumari(Aloevera) <br>Neeli(Indigofera Tinctoria) <br> Coconut milk <br>Karavi(nigella sativa) <br> Coconut oil <br> <u><b>Directions to Use:</b> </u> <br> Daily apply required amount of oil and massage for 5 minutes and wash using herbal cleansing powder or Aditi herbal shampoo'

    } else if (productId === 'buy1') {
        sendOrder(productId)
    } else if (productId === 'product2') {
        return "Vaidyamrutam hair care oil suggests the use of Aditi herbal shampoo which is added with a natural formula of aloe vera and Triphala which acts as an antibacterial cleanser for the hair. It's an anti-dandruff and mild shampoo that can be used on a daily basis <br> Clinically proven, mild herbal shampoo for hair fall control. It nourishes, conditions and moisturises the scalp.";
    }
    return '';
}


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});