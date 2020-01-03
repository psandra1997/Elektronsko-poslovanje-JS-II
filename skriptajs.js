const submit=document.querySelector('.submit');

submit.addEventListener('click', calculator);

function calculator(){
    const ubaci1 =document.querySelector('.ubaci1');
    const ubaci2 =document.querySelector('.ubaci2');
    const rezultat_h1= document.querySelector('.rezultat_h1');
    const operacija= document.querySelector('#operacija');

    let br1 = parseFloat(ubaci1.value);
    let br2 = parseFloat(ubaci2.value);
    let rezult;

switch(operacija.value){
    case "sabiranje" :
        rezult=br1+br2;
        rezultat_h1.style.display="block";
        rezultat_h1.innerHTML=rezult;
        break;
    case "oduzimanje" :
        rezult=br1-br2;
        rezultat_h1.style.display="block";
        rezultat_h1.innerHTML=rezult;
        break;
    case "mnozenje" :
        rezult=br1*br2;
        rezultat_h1.style.display="block";
        rezultat_h1.innerHTML=rezult;
        break;
    case "deljenje" :
        rezult=br1/br2;
        rezultat_h1.style.display="block";
        rezultat_h1.innerHTML=rezult;
        break;
    }


}