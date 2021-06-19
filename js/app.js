// Scroll
$(document).ready(function () {
    $("a").on('click', function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 500, function () {
          window.location.hash = hash;
        });
      }
    });
  });
  // Skill
  $('.skill-per').each(function () {
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width", per + '%');
    $({ animatedValue: 0 }).animate({ animatedValue: per },{
      duration: 1000,
      step: function () {
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      },
      complete: function () {
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      }
    });
  });
  // Bottom
  var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
  // Loading
  setTimeout(function(){
    $('.loader_bg').fadeToggle();

    }, 2500);
  // Text
  $('.txt').html(function(i, html) {
    var chars = $.trim(html).split("");
  
    return '<span>' + chars.join('</span><span>') + '</span>';
  });