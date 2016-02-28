$(document).ready(function () {

  // $('#startbutton').click(function(){
  //   // alert('testing');
    var iching = window.iching = new Iching();
    var num = iching.generateNumber();
    console.log(iching);
});

function Iching(){
  this.buttonToss = $('#startbutton');
  this.buttonToss.click(this.onButtonClick.bind(this));

  this.buttonReset = $('#resetbutton');
  this.buttonReset.click(this.onResetClick.bind(this));

  this.counter = 6;

  this.lines = {
    line1: {
      value: null,
      element: $('#line1')
    },
    line2: {
      value: null,
      element: $('#line2')
    },
    line3: {
      value: null,
      element: $('#line3')
    },
    line4: {
      value: null,
      element: $('#line4')
    },
    line5: {
      value: null,
      element: $('#line5')
    },
    line6: {
      value: null,
      element: $('#line6')
    },
  }

  this.templates = [
    [//twobrokenlines
      '<div class="lines">',
      '<div class="linebreak"></div>',
      '</div>',
      '<div class="changingdot-hidden"></div>',
      '<div class="lines">',
      '<div class="linebreak"></div>',
      '</div>',
    ].join('\n'),

    //twoSolidLines:
     [
      '<div class="lines"></div>',
      '<div class="changingdot-hidden"></div>',
      '<div class="lines"></div>',
    ].join('\n'),

  //  solidLeftBrokenRight:
    [
    '  <div class="lines left"></div>',
    '<div class="changingdot"></div>',
    '<div class="lines right">',
        '<div class="linebreak"></div>',
      '</div>',
    ].join('\n'),

  //  brokenLeftSolidRight:
    [
      '<div class="lines left">',
        '<div class="linebreak"></div>',
      '</div>',
      '<div class="changingdot"></div>',
      '<div class="lines right"></div>',
    ].join('\n'),
  ]

}

Iching.prototype.onButtonClick = function(){

  if(this.counter < 1) return; // reading complete

  var num = this.generateNumber();


  var line = this.lines['line' + this.counter];

  line.element.html(this.templates[num]);
  line.value = num;

  this.counter--;
}

Iching.prototype.onResetClick = function(){
  this.counter = 6;

  for (var i in this.lines) {

    this.lines[i].element.empty();
    this.lines[i].value = null;
  }
}

Iching.prototype.generateLine = function(){

}

Iching.prototype.generateNumber = function(){
  return Math.floor(Math.random() * 4);
}















  // $('#listofstuff').submit(function(e){
  //   e.preventDefault();
  //     var userInput = $('#addstuff').val();
  //     console.log(userInput);
  //
  //     $('#newitem').append('<li class="items">'+userInput+'</li>');
  //     $('#addstuff').val('');
  //   });
  //
  //
  //     $('#addstuff').on ('click', function(){
  //        $('#addstuff').val(' ');
  //   });
  //     $('#newitem').on('click', 'li.items', function() {
  //       $(this).wrap("<strike>");
  //     });
