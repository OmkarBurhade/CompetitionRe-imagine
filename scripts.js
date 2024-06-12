const sliders = document.querySelectorAll('.Slider');
const MangoSclice = document.querySelectorAll('.MangoSclice');
const leaves = document.querySelectorAll('.leaves');
let currentSlider = 0;

function cursor() {
    let cursor = document.querySelector('.cursor');
    const main = document.querySelector('#main');

    main.addEventListener('mousemove', function (event) {
       
        gsap.to('.cursor', {
            zIndex: 50,
            duration: 0.1,
            left: event.clientX + 'px',
            top: event.clientY + 'px'
        });
    });

    const handleMouseEnter = (el) => {
        el.addEventListener('mouseenter', function () {
           
            gsap.to('.cursor', {
                opacity: 0,
                width: 0,
                height: 0,
                pointerEvents: "none",
                duration: 0.1,
            });
        });

        el.addEventListener('mouseleave', function () {
            gsap.to('.cursor', {
                opacity: 1,
                width: '96px',
                height: '96px',
                backgroundColor: "#d9d9d970",
                pointerEvents: "all",
                duration: 0.1,
            });
        });
    };

    const navElements = document.querySelectorAll('.nav, .aboutMaaza, .mobilenav, .maazaStory, .mobileMaazaStory, .Naturalingredients, .maazafooter');
    navElements.forEach(handleMouseEnter);

  
    const heroSlider = document.querySelector('.heroSlider');
    heroSlider.addEventListener('mouseenter', function () {
        cursor.innerHTML =  `<a href="javascript:void(0); " class="text-[20px] text-[#000000] font-semibold">discover</a>`;
        gsap.to('.cursor', {
            duration: 0.1,
            opacity: 1,
            width: '96px',
            height: '96px',
            backgroundColor: "#d9d9d970",
            pointerEvents: "all",
        });
    });
}
gsap.from(".nav", {
    y: '-10',
    opacity: 0,
    duration: 1,
    ease: Expo.easeInOut
})

function showNextSlider() {
    sliders.forEach((slider) => {
        gsap.set(slider, { zIndex: 10, opacity: 0 });
    });

    const currentSlide = sliders[currentSlider];
    const productImage = currentSlide.querySelector('.hreoProduct');
    const productName = currentSlide.querySelector('.productName');
    const fruitSlices = currentSlide.querySelectorAll('.MangoSclice');
    const leaves = currentSlide.querySelectorAll('.leaves');

    gsap.set(currentSlide, { zIndex: 20, opacity: 1 });
    gsap.to(currentSlide, { duration: 1, opacity: 1, ease: Expo.easeInOut });

    const tl = gsap.timeline();

    tl.fromTo(productName, {
        opacity: 0,
        y: 20
    }, {
        delay: 1,
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "power2.inOut"
    }, "-=0.5");

    tl.fromTo(productImage, {
        opacity: 0,
        scale: 0.9
    }, {
        delay: 0.8,
        duration: 1,
        opacity: 1,
        scale: 1,
        ease: "power2.inOut"
    }, "-=1");

    fruitSlices.forEach((el) => {
        tl.fromTo(el, {
            opacity: 0,
            scale: 0.5
        }, {
            duration: 0.9,
            opacity: 1,
            scale: 1,
            ease: "power2.inOut"
        }, "-=1");
    });

    leaves.forEach((el) => {
        tl.fromTo(el, {
            opacity: 0,
            y: 10
        }, {
            duration: 0.5,
            opacity: 1,
            y: 0,
            ease: "power2.inOut"
        }, "-=0.5");
    });

    currentSlider = (currentSlider + 1) % sliders.length;
    setTimeout(showNextSlider, 6000);

    sliders.forEach((el) => {
        el.addEventListener('mousemove', function(det) {
            MangoSclice.forEach((m) => {
                gsap.to(m, {
                    x: gsap.utils.mapRange(0, window.innerWidth, -10, 10, det.clientX),
                    y: gsap.utils.mapRange(0, window.innerHeight, -5, 5, det.clientY),
                    ease: Power4,
                    duration: 0.5,
                });
            });
        });
    });

    sliders.forEach((el) => {
        el.addEventListener('mousemove', function(det) {
            leaves.forEach((m) => {
                gsap.to(m, {
                    y: gsap.utils.mapRange(0, window.innerHeight, -5, 0, det.clientY),
                    ease: Power4,
                    duration: 0.5
                });
            });
        });
    });
}


function realPage() {

    gsap.to(".cont", {
        backgroundColor: "#0293B6",
        scrollTrigger: {
            trigger: ".maazaStory",
            scroller: "body",
            start: "top 20%",
            end: "top -75%",
            scrub: 1
        }
    })
    gsap.to(".Naturalingredients", {
        backgroundColor: "#fff",
        scrollTrigger: {
            trigger: ".Naturalingredients",
            scroller: "body",
          
            start: "top 100%",
            end: "top -75%",
            scrub: 0.1
        }
    })
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".maazaStory",
            start: "top -50%",
            end: "bottom 60%",
            scrub: 2
        },
        xPercent: -280,
        ease: Power4
    })

}

function loco() {
    (function() {
        const locomotiveScroll = new LocomotiveScroll();

    })();
}


function owl() {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    const itemsData = [{
            Name: 'Soursop',
            image: 'assets/images/carouselImage/soursop/Soursop.png',
            id: 'Soursop',
            SliceImages: [
                'assets/images/carouselImage/soursop/1.png',
                'assets/images/carouselImage/soursop/2.png',
                'assets/images/carouselImage/soursop/3.png',
                'assets/images/carouselImage/soursop/4.png',
                'assets/images/carouselImage/soursop/5.png'
            ]
        },
        {
            Name: 'Passionfruit',
            image: 'assets/images/carouselImage/Passionfruit/Passionfruit.png',
            id: 'Passionfruit',
            SliceImages: [
                'assets/images/carouselImage/Passionfruit/1.png',
                'assets/images/carouselImage/Passionfruit/2.png',
                'assets/images/carouselImage/Passionfruit/3.png',
                'assets/images/carouselImage/Passionfruit/4.png',
                'assets/images/carouselImage/Passionfruit/5.png'
            ]
        },
        {
            Name: 'Mango',
            image: 'assets/images/carouselImage/mango/mango.png',
            id: 'Mango',
            SliceImages: [
                'assets/images/carouselImage/mango/1.png',
                'assets/images/carouselImage/mango/2.png',
                'assets/images/carouselImage/mango/3.png',
                'assets/images/carouselImage/mango/4.png',
                'assets/images/carouselImage/mango/5.png'
            ]
        },
        {
            Name: 'Tropical',
            image: 'assets/images/carouselImage/Tropical/Tropical.png',
            id: 'Tropical',
            SliceImages: [
                'assets/images/carouselImage/Tropical/1.png',
                'assets/images/carouselImage/Tropical/2.png',
                'assets/images/carouselImage/Tropical/3.png',
                'assets/images/carouselImage/Tropical/4.png',
                'assets/images/carouselImage/Tropical/5.png'
            ]
        },
        {
            Name: 'Guava',
            image: 'assets/images/carouselImage/Guava/Guava.png',
            id: 'Guava',
            SliceImages: [
                'assets/images/carouselImage/Guava/1.png',
                'assets/images/carouselImage/Guava/2.png',
                'assets/images/carouselImage/Guava/3.png',
                'assets/images/carouselImage/Guava/4.png',
                'assets/images/carouselImage/Guava/5.png'
            ]
        },
        {
            Name: 'Lychee',
            image: 'assets/images/carouselImage/Lychee/Lychee.png',
            id: 'Lychee',
            SliceImages: [
                'assets/images/carouselImage/Lychee/1.png',
                'assets/images/carouselImage/Lychee/2.png',
                'assets/images/carouselImage/Lychee/3.png',
                'assets/images/carouselImage/Lychee/4.png',
                'assets/images/carouselImage/Lychee/5.png'
            ]
        },
        {
            Name: 'Pomegranate',
            image: 'assets/images/carouselImage/Pomegranate/Pomegranate.png',
            id: 'Pomegranate',
            SliceImages: [
                'assets/images/carouselImage/Pomegranate/1.png',
                'assets/images/carouselImage/Pomegranate/2.png',
                'assets/images/carouselImage/Pomegranate/3.png',
                'assets/images/carouselImage/Pomegranate/4.png',
                'assets/images/carouselImage/Pomegranate/5.png'
            ]
        },
        {
            Name: 'Banana',
            image: 'assets/images/carouselImage/Banana/Banana.png',
            id: 'Banana',
            SliceImages: [
                'assets/images/carouselImage/Banana/1.png',
                'assets/images/carouselImage/Banana/2.png',
                'assets/images/carouselImage/Banana/3.png',
                'assets/images/carouselImage/Banana/4.png',
                'assets/images/carouselImage/Banana/5.png'
            ]
        },
        {
            Name: 'Coconut',
            image: 'assets/images/carouselImage/Coconut/Coconut.png',
            id: 'Coconut',
            SliceImages: [
                'assets/images/carouselImage/Coconut/1.png',
                'assets/images/carouselImage/Coconut/2.png',
                'assets/images/carouselImage/Coconut/3.png'
            ]
        },
        {
            Name: 'Papaya',
            image: 'assets/images/carouselImage/Papaya/Papaya.png',
            id: 'Papaya',
            SliceImages: [
                'assets/images/carouselImage/Papaya/1.png',
                'assets/images/carouselImage/Papaya/2.png',
                'assets/images/carouselImage/Papaya/3.png',
                'assets/images/carouselImage/Papaya/4.png',
                'assets/images/carouselImage/Papaya/5.png'
            ]
        }
        // Add more items as needed
    ];

    function getDataFromArray() {
        const createImageElements = (images) => {
          return images.map((src, idx) => `<img id="itemSlice${idx + 1}" class="absolute top-[50%] opacity-0 left-[50%]" src="${src}" alt="">`).join('');
        };
    
        const clutter = itemsData.map((elem) => `
          <div id="${elem.id}" class="carousel-item flex-shrink-0 relative rounded-[30px] h-[54vh] box-border p-[20px] flex flex-col items-center justify-between text-center">
            <div class="itemSlice">
              ${createImageElements(elem.SliceImages)}
            </div>
            <div class="itemImage mt-16">
              <img src="${elem.image}" alt="">
            </div>
            <div class="text-xl text-white backdrop-blur-sm bg-[#ffffff3e] p-3 w-64 relative redirect bottom-0 rounded-full border-[1px] opacity-0 border-solid border-[#fff]"><a href='javascript:void(0)'>${elem.Name}</a></div>
          </div>
        `).join('');
    
        // Duplicate the items to create an infinite effect
        carousel.innerHTML = clutter + clutter;
      }
    
      getDataFromArray();
    
      const items = document.querySelectorAll('.carousel-item');
      const totalItems = items.length;
      const itemWidth = carousel.offsetWidth / 4; // assuming 4 items visible at a time
      let currentIndex = 0;
    
      function updateCarouselPosition() {
        gsap.to(carousel, { x: -currentIndex * itemWidth, duration: 0.5 });
      }
    
      const dragInstance = Draggable.create(carousel, {
        type: "x",
        edgeResistance: 0.65,
        bounds: { minX: -((totalItems - 4) * itemWidth), maxX: 0 },
        onDragEnd: function () {
          const x = this.x;
          currentIndex = (Math.round(-x / itemWidth) + totalItems) % (totalItems / 2);
          updateCarouselPosition();
        },
        onThrowUpdate: function () {
          const x = this.x;
          currentIndex = (Math.round(-x / itemWidth) + totalItems) % (totalItems / 2);
          updateCarouselPosition();
        }
      });
    
      // Initial rendering and position update
      updateCarouselPosition();
}

// Initialize the carousel when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', owl);

function simpleanime() {

    gsap.to('.maazaName h1', {
        opacity: 1,
        duration: 20,
        top: "-30%",
        y: 20,
        stagger: 0.5,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".maazaName",
            scroller: "body",
          
            start: "top 100%",
            end: "top 0%",
            scrub: 2
        }
    })
    gsap.from('.enjoy-text', {
        y: '40',
        opacity: 0,
        stagger: 0.5,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".headline",
            scroller: "body",

            start: "top 60%",
            end: "top 50%",
            scrub: 2
        }
    })
    gsap.from('.storyText', {
        y: '20',
        opacity: 0,
        stagger: 0.5,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".maazaStory",
            scroller: "body",
            start: "top 60%",
            end: "top 50%",
            scrub: 2
        }
    })
    gsap.from('.Natural-text', {
        y: '20',
        opacity: 0,
        stagger: 0.5,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".Naturalingredients",
            scroller: "body",
            start: "top 60%",
            end: "top 50%",
            scrub: 2
        }
    })
    let mobilIcon = document.querySelector('.mobilIcon');
    let mobilIconClose = document.querySelector('.mobilIconClose');
    mobilIcon.addEventListener('click', function() {

        gsap.to('.open', {
            left: '0%',
            duration: 1,
            ease: "power4.out",

        })
    })
    mobilIconClose.addEventListener('click', function() {

        gsap.to('.open', {
            left: '100%',
            ease: "power4.out",
        })
    })
}

// mobileowl

function Mobileowl() {
    const carousel = document.querySelector('.carousel1');
    // const prevButton = document.querySelector('.prev');
    // const nextButton = document.querySelector('.next');

    const itemsData = [{
            Name: 'Soursop',
            image: 'assets/images/carouselImage/soursop/Soursop.png',
            id: 'Soursop',
            SliceImages: [
                'assets/images/carouselImage/soursop/1.png',
                'assets/images/carouselImage/soursop/2.png',
                'assets/images/carouselImage/soursop/3.png',
                'assets/images/carouselImage/soursop/4.png',
                'assets/images/carouselImage/soursop/5.png'
            ]
        },
        {
            Name: 'Passionfruit',
            image: 'assets/images/carouselImage/Passionfruit/Passionfruit.png',
            id: 'Passionfruit',
            SliceImages: [
                'assets/images/carouselImage/Passionfruit/1.png',
                'assets/images/carouselImage/Passionfruit/2.png',
                'assets/images/carouselImage/Passionfruit/3.png',
                'assets/images/carouselImage/Passionfruit/4.png',
                'assets/images/carouselImage/Passionfruit/5.png'
            ]
        },
        {
            Name: 'Mango',
            image: 'assets/images/carouselImage/mango/mango.png',
            id: 'Mango',
            SliceImages: [
                'assets/images/carouselImage/mango/1.png',
                'assets/images/carouselImage/mango/2.png',
                'assets/images/carouselImage/mango/3.png',
                'assets/images/carouselImage/mango/4.png',
                'assets/images/carouselImage/mango/5.png'
            ]
        },
        {
            Name: 'Tropical',
            image: 'assets/images/carouselImage/Tropical/Tropical.png',
            id: 'Tropical',
            SliceImages: [
                'assets/images/carouselImage/Tropical/1.png',
                'assets/images/carouselImage/Tropical/2.png',
                'assets/images/carouselImage/Tropical/3.png',
                'assets/images/carouselImage/Tropical/4.png',
                'assets/images/carouselImage/Tropical/5.png'
            ]
        },
        {
            Name: 'Guava',
            image: 'assets/images/carouselImage/Guava/Guava.png',
            id: 'Guava',
            SliceImages: [
                'assets/images/carouselImage/Guava/1.png',
                'assets/images/carouselImage/Guava/2.png',
                'assets/images/carouselImage/Guava/3.png',
                'assets/images/carouselImage/Guava/4.png',
                'assets/images/carouselImage/Guava/5.png'
            ]
        },
        {
            Name: 'Lychee',
            image: 'assets/images/carouselImage/Lychee/Lychee.png',
            id: 'Lychee',
            SliceImages: [
                'assets/images/carouselImage/Lychee/1.png',
                'assets/images/carouselImage/Lychee/2.png',
                'assets/images/carouselImage/Lychee/3.png',
                'assets/images/carouselImage/Lychee/4.png',
                'assets/images/carouselImage/Lychee/5.png'
            ]
        },
        {
            Name: 'Pomegranate',
            image: 'assets/images/carouselImage/Pomegranate/Pomegranate.png',
            id: 'Pomegranate',
            SliceImages: [
                'assets/images/carouselImage/Pomegranate/1.png',
                'assets/images/carouselImage/Pomegranate/2.png',
                'assets/images/carouselImage/Pomegranate/3.png',
                'assets/images/carouselImage/Pomegranate/4.png',
                'assets/images/carouselImage/Pomegranate/5.png'
            ]
        },
        {
            Name: 'Banana',
            image: 'assets/images/carouselImage/Banana/Banana.png',
            id: 'Banana',
            SliceImages: [
                'assets/images/carouselImage/Banana/1.png',
                'assets/images/carouselImage/Banana/2.png',
                'assets/images/carouselImage/Banana/3.png',
                'assets/images/carouselImage/Banana/4.png',
                'assets/images/carouselImage/Banana/5.png'
            ]
        },
        {
            Name: 'Coconut',
            image: 'assets/images/carouselImage/Coconut/Coconut.png',
            id: 'Coconut',
            SliceImages: [
                'assets/images/carouselImage/Coconut/1.png',
                'assets/images/carouselImage/Coconut/2.png',
                'assets/images/carouselImage/Coconut/3.png'
            ]
        },
        {
            Name: 'Papaya',
            image: 'assets/images/carouselImage/Papaya/Papaya.png',
            id: 'Papaya',
            SliceImages: [
                'assets/images/carouselImage/Papaya/1.png',
                'assets/images/carouselImage/Papaya/2.png',
                'assets/images/carouselImage/Papaya/3.png',
                'assets/images/carouselImage/Papaya/4.png',
                'assets/images/carouselImage/Papaya/5.png'
            ]
        }
        // Add more items as needed
    ];

    function getDataFromArray() {
        const createImageElements = (images) => {
            return images.map((src, idx) => `<img id="itemSlice${idx + 1}" class="absolute top-[50%] opacity-0 left-[50%]" src="${src}" alt="">`).join('');
        };

        const clutter = itemsData.map((elem) => `
            <div id="${elem.id}" class="carousel-item flex-shrink-0 relative rounded-[30px] min-w-[25%] min-h-[25rem] box-border p-[20px] flex flex-col items-center justify-between text-center">
                <div class="itemSlice">
                    ${createImageElements(elem.SliceImages)}
                </div>
                <div class="itemImage mt-16">
                    <img src="${elem.image}" alt="">
                </div>
                <a href="javascript:void(0)" class="text-xl text-white redirect backdrop-blur-sm bg-[#ffffff3e] p-3 w-64 relative bottom-0 rounded-full border-[1px] border-solid border-[#fff]">${elem.Name}</a>
            </div>
        `).join('');

        carousel.innerHTML = clutter;
    }

    getDataFromArray();
}

// Initialize the carousel when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', Mobileowl);


loco();
simpleanime();
gsap.set(sliders[currentSlider], { zIndex: 20, opacity: 1 });
showNextSlider();
cursor();
realPage()
owl();
Mobileowl()
