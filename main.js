// Pro výpis do stránky můžeš použít funkci vypisText('text');
// Její kód je přiložen na konci tohoto souboru.
// Nebo můžeš pomocí console.log('text'); vypisovat do konzole prohlížeče.


// Úkol 1 - Založ nové pole se seznamem jmen (alespoň 5)
// Vypiš jeho obsah do stránky - JavaScript spojí pole automaticky do řetězce

let listOfNames = [
    'Dana',
    'Jitka',
    'Zdenka',
    'Jana',
    'Klára',
    'Lucie']

vypisText(listOfNames)



// Úkol 2 - Vypiš třetí jméno v pořadí
// Nezapomeň, že pole se čísluje od 0


vypisText(listOfNames[2])



// Úkol 3 - Kolik jmen je v poli?
// Pole má vlastnost pole.length

vypisText(listOfNames.length)



// Úkol 4 - Vypiš znovu seznam jmen, ALE...
// Tentokrát použij cyklus .forEach() a před každé jméno přidej
// číslo indexu, na kterém se jméno nachází
// 0. Alena
// 1. Jana
// 2. Marie
// atd.

listOfNames.forEach(function(ele, idx){
	vypisText(idx + '. ' + ele)
    
});



// Úkol 5 - přidej na konec pole další jméno
// pole.push()
// pole.unshift()
// Doplněný seznam jmen vypiš (jednoduše jako v příkladu 1)


listOfNames.push('Kubík')
vypisText(listOfNames)

// Úkol 6 - odeber z pole první a poslední jméno a vypiš
// obě jména a pak i výsledné pole
// pole.shift()
// pole.pop()

vypisText(listOfNames.shift())
vypisText(listOfNames.pop())




// *********************************************
function vypisText(txt) {
    document.querySelector('#vystup').innerText += txt + '\n';
}