let plus = document.querySelector(".plusBtn");
let minus = document.querySelector(".minusBtn");
let count = document.querySelector(".count_num");
let cost = document.querySelector(".price");
let i = 1;

plus.addEventListener("click", ()=>{
    i++
    count.textContent = i;
    let costNum = i*13200;
    cost.textContent = "₩" + costNum.toLocaleString();
})
minus.addEventListener("click", ()=>{
    if(i===1){
        return;
    }
    if( i>0 ){
        i--
        count.textContent = i;
        let costNum = i*13200;
        cost.textContent = "₩" + costNum.toLocaleString();
    }
})


const $album_spec=document.querySelector('.album_spec')
const $artist_introduction=document.querySelector('.artist_introduction')
const $question=document.querySelector('.question')
const $type=document.querySelector('.type')

$album_spec.addEventListener('click',e=>{
    $album_spec.classList.add('csh98419');
    $artist_introduction.classList.remove('csh98419');
    $question.classList.remove('csh98419');
    $type.innerHTML=`
    <li>총 1종</li>
    <li>- 아웃박스 / 1종 W62 X H90 / T15</li>
    <li>- 리릭스 / 1종 / W55 X H85 / 28 Pages</li>
    <li>- 포토카드 / 3세트 중 1세트(10종) 랜덤 / W55 X H85</li>
    <li>- 큐알카드/3종 중 1종 랜덤 / W55 X H85</li>
    `
    ;
})

$artist_introduction.addEventListener('click',e=>{
    $album_spec.classList.remove('csh98419');
    $artist_introduction.classList.add('csh98419');
    $question.classList.remove('csh98419');
    $type.innerHTML=`
    <li></li>
    <li>- 장르 : 댄스 팝, 일렉트로팝, 뭄바톤, R&B</li>
    <li>- 소속사 : ADOR 워드마크 </li>
    <li>- 데뷔 : 2022년 7월 22일</li>
    <li>- 유통사 : YG</li>

    `
    ;
})

$question.addEventListener('click',e=>{
    $album_spec.classList.remove('csh98419');
    $artist_introduction.classList.remove('csh98419');
    $question.classList.add('csh98419');
    $type.innerHTML=`
    <li>    </li>
    <li>    </li>
    <li>등록된 문의가 없습니다.</li>
    <li>     </li>
    <li>     </li>
    `
    ;
})