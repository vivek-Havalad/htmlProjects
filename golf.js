function takePar(){
  var par=document.getElementsByName("par")[0].value;
  localStorage.setItem("x",par);
  document.getElementsByName("maj")[0].style.display="none";
  document.getElementsByName("maj1")[0].style.display="block";
}
function calstrokes(){
  localStorage.getItem("x");
  var par=parseInt(localStorage.x);
  console.log(par);
  var strokes=parseInt(document.getElementsByName("Strokes")[0].value);
console.log(strokes);
  switch (true) {
    case strokes == 1:var i='"Hole-in-one!"';
      break;
      case strokes<= par - 2:var i='"Eagle"';

        break;
        case strokes==par - 1:var i='"Birdie"';

          break;
          case strokes==par:var i='"Par"';

            break;
            case strokes==par + 1:var i='"Bogey"';

              break;
              case strokes==par + 2:var i='"Double Bogey"';

                break;
                case strokes>= par + 3:var i='"Go Home!"';

                  break;
    default:var i="play a stroke";

  }
  document.getElementById('output').innerHTML=i;
}
