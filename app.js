console.log("Welcome")
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
    const whatsappNumber = +918921494337; // Replace with your WhatsApp phone number

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
    } else if (productId === 'product4') {
        return "Ventha velichenna / hot processed coconut oil is made from pure coconut milk. Vaidyamrutam ventha velichenna is organic product prepared in a traditional way with attractive aroma. It is rich in antioxidants. Hot processed virgin coconut oil moisturises skin and hair. It nourishes skin and improves skin texture. It prevents dandruff and split ends of hair. It helps to repair your skin and makes it soft. Improves hair growth. It is the best baby massage oil."
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


// document.getElementById('rightArrow').addEventListener('click', function () {
//     document.getElementById('reviewsContainer').scrollBy({
//         left: 200,
//         behavior: 'smooth'
//     });
// });

// document.getElementById('leftArrow').addEventListener('click', function () {
//     document.getElementById('reviewsContainer').scrollBy({
//         left: -200,
//         behavior: 'smooth'
//     });
// });


function scrollReviews(direction) {
    const container = document.querySelector('.review-container');
    const containerScrollAmount = container.scrollWidth - container.clientWidth;
    const scrollDistance = 300;

    if (direction === -1) {
        container.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
    } else if (direction === 1) {
        container.scrollBy({ left: scrollDistance, behavior: 'smooth' });
    }
}

let currentIndex = 0
const reviewContainer = document.querySelector('.review-container');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const reviews = reviewContainer.querySelectorAll('.review-card');


prevButton.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateReviews();
});

nextButton.addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, reviews.length - 1);
    updateReviews();
});

function updateReviews() {
    reviewContainer.scrollTo({
        left: reviews[currentIndex].offsetLeft,
        behavior: 'smooth'
    });
}

updateReviews();

const images = ['img/OIL.jpg', 'img/SHAMPOO.jpg'];
let currentIndexx = 0;

function changeImage() {
    const image = document.querySelector('.photo-slider__image');
    image.style.opacity = 2;

    setTimeout(() => {
        currentIndexx = (currentIndexx + 1) % images.length;
        image.src = images[currentIndexx];
        image.style.opacity = 2;
    }, 2000); // Change photo every 5 seconds
}

setInterval(changeImage, 3000);
