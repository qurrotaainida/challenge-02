function changeWord(selectedText, changedText, Text) {
    /* 
        Deklarasi
        tampilkan method replace(selectedText, changedText) ;   
    */
    return Text.replace(selectedText, changedText);
}

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord('mencintai', 'membenci', kalimat1));
console.log(changeWord('bromo', 'semeru', kalimat2));