let manuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('navbar');
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');



window.onscroll = () => {
    sections.foreach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.getAttribute('id');

        if(top >= offset && top <  offset + height){
            navLinks.forEach(links => {
                links.classlist.remove('active');
                document.queryselector('header nav a  [href*=' + id + ']').classlist.add('active')
            })
        }
    })
}







menuIcon.onclik = () => {
    menuIcon.classlist.toggle('bx-x');
    navbar.classlist.toggle('active');
}


