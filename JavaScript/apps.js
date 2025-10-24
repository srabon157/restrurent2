


  let isotope = ()=>{
    // init Isotope
    var $grid = $('.grides-items').isotope({
      // options
    });
    // filter items on button click
    $('.filter-button-group').on( 'click', 'a', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
  }; isotope();


  
  let slickSlider =()=>{
    $('.Testimonial-container').slick({
      dots: true,
      infinite: false,
      autoplay:true,
      arrows:false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 525,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  };  slickSlider();
 
