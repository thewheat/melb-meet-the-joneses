var TNJ = TNJ || {};
TNJ.init = function () {
  $(document).ready(function () {

    $(document).on('keyup', function (evt) {
      evt.preventDefault();
      if (evt.keyCode === 27) {
        $('.lightbox').remove();
      }
    });

    $('#findMoreLink').on('click', function (evt) {
      evt.preventDefault();

      $('html, body').animate({ scrollTop: 0 }, 'slow');

      $('body').append('<div class="lightbox"> \
          <section id="more" class="activity"> \
            <a href="#" id="close">Close</a> \
            <h2>Learn more about living like The New Joneses</h2> \
            <form id="findOutMore" action="/" method="post"> \
                <div> \
                    <label class="inputSection">First Name</label> \
                    <input class="inputSection" placeholder="e.g. John" type="text" name="name" value="" /> \
               </div> \
                <div> \
                    <label class="inputSection">Email Address</label> \
                    <input class="inputSection" placeholder="e.g. my@email.com" type="email" name="email" value="" /> \
                </div> \
                <div> \
                    <label class="inputSection">Postcode</label> \
                    <input class="inputSection" type="number" name="postcode" value="" /> \
                </div> \
                <div> \
                    <label> \
                        <input type="checkbox" name="yesMore" checked="true" /> \
                        I want to live better! \
                    </label> \
                </div> \
                <div> \
                    <input type="submit" name="submitMore" value="Go" /> \
                </div> \
            </form> \
          </div> \
        </div>');

      $('#close').on('click', function (evt) {
        evt.preventDefault();
        $('.lightbox').remove();
      });

      $('#findOutMore').on('submit', function (evt) {
        evt.preventDefault();
        $.ajax({
          beforeSend: function () {
            $('.activity').find('form').replaceWith('<div class="waiting"><img src="/img/ajax-loader.gif" /><br><p>Please wait...</p></div>');
          }
        })
        .done(function () {
          setTimeout(function () {
            $('.activity').find('.waiting').replaceWith('<i class="fa fa-5x fa-check-circle-o"></i><br><br><br><p>Thank you!</p>')
          }, 3000);
        })
        .fail(function () {
          // do something
        })
        .always(function () {
          setTimeout(function () {
            $('.lightbox').remove();
          }, 6000);
        });
      });
    });
  });
};
