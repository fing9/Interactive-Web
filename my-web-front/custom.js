
// DOM(document object model)이라는 브라우저가 인식할 수 있는 특수한 형태의 문서 객체 모델이다.
const title = document.querySelector("#title");
console.log(title);

// document.querySelector() - 요소 선택하기
// 자바 스크립트에서 요소를 선택할 때 document.querySelector() 문을 사용하면 간단하다.
const frame = document.querySelector("#wrap"); // 절대 변경해서는 안 될 변숫값이라면 const 예약어로 지정해야 한다.
console.log(frame);

const box1 = document.querySelector("#wrap .box1");
console.log(box1);

// document.querySelectorAll() - 요소를 모두 선택하기
// #wrap 안에 있는 article 요소를 모두 찾아보자.
const itemEx = document.querySelector("#wrap article"); // article 안의 요소를 모두 가져올 것처럼 보이지만 querySelector()문은 단일 요소를 찾으므로 그룹의 1번째 요소만 선택한다.
console.log(itemEx);

const items = document.querySelectorAll("#wrap article");

// 변수 item은 반복문을 실행하면서 계속해서 변경된 값을 저장할 것이므로 예약어 let을 사용한다.
// item에 담긴 article 요소의 개수만큼 반복하면서 찾은 대상을 item에 저장하고, 코드 블록({})안의 구문을 반복하면서 item값을 출력한다.
for(let item of items) {
    console.log(item);
}

// 완전 C잖아
for(let i=0; i<items.length; i++) {
    console.log(items[i]);
}


// 실습 : 부모, 자식, 형제 요소 선택하기
// 자식 요소 선택하기
const list = document.querySelector("#ex1 .list");
const items2 = list.children;

console.log(items2);
console.log(items2[0]);
console.log(items2[1]);
console.log(items2[2]);
console.log(items2[3]);

// 자식 요소애서 부모 요소 선택하기
const items3 = document.querySelector("#ex1 .item2");
console.log(items3.parentElement);

// 제일 가까운 상위 부모 요소 선택하기
const li = document.querySelector("#closestPrentEx1 li");
console.log(li.closest("main")); // 이렇게 입력하면 li의 부모 요소 중에서 제일 가까운 main 요소를 탐색한다.

// 형제 요소 선택하기
const item3 = document.querySelector(".item3");
console.log(item3.previousElementSibling); // 3번째 리스트를 기준으로 이전 형제 요소
console.log(item3.nextElementSibling); // 3번째 리스트를 기준으로 다음 형제 요소


// 자바스크립트로 스타일 제어하기
const box = document.querySelector(".ex2 #box");

// DOM 객체에는 HTML의 기본 정보뿐만 아니라 요소 스타일의 정봇값도 들어 있는데 이것이 style 속성이다.
// 아래 예제는 DOM에 내장된 style 속성값을 변경해서 기존 CSS 스타일에 덮어쓰는 작업이다.
box.style.width = "10%";
box.style.height = "300px";
box.style.backgroundColor = "hotpink";
box.style.border = "none";
box.style.transform = "rotate(10deg)";


// 자바스크립트로 이벤트 연결하기
// 자바스크립트를 적용한 웹 페이지는 출력을 완료한 후에도 사용자 행동에 따라 웹의 요소를 동적으로 변경할 수 있다.
// 이러한 사용자 행동은 자바스크립트의 여러 가지 이벤트로 나타낼 수 있는데, 그중에서 마우스 동작과 관련된 이벤트를 알아보고 HTML요소와 어떻게 연결하고 제어하는지 살펴보자.

// 클릭 이벤트 연결하기
const link = document.querySelector(".clickEx1 a");

// ES5 문법인 function(){}을 사용한다면 this 키워드를 사용할 수 있다.
// 요소명.addEventListener("이벤트명", (전달될 값)=>{실행할구문});
link.addEventListener("click", (e)=>{
    e.preventDefault(); // 이벤트가 발생하면 자동으로 이벤트 객체라는 특별한 값이 화살표 함수로 자동 전달하는데, 이 때 추가로 넣은 e값이 바로 이벤트 객체이다. preventDefault() 문은 이벤트의 기본 기능을 실행하지 말라는 명령어이다. 이 이벤트 리스너에 연결된 요소가 링크 이동을 담당하는 a 요소 이므로 링크 이동 기능을 막고 console.log() 문을 실행한다. 참고로 이벤트명 뒤에 있는 괄호에서 전달되는 값이 하나이면 괄호를 생략할 수 있다.
    console.log("링크를 클릭했습니다.");
});


// 호버 이벤트 연결하기
const hoverBox = document.querySelector(".hoverEx1 #hoverBox");

// mouseenter : 마우스가 위에 올라왔을 때 이벤트
hoverBox.addEventListener("mouseenter", ()=>{
    hoverBox.style.backgroundColor = "hotpink";
});

// mouseleave : 마우스가 위에서 떠날 때 이벤트
hoverBox.addEventListener("mouseleave", ()=>{
    hoverBox.style.backgroundColor = "aqua";
});

// 반복되는 요소에 이벤트 한꺼번에 연결하기
const repeatList = document.querySelectorAll(".repeatEx1 .list li");

for(let el of repeatList) {
    el.addEventListener("click", (e)=>{
        e.preventDefault();
        console.log(e.currentTarget.innerText); // 변수 el에 저장되고 있는 반복 요소를 클릭할 때마다 해당 요소를 e.currentTarget으로 선택해 주고 .innerText 구문을 연결해 준다. .innerText 구문은 선택한 요소의 텍스트를 불러온다.
    });
}


// 클릭 이벤트가 발생할 때 숫자를 증가, 감소하기
const btnPlus = document.querySelector(".plusMinusEx1 .btnPlus");
const btnMinus = document.querySelector(".plusMinusEx1 .btnMinus");
let num = 0; // 제어할 숫잣값을 0으로 초기화

// btnPlus를 클릭할 때마다
btnPlus.addEventListener("click", (e)=>{
    e.preventDefault();
    // num값을 1씩 증가
    num++;
    console.log(num);
})

// btnMinus를 클릭할 때마다
btnMinus.addEventListener("click", (e)=>{
    e.preventDefault();
    // num값을 1씩 감소
    num--;
    console.log(num);
})


// 문자 안에 변수 삽입하기
// 변수의 값을 그대로 유지하면서 문자 안에 삽입하는 방법
const myName = "김성민";
console.log(`내 이름은 ${myName}입니다.`); // ``(백틱) (키패드 숫자1 바로 왼쪽)으로 감싸줘야 한다.

// 실습 : 클릭하면 좌우로 회전하는 박스 만들기
const btnLeft = document.querySelector(".rotateBox .btnLeft");
const btnRight = document.querySelector(".rotateBox .btnRight");
const roBox = document.querySelector(".rotateBox #roBox");
const deg = 45; // 회전할 각도의 값 저장
let num2 = 0; // 증가시킬 값을 0으로 초기화

// btnLeft를 클릭할 때마다
btnLeft.addEventListener("click", (e)=>{
    e.preventDefault();
    num2--;
    roBox.style.transform = `rotate(${num2 * deg}deg)`;
});

// btnRight를 클릭할 때마다
btnRight.addEventListener("click", (e)=>{
    e.preventDefault();
    num2++;
    roBox.style.transform = `rotate(${num2 * deg}deg)`;
});



// 자바스크립트로 클래스 제어하기
// 실무에서는 특정 HTML 요소의 스타일을 자바스크립트로 직접 변경하는 방법을 추천하지 않는다.
// 그 이유는 자바스크립트 특정 요소의 스타일을 변경하면 CSS 파일의 스타일 구문을 바꾸지 않고 HTML에 인라인 스타일을 직접 적용하므로 CSS 파일에 등록한 우선순위가 무시되기 때문이다.
// 그렇기 때문에 CSS 파일에서 특정 클래스 이름에 따라 스타일이 설정되게 하고, 자바스크립트에서는 클래스 이름만 추가,제거하는 방법으로 스타일을 변경해보자.
const wrap = document.querySelector(".jsClassControlEx1 #jsClassControlEx1wrap");
const ctlBox = wrap.querySelector("article");

// wrap.addEventListener("click", ()=>{
//     ctlBox.style.backgroundColor = "hotpink";
// });

wrap.addEventListener("click", ()=>{
    // 부모 요소인 section#wrap 에만 클래스 on이 추가되어 CSS 파일에 미리 설정한 배경색이 적용된 것을 볼 수 있다.
    let isOn = wrap.classList.contains("on"); // wrap의 classLis에 on이 있는지 여부를 확인 한다.
    console.log(isOn);

    if(isOn) {
        wrap.classList.remove("on");
    }
    else {
        wrap.classList.add("on");
    }
});



// 함수를 활용하여 코드 패키징하기
// 함수 정의 및 호출로 기능 재활용하기
function plus(num1, num2) {
    console.log(num1 + num2);
}

plus(1, 2);


// 실습 : 활성화 기능 함수 정의하고 사용하기
const btns = document.querySelectorAll(".activeEx1 .btns li");
const boxs = document.querySelectorAll(".activeEx1 section article");

function activation(index, list) {
    for(let el of list) {
        el.classList.remove("on");
    }

    list[index].classList.add("on");
}

// 버튼의 개수만큼 반복하며 클릭 이벤트 연결
for(let i=0; i<btns.length; i++) {

    // 각 버튼을 클릭할 때마다
    btns[i].addEventListener("click", (e)=>{
        // 각 인수로 순섯값과 버튼, 박스 그룹을 넣어서
        // activation 함수 호출
        activation(i, btns);
        activation(i, boxs);
    });
}



// HTML 요소의 속성값 제어하기
// HTML 요소에는 태그의 src, alt, href 같은 다양한 속성값이 결합되어 있다.
// 자바스크립트를 이용해서 HTML 요소마다 속성값을 알아내서 변경해보자.
const link2 = document.querySelector(".valEx1 a");
const link_href = link2.getAttribute("href");
console.log(link_href);


// 속성값 변경하기
const link3 = document.querySelector(".valEx1 a");
const new_href = "https://www.nate.com";
link3.setAttribute("href", new_href);


// 자바스크립트로 사용자 브라우저 판단하기
// 모든 브라우저에는 navigator라는 객체가 있는데, 이 객체 안의 userAgent에는 브라우저의 정봇값이 문자 형태로 저장되어 있다.
// 따라서 현재 작업하는 파일이 웹 브라우저로 출력되면 콘솔 창에는 그 브라우저의 정보를 출력할 수 있다.
const ver = navigator.userAgent;
console.log(ver);

// 크롬, 엣지, 웨일 브라우저에는 비슷한 정보가 공통으로 들어 있는데 그 이유는 모두 같은 브라우저 엔진을 사용하기 때문이다.
// 크롬에서 화면이 제대로 동작하면 나머지 브라우저 2개에서도 같은 화면을 출력한다는 의미이다.
const isIE = /trident/i.test(ver); // 익스폴로러 브라우저에는 앞의 3브라우저에는 없는 trident가 있다. 이 정보를 탐색해서 IE로 구분한다.
// /와 /사이에는 탐색할 문자를 넣고 test(ver) 구문을 연결해서 탐색할 문잣값이 ver에 저장된 브라우저의 정봇값에 포함되어 있는지를 찾는다.
// 뒤에 붙은 i는 알파벳 대소 문자를 구분하지 않고 탐색할 문자열을 검사하겠다는 의미이다.
console.log(isIE);

if(isIE) {
    alert("익스플로러 브라우저로 접속하셨습니다.\n 이 웹페이지는 익스플로러를 지원하지 않습니다. 다른 브라우저로 접속해 주세요.");
}