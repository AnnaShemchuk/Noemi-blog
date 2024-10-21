function index(kg, sm) {
  let heigth = 0;
  heigth = kg / (sm * 2);
  if (heigth <= 16.4) {
    console.log("Крайниё недостаток веса");
  } else if (heigth == 16.5 || heigth <= 18.4) {
    console.log("Недостаток в весе");
  } else if (heigth == 18.5 || heigth <= 30) {
    console.log("Нормальный вес");
  } else if (heigth == 30.1 || heigth <= 34.9) {
    console.log("Ожирение(Класс 1)");
  } else if (heigth == 35 || heigth <= 40) {
    console.log("Ожирение(Класс 2 - тяжелое)");
  } else if (heigth > 40) {
    console.log("Ожирение(Класс 3 - крайне тяжелое)")
  }

}

index(94, 1.58)
