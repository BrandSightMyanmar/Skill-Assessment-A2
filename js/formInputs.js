let l = 999;
(function hello($) {

 function removeOption() {
    $(".optionRemove").on("click", function () {
      $(this).parent().remove();
    })
  }

  $.fn.numberstyle = function (options) {

    $(".deleteQuestion").on("click", function () {
      deleteQuestion($(this).parent().parent().parent().parent().attr("questionID"))
      $(this).parent().parent().parent().parent().remove();
      rearrange();
    })

    removeOption()

    $(".optionAdd").on("click", function () {
      divv = `<div class="answerWithOptions mt-2 d-flex">
      <input type="text" class="form-control" name="optionQuestion2">
      <select class="form-select mx-3" name="answer3" style="width: 155px;" required data-msg="Correctness state must be chosen." err-id="error-question${l}a-choose">
          <option selected disabled>Choose</option>
          <option value="correct" class="text-success">Correct ✓</option>
          <option value="incorrect" class="text-danger">Incorrect ✕</option>
      </select>
      <img src="./../assests/icons/CounterMinus.svg" class="optionRemove">
       <div id="error-question${l}a-choose" class="text-danger"></div>
  </div>`
      $(this).parent().parent().before(divv);
      l++;
      removeOption()
    })

    /*
     * Default settings
     */
    var settings = $.extend({
      value: 0,
      step: undefined,
      min: undefined,
      max: undefined
    }, options);

    /*
     * Init every element
     */
    return this.each(function (i) {

      /*
       * Base options
       */
      var input = $(this);

      /*
       * Add new DOM
       */
      var container = document.createElement('div'),
        btnAdd = document.createElement('div'),
        btnRem = document.createElement('div'),
        min = (settings.min) ? settings.min : input.attr('min'),
        max = (settings.max) ? settings.max : input.attr('max'),
        value = (settings.value) ? settings.value : parseFloat(input.val());
      container.className = 'numberstyle-qty';
      btnAdd.className = (max && value >= max) ? 'qty-btn qty-add disabled' : 'qty-btn qty-add';
      btnAdd.innerHTML = '<img src="./../assests/icons/CounterPlus.svg" width="18" />';
      btnRem.className = (min && value <= min) ? 'qty-btn qty-rem disabled' : 'qty-btn qty-rem';
      btnRem.innerHTML = '<img src="./../assests/icons/CounterMinus.svg" width="18"/>';
      if (input.next(".qty-btn").length == 0) {
        input.wrap(container);
        input.closest('.numberstyle-qty').prepend(btnRem).append(btnAdd);
      }


      /*
       * Attach events
       */
      // use .off() to prevent triggering twice
      $(document).off('click', '.qty-btn').on('click', '.qty-btn', function (e) {

        var input = $(this).siblings('input'),
          sibBtn = $(this).siblings('.qty-btn'),
          step = (settings.step) ? parseFloat(settings.step) : parseFloat(input.attr('step')),
          min = (settings.min) ? settings.min : (input.attr('min')) ? input.attr('min') : undefined,
          max = (settings.max) ? settings.max : (input.attr('max')) ? input.attr('max') : undefined,
          oldValue = parseFloat(input.val()),
          newVal;

        //Add value
        if ($(this).hasClass('qty-add')) {

          newVal = (oldValue >= max) ? oldValue : oldValue + step,
            newVal = (newVal > max) ? max : newVal;

          if (newVal == max) {
            $(this).addClass('disabled');
          }
          sibBtn.removeClass('disabled');

          //Remove value
        } else {

          newVal = (oldValue <= min) ? oldValue : oldValue - step,
            newVal = (newVal < min) ? min : newVal;

          if (newVal == min) {
            $(this).addClass('disabled');
          }
          sibBtn.removeClass('disabled');

        }

        //Update value
        input.val(newVal).trigger('change');

      });

      input.on('change', function () {

        const val = parseFloat(input.val()),
          min = (settings.min) ? settings.min : (input.attr('min')) ? input.attr('min') : undefined,
          max = (settings.max) ? settings.max : (input.attr('max')) ? input.attr('max') : undefined;

        if (val > max) {
          input.val(max);
        }

        if (val < min) {
          input.val(min);
        }
      });

    });
  };

  /*
   * Init
   */
  // delete question
  

  $('.numberstyle').numberstyle();

}(jQuery));