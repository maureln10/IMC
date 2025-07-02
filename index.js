function cacul_imc(poids , taille){
       let  tailleM = taille /100
       let imc = poids / (tailleM**2)
       
    
    return imc
        

       }
         
         ///let poids = parseFloat(prompt(" Veuilez entrer votre poids en kg?"))
         //let taille = parseFloat(prompt("veuillez entrer votre taille en m ?"))
          
         // affichage imc
         let imc = cacul_imc(poids, taille)  
          console.log(`Votre IMC est de ${imc.toFixed(2)}`);                                                                                                         

  // essaye d'afficher les zones
let zinterp = document.getElementById("interp")
let ztxt = document.getElementById("txt")
let monbouton = document.querySelector(".btn")
let ztaille = document.getElementById("taille")
let zpoids = document.getElementById("poids")
// bouton calculer
monbouton.addEventListener("click", (e) => {
  e.preventDefault() // prevention des erreurs
  //affichage des valeurs
  let poids = parseFloat(zpoids.value)
  let tailleM = parseFloat(ztaille.value)
  if (!isNaN(poids) && !isNaN(tailleM) && tailleM > 0) {
    let imc = cacul_imc(poids, tailleM)
    ztxt.value = `${imc.toFixed(2)}`
    // interpretation
      let interpretation=""
    if (imc < 18.5) {
  interpretation ="Vous êtes en insuffisance pondérale !"
} else if (imc >= 18.5 && imc <= 24.9) {
  interpretation ="Votre poids est normal !"
} else if (imc >= 25 && imc <= 29.9) {
  interpretation ="Vous êtes en surpoids !"
} 
  else if (imc >= 30 && imc <= 35) {
   interpretation ="Vous êtes en obésité de grade I !"
  }else if(imc >= 35 && imc <=40 ){
    interpretation = "Vous êtes en obésité de grade II !"
  }else if( imc > 40){
    interpretation="Vous êtes en obésité sévere !"
  }
  zinterp.value = interpretation
  } else {
    ztxt.value = "0"
    zinterp.value=""
   
  }
})
// bouton supprimer mise en marche
let monbouton1 = document.querySelector(".btn1")
monbouton1.addEventListener("click",(e) =>{
    e.preventDefault
    let form = document.getElementById("monformulaire")
    form.reset()
    ztxt.value=""
   
    
   
})

