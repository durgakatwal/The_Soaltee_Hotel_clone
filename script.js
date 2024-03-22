// document.getElementById('abo'), addEventListener('click', function (a) {
//     var targetElement = document.querySelector('.about');
//     var offsetTop = targetElement.offsetTop;
//     window.scrollTo({
//         top: offsetTop,
//         behavior: 'smooth'
//     });
// });


function setupScrollOnClick(triggerElementID, targetElementClass) {
    document.getElementById(triggerElementID).addEventListener('click', function (event) {
        var targetElement = document.querySelector(targetElementClass);
        if (targetElement) {
            var offsetTop = targetElement.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        } else {
            console.error("Target element not found!");
        }
    });
}

// Set up scroll functionality for 7 different elements
setupScrollOnClick('log', '.logo');
setupScrollOnClick('jn', '.rightfoot');
setupScrollOnClick('abo', '.about');
setupScrollOnClick('hhh', '.ourhotel');
setupScrollOnClick('din', '.Dine');
setupScrollOnClick('me', '.mae');
setupScrollOnClick('hc', '.bancont');
setupScrollOnClick('ex', '.exp');
setupScrollOnClick('con', '.leftfoot');
setupScrollOnClick('hom', '.navigation');
setupScrollOnClick('oh', '.ourhotel');
setupScrollOnClick('met', '.mae');
// setupScrollOnClick('c', '.leftfoot');


//for the buttons
function navigateToPageOnClick(buttonID) {
    document.getElementById(buttonID).addEventListener('click', function () {
        var nextPage;
        switch (buttonID) {
            case 'ktm':
                nextPage = 'https://www.soaltee.com/branches/the-soaltee-kathmandu';
                break;
            case 'ng':
                nextPage = 'https://www.soaltee.com/branches/soaltee-westend-premier-nepalgunj';
                break;
            case 'it':
                nextPage = 'https://www.soaltee.com/branches/soaltee-westend-itahari';
                break;
            case 'bn':
                nextPage = 'book.html';
                break;
            case 'hcreg':
                nextPage = 'http://127.0.0.1:5500/registration.html';
                break;
            case 'gta':
                nextPage = 'https://www.soaltee.com/branches/the-soaltee-kathmandu/restaurant-details/garden-terrace-all-day-dining';
                break;
            case 'pat':
                nextPage = 'https://www.soaltee.com/branches/the-soaltee-kathmandu/restaurant-details/patio';
                break;
            case 'sl':
                nextPage = 'https://www.soaltee.com/branches/the-soaltee-kathmandu/restaurant-details/sports-lounge';
                break;
            case 'mm':
                nextPage = 'https://www.soaltee.com/branches/the-soaltee-kathmandu/meeting-details/megha-malhar';
                break;
            case 'ss':
                nextPage = 'https://www.soaltee.com/branches/the-soaltee-kathmandu/meeting-details/sur-sudha';
                break;
            case 'mal':
                nextPage = 'https://www.soaltee.com/branches/the-soaltee-kathmandu/meeting-details/malshree';
                break;
            case 'gal':
                nextPage = 'https://www.soaltee.com/branches/the-soaltee-kathmandu/gallery';
                break;
            case 'arrow':
                nextPage = 'http://127.0.0.1:5500/registration.html';
                break;
            case 'dev':
                nextPage = 'http://127.0.0.1:5500/profile.html';
                break;
            case 'exper':
                nextPage = 'http://127.0.0.1:5500/index.html';
                break;
            case 'c':
                nextPage = 'https://www.soaltee.com/contact';
                break;
            default:
                nextPage = 'http://127.0.0.1:5500/index.html'; // Replace 'default.html' with the URL of a default page if no match is found
        }
        window.location.href = nextPage;
    });
}

// Set up navigation for each button
navigateToPageOnClick('ktm');
navigateToPageOnClick('ng');
navigateToPageOnClick('it');
navigateToPageOnClick('bn');
navigateToPageOnClick('hcreg');
navigateToPageOnClick('gta');
navigateToPageOnClick('pat');
navigateToPageOnClick('sl');
navigateToPageOnClick('mm');
navigateToPageOnClick('ss');
navigateToPageOnClick('mal');
navigateToPageOnClick('gal');
navigateToPageOnClick('arrow');
navigateToPageOnClick('dev');
navigateToPageOnClick('exper');
navigateToPageOnClick('log');
navigateToPageOnClick('c');





// document.addEventListener('DOMContentLoaded', function() {
//     var openSecondaryPageLink = document.getElementById('bn');
//     openSecondaryPageLink.addEventListener('click', function(event) {
//         event.preventDefault();

//         window.location.href = this.getAttribute('href');
//     });
// });






