// In here, you'll find all Slideshow scripts. 

// Simple crossFading effect
$(function() {
  $('#sample_slideshow_crossfade').crossSlide({
    sleep: 2,
    fade: 1
  }, [
    { src: 'assets/sample_slideshow_pics/pic1.jpg' },
    { src: 'assets/sample_slideshow_pics/pic2.jpg' },
    { src: 'assets/sample_slideshow_pics/pic3.jpg' },
    { src: 'assets/sample_slideshow_pics/pic4.jpg' }
  ]);
});


// Slide and Crossfading effect
$(function() {
  $('#sample_slideshow_slideAndCross').crossSlide({
    speed: 45,
    fade: 1
  }, [
    { src: 'assets/sample_slideshow_pics/pic5.jpg', dir: 'up'   },
    { src: 'assets/sample_slideshow_pics/pic1.jpg',   dir: 'down' },
    { src: 'assets/sample_slideshow_pics/pic7.jpg',  dir: 'up'   },
    { src: 'assets/sample_slideshow_pics/pic8.jpg', dir: 'down' }
  ]);
});

// KenBurns effect
$(function() {
  $('#sample_slideshow_kenBurns').crossSlide({
    fade: 1
  }, [
    {
      src:  'assets/sample_slideshow_pics/pic9.jpg',
      alt:  'Sand Castle',
      from: '100% 80% 1x',
      to:   '100% 0% 1.7x',
      time: 3
    }, {
      src:  'assets/sample_slideshow_pics/pic1.jpg',
      alt:  'Sunflower',
      from: 'top left',
      to:   'bottom right 1.5x',
      time: 2
    }, {
      src:  'assets/sample_slideshow_pics/pic2.jpg',
      alt:  'Flip Flops',
      from: '100% 80% 1.5x',
      to:   '80% 0% 1.1x',
      time: 2
    }, {
      src:  'assets/sample_slideshow_pics/pic3.jpg',
      alt:  'Rubber Ring',
      from: '100% 50%',
      to:   '30% 50% 1.5x',
      time: 2
    }
  ], function(idx, img, idxOut, imgOut) {
    if (idxOut == undefined)
    {
      // starting single image phase, put up caption
      $('div.caption').text(img.alt).animate({ opacity: .7 })
    }
    else
    {
      // starting cross-fade phase, take out caption
      $('div.caption').fadeOut()
    }
  });
});


// Second Ken Burns effect variant
// $(function() {
//   $('#sample_slideshow_kenBurnsVariant').crossSlide({
//     fade: 1,
//     variant: true,
//     easing: 'easeInOutQuad'
//   }, [
//     {
//       src:  'assets/sample_slideshow_pics/pic9.png',
//       alt:  'Sand Castle',
//       from: '100% 80% 1x',
//       to:   '100% 0% 1.7x',
//       time: 3
//     }, {
//       src:  'assets/sample_slideshow_pics/pic1.jpg',
//       alt:  'Sunflower',
//       from: 'top left',
//       to:   'bottom right 1.5x',
//       time: 2
//     }, {
//       src:  'assets/sample_slideshow_pics/pic2.jpg',
//       alt:  'Flip Flops',
//       from: '100% 80% 1.5x',
//       to:   '80% 0% 1.1x',
//       time: 2
//     }, {
//       src:  'assets/sample_slideshow_pics/pic3.jpg',
//       alt:  'Rubber Ring',
//       from: '100% 50%',
//       to:   '30% 50% 1.5x',
//       time: 2
//     }
//   ]);
// });