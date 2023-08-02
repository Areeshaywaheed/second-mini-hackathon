// about section started

function expandPara() {
    var paragraph = "We have skilld , experienced and humble teachers Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, perferendis. Doloribus praesentium beatae quos maxime soluta voluptas quidem. Temporibus voluptatibus sint minima esse deleniti iure cupiditate delectus veniam ea suscipit  appealing and user-friendly websites. I have a keen eye for design and a deep understanding of user experience, allowing me to craft intuitive interfaces and seamless navigation. Additionally, I am well-versed in various web development frameworks and libraries, enabling me to efficiently develop scalable and robust web applications. I constantly stay updated with the latest trends and advancements in web development to ensure that I deliver cutting-edge solutions to my clients.Moreover, I am a strong communicator and collaborate effectively with cross-functional teams, translating complex technical concepts into easily understandable terms. With a detail-oriented approach and a commitment to delivering high-quality work, I strive to create impactful digital experiences that leave a lasting impression on users.";
    document.getElementById("whyUs").innerHTML = paragraph;
}

// about section completed

// slider section started

var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

// slider section completed

