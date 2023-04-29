let btnLeft = "";
let btnRight = "";

let a = "";
let b = "";

let peopleName = ["Предисловие", "Мысли", "Охранник", "Экскурсовод", "Король"];
let [предисловие, мысли, охранник, экскурсовод, король] = peopleName;

let peopleHistory = [
"Вы шпион, вас отправили на разведку в соседнее королевство времен XVI века, но вам нужно придумать, как пробраться в королевство.",
"Вы очень долго шли, на дороге вам попадались большие и малые трудности, но спустя два дня вы, наконец, дошли…",
"Приветствую тебя в нашем королевстве. Нам уже сообщили про то, что нас в ближайшее время посетит почтенный гость.",
"В этот момент вы подумали о том, в какой все-таки удачный момент вы пришли.",
"Как долго добирался?",
"Сейчас подойдет твой экскурсовод, подожди немного.",
"Пока вы ждали экскурсовода, загадочный охранник в доспехах уже успел вам заговорить голову.",
"В конечном итоге вдалеке вы увидели экскурсовода. Это был простой пожилой мужчина среднего достатка.",
"Здравствуй милок, ты, наверное, меня уже заждался. Пойдем, я покажу тебе владения нашего короля.",
"Вы проходите в главный зал.",
"Сверху висит огромная золотая люстра, на стенах висят дорогие картины, а посередине стоит трон, на котором восседает сам король.",
"Вас подзывает король.",
"Приветствую тебя мой почтенный гость.",
"Подойдя к нему, вы усердно обсуждаете с ним мировую политики и экономику.",
"Через некоторое время он решает расспросить вас о том, зачем вы пришли.",
"Ну и зачем пожаловал ко мне?",
"Чего молчишь? Устал, наверное. Я отправлю тебя отдохнуть и поспать в лучшую спальню моего замка, а тогда уж завтра все и обсудим…",
"ТАК ТЫ НЕ ТОТ ГОСТЬ ГОТОРОГО МЫ ВСЕ ЖДАЛИ?",
"НИКТО НЕ СМЕЕТ ОБМАНЫВАТЬ КОРОЛЯ. ГОЛОВУ С ПЛЕЧ."
];
let [
первая, вторая, третья, четвертая, пятая, шестая, седьмая, восьмая, девятая,
десятая, одиннадцатая, двенадцатая, тринадцатая, четырнадцатая, пятнадцатая,
шестнадцатая, семнадцатая, восемнадцатая, девятнадцатая] = peopleHistory;

function clearAll() {
  a = "";
  b = "";
}

function writing() {
  document.getElementById("name").innerHTML = a;
  document.getElementById("history").innerHTML = b;
}

document.querySelector(".window").onclick = (event) => {
  if (a === "" && b === "") {
    a = предисловие;
    b = первая;
    writing();
    a = 1;
    b = 1;
    return;
  } else if (a === 1 && b ===1) {
    clearAll();
    a = предисловие;
    b = вторая;
    writing();
    a = 2;
    b = 2;
    return;
  } else if (a === 2 && b === 2) {
    document.getElementById('one').style.visibility = 'visible';
    clearAll();
    a = охранник;
    b = третья;
    writing();
    a = 3;
    b = 3;
    return;
  } else if (a === 3 && b === 3) {
    clearAll();
    a = мысли;
    b = четвертая;
    writing();
    a = 4;
    b = 4;
    return;
  } else if (a === 4 && b === 4) {
    clearAll();
    a = охранник;
    b = пятая;
    writing();
    btnLeft = "Долго";
    btnRight = "Недолго";
    document.getElementById('first').style.visibility = 'visible';
    document.getElementById('second').style.visibility = 'visible';
    document.getElementById("btnTxt1").innerHTML = btnLeft;
    document.getElementById("btnTxt2").innerHTML = btnRight;
    document.querySelector(".first").onclick = (event) => {
      a = 5;
      b = 5;
      console.log(a, b);
      document.getElementById('second').style.visibility = 'hidden';
      return;
    }
    document.querySelector(".second").onclick = (event) => {
      a = 5;
      b = 5;
      console.log(a, b);
      document.getElementById('first').style.visibility = 'hidden';
      return;
    }
  } else if (a === 5 && b === 5) {
    clearAll();
    document.getElementById('first').style.visibility = 'hidden';
    document.getElementById('second').style.visibility = 'hidden';
    a = охранник;
    b = шестая;
    writing();
    a = 6;
    b = 6;
    return;
  } else if (a === 6 && b === 6) {
    clearAll();
    a = мысли;
    b = седьмая;
    writing();
    a = 7;
    b = 7;
    return;
  } else if (a === 7 && b === 7) {
    clearAll();
    document.getElementById('one').style.visibility = 'hidden';
    document.getElementById('two').style.visibility = 'visible';
    a = мысли;
    b = восьмая;
    writing();
    a = 8;
    b = 8;
    return;
  } else if (a === 8 && b === 8) {
    clearAll();
    a = экскурсовод;
    b = девятая;
    writing();
    a = 9;
    b = 9;
    return;
  } else if (a === 9 && b === 9) {
    clearAll();
    a = мысли;
    b = десятая;
    writing();
    a = 10;
    b = 10;
    return;
  } else if (a === 10 && b === 10) {
    clearAll();
    a = мысли;
    b = одиннадцатая;
    writing();
    a = 11;
    b = 11;
    return;
  } else if (a === 11 && b === 11) {
    clearAll();
    a = мысли;
    b = двенадцатая;
    writing();
    a = 12;
    b = 12;
    return;
  } else if (a === 12 && b === 12) {
    clearAll();
    document.getElementById('two').style.visibility = 'hidden';
    document.getElementById('three').style.visibility = 'visible';
    a = король;
    b = тринадцатая;
    writing();
    a = 13;
    b = 13;
    return;
  } else if (a === 13 && b === 13) {
    clearAll();
    a = мысли;
    b = четырнадцатая;
    writing();
    a = 14;
    b = 14;
    return;
  } else if (a === 14 && b === 14) {
    clearAll();
    a = мысли;
    b = пятнадцатая;
    writing();
    a = 15;
    b = 15;
    return;
  } else if (a === 15 && b === 15) {
    clearAll();
    a = король;
    b = шестнадцатая;
    writing();
    a = 16;
    b = 16;
    btnLeft = "Промолчать";
    btnRight = "Заблудился";
    document.getElementById('first').style.visibility = 'visible';
    document.getElementById('second').style.visibility = 'visible';
    document.getElementById("btnTxt1").innerHTML = btnLeft;
    document.getElementById("btnTxt2").innerHTML = btnRight;
    document.querySelector(".first").onclick = (event) => {
      a = 17;
      b = 17;
      document.getElementById('second').style.visibility = 'hidden';
      return;
    }
    document.querySelector(".second").onclick = (event) => {
      a = 19;
      b = 19;
      document.getElementById('first').style.visibility = 'hidden';
      return;
    }
  } else if (a === 17 && b === 17) {
    clearAll();
    document.getElementById('first').style.visibility = 'hidden';
    document.getElementById('second').style.visibility = 'hidden';
    a = король;
    b = семнадцатая;
    writing();
    a = 18;
    b = 18;
    return;
  } else if (a === 19 && b === 19) {
    clearAll();
    document.getElementById('first').style.visibility = 'hidden';
    document.getElementById('second').style.visibility = 'hidden';
    a = король;
    b = восемнадцатая;
    writing();
    a = 20;
    b = 20;
    return;
  } else if (a === 20 && b === 20) {
    clearAll();
    a = король;
    b = девятнадцатая;
    writing();
    a = 21;
    b = 21;
    return;
  } else if (a === 18 && b === 18) {
    document.getElementById('one').style.visibility = 'hidden';
    document.getElementById('two').style.visibility = 'hidden';
    document.getElementById('three').style.visibility = 'hidden';
    clearAll();
    alert("Продолжение следует...");
  } else if (a === 21 && b === 21) {
    document.getElementById('one').style.visibility = 'hidden';
    document.getElementById('two').style.visibility = 'hidden';
    document.getElementById('three').style.visibility = 'hidden';
    clearAll();
    alert("Продолжение следует...");
  }
}
