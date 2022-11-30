alert(`Son top o'yiniga Xush kelibsiz
Men son o'ylayman siz topasiz (0 dan 100 gacha)
6 martadan ko'p urinishda topsangiz men yutaman aks holda siz`)

let topdimi = true;
let i = 0;
let user_number_what;
let user_taxmin = prompt("Men 1 dan 100 gacha son o'yladim topa olasizmi??? (biron-bir son kiriting)") * 1
let number_my = Math.round((Math.random() * 100))

while (topdimi) {
  i++;

  console.log(number_my);
  if (user_taxmin > number_my) {
    user_taxmin = prompt(`Men ${user_taxmin} dan kichikroq son o'yladim!!! (Yana urinib ko'ring)`) * 1
  }



  else if (Number(user_taxmin) < Number(number_my)) {
    user_taxmin = prompt(`Men ${user_taxmin} dan kattaroq son o'yladim!!! (Yana urinib ko'ring)`) * 1
  }

  else if (user_taxmin > 100) {
    user_taxmin = prompt(`100 dan kattta son kiritmang!!! (Yana urinib ko'ring)`) * 1
  }


  else if (user_taxmin < 0) {
    user_taxmin = prompt(`0 dan kichik son kiritmang!!! (Yana urinib ko'ring)`) * 1
  }

  else if (user_taxmin == number_my) {

    if (i > 6) {
      alert(`Siz ${i} urinishda topdingiz!!!
      Men yutdim siz 6 martadan ko'p urindingiz`)
    }
    else if (i == 6) {
      alert(`Siz ${i} urinishda topdingiz!!!
      Sizni sal omadiz kep qoldi tochniy 6 ta urinishda topib {{{{{{{{yutdingiz}}}}}}}}`)
    }
    else {
      alert(`Siz ${i} urinishda topdingiz!!!
      Siz yutdingiz chunki 6 martadan kam urindingiz`)
    }
    topdimi = false;
  }

  else {
    alert("Sizga mazzekanda klaviaturani hohlaganezday bosaverarkansiz    🤣😒🤣😒")
    topdimi = false
  }

}




// let j = 0;
// let new_number_user;

// let user_game = true
// let number_user = Math.round((Math.random() * 100))
// console.log(number_user);
// let user_hayolida = prompt(`Siz ${number_user} sonini oylagansiz
//   Agar siz o'ylagan son kattaroq bo'lsa "+" harfini kiriting
//   Agar siz o'ylagan son kichikroq bo'lsa "-" harfini kiriting
//   Agar topgan bo'lsam "yes" deb yozing !!!`)

// while (user_game) {

//   j++;

//   if (user_hayolida == "+") {
//     new_number_user = Math.round((Math.random() * (100 - number_user)))
//     number_user = (number_user + new_number_user)
//     user_hayolida == prompt(`Siz ${number_user} sonini oylagansiz
//     Agar siz o'ylagan son kattaroq bo'lsa "+" ishorasini kiriting
//     Agar siz o'ylagan son kichikroq bo'lsa "-" ishorasini kiriting
//     Agar topgan bo'lsam "yes" deb yozing !!!`)
//     continue
//   }




//   if (user_hayolida == "-") {
//     new_number_user = Math.round((Math.random() * number_user))
//     number_user = new_number_user
//     user_hayolida == prompt(`Siz ${number_user} sonini oylagansiz
//     Agar siz o'ylagan son kattaroq bo'lsa "+" ishorasini kiriting
//     Agar siz o'ylagan son kichikroq bo'lsa "-" ishorasini kiriting
//     Agar topgan bo'lsam "yes" deb yozing !!!`)

//   }


//   else if (user_hayolida == 'yes') {
//     alert(`Siz ${j} ta urinishda topdingiz!!!`)
//     break
//   }


// }
