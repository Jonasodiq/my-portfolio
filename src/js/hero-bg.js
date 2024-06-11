let parent = document.querySelectorAll('.hero__animate-text');
for(let i = 0; i < parent.length; i++) {
  parent[i].style.width = parent[i].children[0].clientWidth + "px"; 
};

let words = ['create user-friendly and innovative websites', 'as a passionate and creative design developer', 'where I shape fantastic digital worlds', 'with a unique blend of skill and passion'],
    part,   // En variabel som kommer att innehålla en del av den aktuella frasen som visas.
    i = 0,  //  En indexvariabel som används för att hålla koll på den aktuella frasen i words-arrayen.
    offset = 0, // En variabel som används för att hålla koll på den aktuella positionen inom frasen.
    len = words.length, // Antalet fraser i words-arrayen.
    forwards = true, // En boolean-flagga som indikerar om ordet ska visas framåt (från början till slut) eller bakåt (från slutet till början).
    skip_count = 0, //  En räknare som används för att kontrollera hur många gånger ordet ska hoppas över innan det byter riktning.
    skip_delay = 25, // Antalet gånger som ordet ska hoppas över innan riktningen ändras.
    speed = 40; // Hastigheten på animationen, som styr intervallet mellan varje tecken som läggs till eller tas bort.
let wordflick = function () { // Detta är en funktion som implementerar själva ordflickeringseffekten. 
  setInterval(function () { // Funktionen används med setInterval för att kontinuerligt utföra animationen med den angivna hastigheten (speed).
    if (forwards) { // Inuti funktionen kontrolleras om animationen ska röra sig framåt eller bakåt baserat på forwards-flaggan.
      if (offset >= words[i].length) { // Om animationen rör sig framåt, byggs den aktuella delen av frasen (part) genom att öka offset.
        ++skip_count; //  När offset når längden på den aktuella frasen, börjar den räkna skip_count.
        if (skip_count == skip_delay) { // Om animationen rör sig bakåt, minskas offset, och när den når 0 återställs den för att börja röra sig framåt igen.
          forwards = false;             // i ökar för att gå till nästa fras, och om i blir större än eller lika med len, återställs den till 0 för att börja om från början av words-arrayen.
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset); // Den aktuella delen av frasen (part) uppdateras, och om skip_count är 0, ökas eller minskas offset beroende på om animationen går framåt eller bakåt.
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part); // Slutligen uppdateras texten i elementet med klassen "word" med den aktuella part med hjälp av jQuery's text-funktion.
  },speed);
};

$(document).ready(function () { // Detta är ingången till din JavaScript-kod. Det väntar tills dokumentet har laddats helt (när DOM är redo) och sedan anropar wordflick-funktionen för att börja animationen.
  wordflick();
});

// ***** Show PDF *****

let pdfPopup;
        
document.getElementById("about__showPdf").addEventListener("click", function() {
    // Öppna popup-fönstret när knappen klickas på
    pdfPopup = window.open("./assets/CV-D.pdf", "_blank", "width=800, height=800");
});
// This triggers a click event on the button

