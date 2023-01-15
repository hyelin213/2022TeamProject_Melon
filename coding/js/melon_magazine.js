(function(){

    'use strict';

    let delay = 0;
    let timer = null;

    // 사이드 메뉴바

    function Drawer(el, open = false) { // A 
        this.el = el;
        this.isOpen = open;
        (this.isOpen) ? this.open() : this.close();
    }
    Drawer.prototype.open = function() {  // B 
    this.isOpen = true;
    this.el.style.transform = 'translate(0)'; 
    }
    Drawer.prototype.close = function() { 
    this.isOpen = false;
    this.el.style.transform = 'translate(-100%)';
    }
    
    const sideMenu = new Drawer(document.querySelector('.side_menu')); // C
    const menuOpner = document.querySelectorAll('.menu_opner');

    for(let i=0; i<menuOpner.length; i++){
        menuOpner[i].addEventListener('click', e => {  
            if(!sideMenu.isOpen){
                sideMenu.open();
                menuOpner[1].style.opacity = '1';
            }
            else {
                sideMenu.close();
                menuOpner[1].style.opacity = '0';
            }
        });
    }

    AOS.init(); // 스크롤 애니메이션

    // 메뉴 선택 효과

    const magazineMenu = document.querySelector('.main_magazine_menu ul');

    console.log(magazineMenu)

    magazineMenu.addEventListener('click', e => {
        for(let i=0; i<magazineMenu.children.length; i++){
            if(e.target.className = 'main_select_menu'){
                magazineMenu.children[i].classList.remove('main_select_menu');
            }
        }
        e.target.classList.add('main_select_menu');
    })



    const mainMagazineImg = document.querySelectorAll('.magazine_coverimg ul img');
    const todayDate = document.querySelector('.left_contents h2');

    const todayContents = [
        {
            heartNumber: 524,
            comment: 456,
            hit: 15231,
            title: '[트렌드 클리핑] 2022 아메리칸 뮤직 어워드',
            content: '현지 시각 11월 20일, 국내 시각으로는 11월 21일 오전에 2022 아메리칸 뮤직 어워드 (이하 AMAs)가 개최되었습니다. AMAs는 빌보드 뮤직 어워드, 그래미 어워드와 함께 미국의 3대 대중음악상으로 꼽히는 시상식입니다.',
        },
        {
            heartNumber: 125,
            comment: 412,
            hit: 14132,
            title: '[매거진 이벤트] 자신만의 색을 가진 신인 아티스트에게 새로운 키를 만들어주는 ROLLING PROJECT : CMYK',
            content: "음악이 멈추지 않는 홍대의 뮤직 메카 '롤링홀'에서 진행하는 인디 뮤지션 지원 프로젝트 'ROLLING PROJECT : CMYK'에 대해 들어보셨나요?",
        },
        {
            heartNumber: 554,
            comment: 213,
            hit: 10445,
            title: '[멜론 서포터즈] K-Pop 커뮤니티를 장악한 역대급 밈 톺아보기!',
            content: '이 구역의 K-POP 덕후들이라면 꼭 알아야 할 밈들이 있죠! 아이돌의 밈이 시작한 순간부터 알차게 활용하는 법까지! 저희 멜론 서포터즈가 한 번에 다! 알려드릴게요!',
        },
        {
            heartNumber: 123,
            comment: 551,
            hit: 12214,
            title: '[비하인드 컷] 뽀드득 겨울에, 서울(Seowool) [첫눈은 설레이는 마음을 담아 (Dear Snow)]',
            content: '서울(Seowool)이 다가오는 크리스마스에 듣기 좋은 부드럽고 포근한 싱글 [첫눈은 설레이는 마음을 담아 (Dear Snow)]로 돌아왔습니다!',
        },
    ]

    const todayRight = document.querySelector('.right_contents');
    const todayUl = document.querySelector('.right_contents ul'); // ul

    for(let i=0; i<todayContents.length; i++) {
        const todayLi = document.createElement('li');

        todayLi.classList.add('today_right', 'swiper-slide');
        todayLi.innerHTML = `
                <div class="today_right_coverimg today_right_coverimg${i+1}">
                    <img src="../../images/melon_magazine/today_magazine${i+1}.jpg" alt="매거진 커버사진">
                    <div class="heart">
                        <i class="fa-regular fa-heart"></i>
                        <div class="heart_number">${todayContents[i].heartNumber}</div>
                    </div>
                </div>
                <div class="today_right_detail today_right_detail1">
                    <div class="today_comment_hits">
                        <p class="date"></p>
                        <span></span>
                        <p class="comment">댓글 <span>${todayContents[i].comment}</span></p>
                        <p class="hit">조회수 <span>${todayContents[i].hit.toLocaleString('ko-KR')}</span></p>
                    </div>
                    <div class="today_content_detail">
                        <h3 class="today_title">${todayContents[i].title}</h3>
                        <p class="today_more_content">${todayContents[i].content}</p>
                    </div>
                </div>
        `;
        todayUl.append(todayLi);
    }
    
    const todayScrollbar = document.createElement('div');
    todayScrollbar.classList.add('swiper-pagination');

    todayRight.append(todayScrollbar);

    // swiper

    var swiper = new Swiper(".second", { // middle_contents
        slidesPerView: 3,
        spaceBetween: 30,
        grabCursor: true,
        autoWidth: true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
    });

    var swiper = new Swiper(".second1024", { // middle_contents1024
        slidesPerView: 'auto',
        // slidesPerView: 1,
        // centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        autoWidth: true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
    });

    // 카드형 swiper

    var swiper = new Swiper(".first", { // main_magazine
        effect: "cards",
        grabCursor: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        },
      });

      const mainMagazine = document.querySelectorAll('.magazine_coverimg ul li');
      const mainHoverContent = document.querySelectorAll('.hover_content');
      const mainHoverH4 = document.querySelectorAll('.hover_content h4');
      const mainHoverP = document.querySelectorAll('.hover_content p');

    //   main swiper 애니메이션 효과

    swiper.on('slideChange', e => {
        mainHoverH4.forEach(item => {
            item.classList.remove('dot_five_animation');
        });
        mainHoverP.forEach(item => {
            item.classList.remove('dot_six_animation');
        })

        let idx = e.activeIndex;
        if(idx === 0) {
            idx = mainHoverH4.length + 1;
        } else if(idx === mainHoverH4.length + 2) {
            idx = 1;
        }
        
        mainHoverH4[e.activeIndex].classList.add('dot_five_animation');
        mainHoverP[e.activeIndex].classList.add('dot_six_animation');
    });

    // 0 > 4
    // 1
    // 2
    // 3
    // 4
    // 5 > 1
    // 2

    // ~1024px swiper

    var swiper = new Swiper(".carousel", {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,
        // loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });

    const todayRightHeart = document.querySelectorAll('.today_right .heart');
    const todayRightHtNm = document.querySelectorAll('.today_right .heart .heart_number');

    todayRightHeart.forEach(likeThis => {
        const HeartSum = likeThis.children;

        HeartSum[0].addEventListener('click', e => {

            let todayRightHtReplace = null;
            
            if(HeartSum[0].classList.contains('fa-solid')){
                e.target.classList.remove('fa-solid');
                todayRightHtReplace = parseInt(HeartSum[1].textContent) - 1;
                HeartSum[1].textContent = todayRightHtReplace;
            }
            else {
                e.target.classList.add('fa-solid');
                todayRightHtReplace = parseInt(HeartSum[1].textContent) + 1;
                HeartSum[1].textContent = todayRightHtReplace;
            }

        })

    })

    const otherMagazine = document.querySelector('.other_magazine');

    const otherContents = [
        {
            heartNumber: 343,
            comment: 123,
            hit: 14531,
            title: '[멜론 서포터즈] 뉴진스, 아이브도 반한 Y2K의 세계로!',
            content: "앙증맞은 더듬이 앞머리, 캠코더로 찍은 듯한 영상. 최근 SNS에서 유행하는 여러 스타일을 관통하는 한 단어가 있죠. 바로 'Y2K'입니다!",
        },
        {
            heartNumber: 542,
            comment: 545,
            hit: 10564,
            title: "[위클리 뮤직 뉴스] 관계에 대한 세 편의 성찰, Olivia O'Brien의 신곡 외 이주의 히든트랙",
            content: "마이크로 믹스테이프에서 관계에 대해 성찰한 팝스타이자 뛰어난 송라이터 Olivia O'Brien의 신곡! 그외의 이주의 히든트랙은?",
        },
        {
            heartNumber: 455,
            comment: 453,
            hit: 24242,
            title: '[장르 인사이드] 영혼을 울리는 음악을 꿈꾸다 - 피아니스트 Maria Joao Pires',
            content: '영국을 대표하는 음악 차트, 오피셜 차트가 70주년을 맞았습니다. 이에 오피셜 차트는 BBC Radio1, BBC Radio2, BBC Sounds와 함께 매년 영국에서 가장 많이 재생된 노래들의 리스트를 공개했습니다.',
        },
        {
            heartNumber: 344,
            comment: 354,
            hit: 14563,
            title: '[비하인드 컷] 불안을 대하는 날카롭고 뭉툭한 위로, 쓰다 (Xeuda) [이름 없는 것들]',
            content: '첫 번째 정규 앨범 [이름 없는 것들]로 찾아온 쓰다 (Xeuda)의 발매 인터뷰와 MV 제작기를 멜론 매거진에서 단독 보도 드립니다.',
        },
        {
            heartNumber: 341,
            comment: 123,
            hit: 13268,
            title: '[멜론 서포터즈] K-POP 최신 팬 트렌드, 어떻게 달라지고 있을까?',
            content: '덕질? 콘서트 가고, 밥 먹을 때 포카 내밀고, 생일 카페 가고, 뭐 그런 거 아닌가? 그렇게만 알고 있었다면 이 매거진을 꼭 정독하셔야겠습니다!',
        },
        {
            heartNumber: 543,
            comment: 241,
            hit: 5345,
            title: "[비하인드 컷] '하나되어' 외치는 뜨거운 함성! 호미들, UNEDUCATED KID, 트랜스픽션의 2022년 월드컵 응원가 '하나되어'",
            content: '뜨겁게 Victory! 싸워라 Victory! 4년 만에 돌아온 세계인의 축제, 2022 FIFA 카타르 월드컵! 승리를 외치는 밴드 트랜스픽션 과 힙합씬의 영앤리치 UNEDUCATED KID, 영 플레이어 호미들이 뭉쳐 하나 된 ...',
        },
        {
            heartNumber: 123,
            comment: 867,
            hit: 3524,
            title: '[매거진 이벤트] 다양한 형태의 사랑, 케빈오 정규앨범 [Pieces of _]',
            content: '케빈오의 정규앨범 [Pieces of _] 자켓 촬영 현장을 멜론에서 집중 보도 드립니다.',
        },
        {
            heartNumber: 221,
            comment: 544,
            hit: 5342,
            title: '[비하인드 컷] JUST B (저스트비)가 말하는 평등, [= (NEUN)]',
            content: "JUST B (저스트비)가 7개월 만에 세 번째 미니 앨범 [= (NEUN)]으로 돌아왔습니다. LA 올 로케이션 촬영으로 동감을 더한 타이틀곡 'ME= (나는)' 뮤직비디오 촬영 현장을 지금 바로 공개합니다!",
        },
    ]

    const otherUl = document.querySelector('.other_contents ul');

    let otherListCut = otherContents.length;
    makeLi();

    delay = 0;
    timer = null;
    
    window.addEventListener('resize', e => {

        clearTimeout(timer);
        timer = setTimeout(() => {
            if(window.innerWidth >= 769){
                otherListCut = otherContents.length;
                makeLi();
            }
            if(window.innerWidth < 769){
                otherListCut = otherContents.length / 2;
                makeLi();
            }
        })

    })
    
    function makeLi() {

        otherUl.innerHTML = '';

        for(let i=0; i<otherContents.length; i++){
            const otherLi = document.createElement('li');
            otherLi.classList.add(`otherlist${[i+1]}`);
            otherLi.dataset.aos = "fade-up";
    
            otherLi.innerHTML = `
                <div class="other_content_img other_content_img${i+1}">
                    <img src="../../images/melon_magazine/magazine${i+1}.jpg" alt="매거진 커버사진">
                    <div class="heart">
                        <i class="fa-regular fa-heart"></i>
                        <div class="heart_number">${otherContents[i].heartNumber}</div>
                    </div>
                </div>
                <div class="other_detail other_detail${i+1}">
                    <div class="other_comment_hits">
                        <p class="date"></p>
                        <span></span>
                        <p class="comment">댓글 <span>${otherContents[i].comment}</span></p>
                        <p class="hit">조회수 <span>${otherContents[i].hit.toLocaleString('ko-KR')}</span></p>
                    </div>
                    <div class="other_content_detail width605">
                        <h3 class="other_title">${otherContents[i].title}</h3>
                        <p class="other_more_content">${otherContents[i].content}</p>
                    </div>
                </div>
            `;
            otherUl.append(otherLi);
        }

        const todayBulletinDate = document.querySelectorAll('.right_contents .date');
        const otherBulletinDate = document.querySelectorAll('.other_contents .date');
    
        const now = moment();
        const yesterday = moment().subtract(1, 'day');
    
        todayDate.textContent = now.add('d').format('YYYY.MM.DD');
    
        for(let i=0; i<todayBulletinDate.length; i++){
            todayBulletinDate[i].textContent = now.add('d').format('YYYY.MM.DD');
        }
        for(let i=0; i<otherBulletinDate.length; i++){
            otherBulletinDate[i].textContent = yesterday.add('d').format('YYYY.MM.DD');
        }
    
        const otherRightHeart = document.querySelectorAll('.other_contents .heart');
        const otherRightHtNm = document.querySelectorAll('.other_contents .heart .heart_number');
    
        otherRightHeart.forEach(likeThis => {
            const HeartSum = likeThis.children;
    
            HeartSum[0].addEventListener('click', e => {
    
                let otherHtReplace = null;
                
                if(HeartSum[0].classList.contains('fa-solid')){
                    e.target.classList.remove('fa-solid');
                    otherHtReplace = parseInt(HeartSum[1].textContent) - 1;
                    HeartSum[1].textContent = otherHtReplace;
                }
                else {
                    e.target.classList.add('fa-solid');
                    otherHtReplace = parseInt(HeartSum[1].textContent) + 1;
                    HeartSum[1].textContent = otherHtReplace;
                }
    
            })
    
        })

    }

    const pageList = document.querySelectorAll('.other_page_number ul li');

    let page = 1;

    pageList.forEach(item => {
        const innerNum = parseInt(item.textContent);
        item.classList.toggle('selected', page === innerNum);
    });

    // 카데고리 아코디언 메뉴(비슷한 거)

    const moreLi = document.querySelectorAll('.more_category li');
    const moreBtn = document.querySelector('.more');
    
    const moreArrow = document.querySelector('.more_before');
    
    delay = 0;
    timer = null;

    window.addEventListener('resize', () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            if(window.innerWidth < 1025 && window.innerWidth >= 769){
                moreBtn.classList.remove('d-none');
                for(let i=8; i<moreLi.length; i++){
                    moreLi[i].classList.add('d-none');
                }
        
                moreBtn.addEventListener('click', e => {
                    for(let i=8; i<moreLi.length; i++){
                        moreLi[i].classList.remove('d-none');
                    }
                    moreBtn.classList.add('d-none');
                    moreArrow.classList.remove('d-none');
                })
        
                moreArrow.addEventListener('click', e => {
                    for(let i=8; i<moreLi.length; i++){
                        moreLi[i].classList.add('d-none');
                    }
                    moreBtn.classList.remove('d-none');
                    moreArrow.classList.add('d-none');
                })
            }
            else {
                moreBtn.classList.add('d-none');
                moreArrow.classList.add('d-none');
                for(let i=8; i<moreLi.length; i++){
                    moreLi[i].classList.remove('d-none');
                }
            }
        }, delay);
    })

    // 모바일 카테고리 선택 input(효과)

    // const moreLi = document.querySelectorAll('.more_category li');
    const moreUl = document.querySelector('.category_select_contents .category768');
    const categoryMoreBtn = document.querySelector('.select_category768');
    const categoryMoreP = document.querySelector('.select_category768 p');
    const selectedOtherTitle = document.querySelector('.other_magazine p');
    console.log(selectedOtherTitle)
    
    categoryMoreBtn.addEventListener('click', e => {
        moreUl.classList.toggle('d-none');
    })

    for(let i=0; i<moreLi.length; i++){
        moreLi[i].addEventListener('click', e => {
            categoryMoreP.textContent = e.target.textContent;
            selectedOtherTitle.textContent = e.target.textContent;
            moreUl.classList.add('d-none');
        })
    }

    // 페이지 상단으로 가는 버튼

    const topPage = document.querySelector('#container .top');

    topPage.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })

    // 매거진 이메일 구독 경고창

    const subBtn = document.querySelector('.subscribe');
    const frm = document.querySelector('#emailForm');

    const textInf = document.querySelectorAll('.personal_data');
    const chkConsent = document.querySelectorAll('.check_consent');

    subBtn.addEventListener('click', chk);

    function emptyChk(ele, name){
        if(!ele.value){
            alert(`${name}을 입력해 주세요.`);
            ele.focus();
            return true;
        }
        return false;
    }

    function chk(e){
        if(emptyChk(frm.mName, '이름') || emptyChk(frm.mEmail, '이메일')){
            return e.preventDefault();
        }

        if(frm.mName.value.length > 20){
            alert('이름을 확인해 주세요.');
            return e.preventDefault();
        }

        const regex = /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z]{2,8}$/;
        if(!regex.test(frm.mEmail.value)){
            alert('이메일을 확인해 주세요.');
            return e.preventDefault();
        }

        for(let i=0; i<chkConsent.length; i++) {
            if(!chkConsent[i].checked){
                alert('모든 약관에 동의해 주세요.');
                return e.preventDefault();
            }
        }
        // const textInf = document.querySelectorAll('.personal_data');
        // const chkConsent = document.querySelectorAll('.check_consent');
        alert('구독이 완료되었습니다.');

        
        for(let i=0; i<textInf.length; i++){
            textInf[i].value = '';
            chkConsent[i].checked = false;
        }
        
        return true;
    }


    // 스크롤 효과

    // window.onload = function(){
    //     const scroll = document.querySelector('#top_contents');

    //     scroll.addEventListener('mousewheel', e => {
    //         e.preventDefault();

    //         let delta = 0;
    //         if(!e)e = window.event;
    //         if(e.wheelDelta){
    //             delta = e.wheelDelta;
    //             if(window.opera) delta = -delta;
    //         }
    //         else if(e.detail)
    //         delta = -e.detail / 3;

    //         let moveTop = window.scrollY;

    //         if(delta < 0){
    //             if(elmSelector !== elmCount-1){
    //                 try{
    //                     moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
    //                 }catch(e){}
    //             }
    //         }
    //         else {
    //             if(elmSelector !== 0){
    //                 try{
    //                     moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
    //                 }catch(e){}
    //             }
    //         }

    //         const body = document.querySelector('html');
    //         window.scrollTo({top:moveTop, left:0, behavior:'smooth'});
    //     })
    // }

})();