var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 1000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    var that = this;
    var delta = 300 - Math.random() * 100;
    if (this.isDeleting) { delta /= 2; }
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };


function home(){
    document.getElementById("homes").style.color="rgb(20, 251, 20)";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("programs").style.color="white";

}
function program(){
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("programs").style.color="rgb(20, 251, 20)";

}
function plan(){
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="rgb(20, 251, 20)";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("programs").style.color="white";

}
function blog(){
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="rgb(20, 251, 20)";
    document.getElementById("programs").style.color="white";

}
function contact(){
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="rgb(20, 251, 20)";
    document.getElementById("blogs").style.color="white";
    document.getElementById("programs").style.color="white";

}

function submit(){
    let name = document.getElementById("name");
    let number = document.getElementById("number");

    if(name.value == ""){
        alert("Please Enter Name")
    }else if(number.value == ""){
        alert("Please Enter Number")
    }else{
        alert("Thanks For Join : " + name.value)
    }
}