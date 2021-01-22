/* main-nav toggle */
const mainNav = document.getElementById('js-menu');
const navBarToggle = document.getElementById('menu-btn');

navBarToggle.addEventListener('click', function () {

    const className = mainNav.getAttribute('class');
    if (className === 'hide-nav') {
        mainNav.className = 'active-nav';
    }
    else {
        mainNav.className = 'hide-nav';
    }
});

/* footer */
const date = new Date();
const year = date.getFullYear();
document.getElementById('year').textContent = year;

/*side nav functions*/

function openAdminNav() {
    document.getElementById('admin-btn').style.display = 'none';
    document.getElementById('admin-nav').style.width = '250px';
}

function closeAdminNav() {
    document.getElementById('admin-btn').style.display = 'block';
    document.getElementById('admin-nav').style.width = '0';
}

//code to display table modals

let cards = document.getElementsByClassName('thumb');
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function () {
        let modal = document.getElementById(this.dataset.modal);
        modal.style.display = 'block';
    });
}


//close modals
let closers = document.getElementsByClassName('close');
for (let i = 0; i < closers.length; i++) {
    closers[i].addEventListener('click', function () {
        let modal = document.getElementById(this.dataset.modal);
        modal.style.display = 'none';
    });
}

//jquery code

$(function () {
    $('.thumb').on('click', function () {
        let imgSrc = $(this).attr('src');
        $('#lightbox-content').html(`<img src=${imgSrc} class="img-responsive" />`);
        $('#lightbox-container').show();
        $('#lightbox-container').on('click', function () {
            $(this).hide();
        });
    });
    //team page
    $('aside ul li').on('click', function (e) {
        e.preventDefault();
        $('li').removeClass('active-department');
        $(this).addClass('active-department');
        //remove active class from main part of the page
        $('.leadership div').removeClass('active-category').addClass('hidden-category');
        //get active category
        var $activeSection = this.dataset.category;
        $(`.leadership #${$activeSection}`).removeClass('hidden-category').addClass('active-category');
    });
});