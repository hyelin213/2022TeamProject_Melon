(function () {

    'use strict';

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

    AOS.init();

    // .main_selectTime > .mainToday 오늘날짜 / 현재시간 표시

    const mainToday = document.querySelector('.main_today'); // h2
    const mainTime = document.querySelector('.main_Time') // div
    const mainSelectTime = document.querySelector('.main_selectTime ul'); // div
    const mainSelectTimeButton = document.querySelector('.fa-chevron-down');

    window.addEventListener('load', e => {
        const now = moment();
        mainToday.textContent = now.add('d').format('YYYY.MM.DD');
        mainTime.textContent = now.add('d').format('HH:00');

        const timeSet = parseInt(now.add('d').format('HH'));

        for (let i=timeSet; i >= 0; i--) { // 현재 시간(HH:00)까지만 option에 출력
            const mainBeforeTime = document.createElement('li'); // + li
            mainBeforeTime.className = 'select_timeObtion';

            if (i <= timeSet) {
                mainBeforeTime.textContent = now.add('d').format(`${i}:00`);
                if (i < 10) {
                    mainBeforeTime.textContent = now.add('d').format(`0${i}:00`);
                }
            }
            mainSelectTime.append(mainBeforeTime);
            
            mainBeforeTime.addEventListener('click', e => {
                mainTime.textContent = e.target.textContent;
                mainSelectTime.classList.toggle('d-block');
            });
        }
        mainSelectTimeButton.addEventListener('click', () => {
            mainSelectTime.classList.toggle('d-block');
        })
    });

    // 메뉴 선택 효과 (시대 제외)

    const mainLiMenu = document.querySelector('#main_menu');
    const mainTitle = document.querySelector('#main_title h1');

    mainLiMenu.addEventListener('click', e => {
        e.target.classList.add('selected');
        mainTitle.textContent = e.target.textContent;

        if(e.target === mainLiMenu.children[4]){
            alert('추후 공개되는 페이지입니다.');
            mainTitle.textContent = mainLiMenu.children[0].textContent;
            location.reload();
        }   

        for(let i=0; i<mainLiMenu.children.length; i++){
            if(e.target.className = 'selected'){
                mainLiMenu.children[i].classList.remove('selected');
            }
        }
    });

    // ❤좋아요 기능(랭커)

    const heart = document.querySelectorAll('.like_button');

    const heartNum = document.querySelectorAll('.heart_number');
    const likeNumArr = [ 169707, 126309, 98247, 169707, 126309, 98247 ];
    
    function numSum(){
        for(let i=0; i<heartNum.length; i++){
            heartNum[i].innerHTML = likeNumArr[i].toLocaleString('ko-KR');
        }
    }

    numSum();

    heart.forEach(likeIt => {
        const heartSum = likeIt.children;
        
        heartSum[0].addEventListener('click', e => {

            let heartReplace = null;

            if(heartSum[0].classList.contains('fa-solid')){
                e.target.classList.remove('fa-solid');
                heartReplace = parseInt(heartSum[1].textContent.replace(',', '')) - 1;
            } 
            else {
                e.target.classList.add('fa-solid');
                heartReplace = parseInt(heartSum[1].textContent.replace(',', '')) + 1;
            }

            heartSum[1].innerHTML = heartReplace.toLocaleString('ko-KR');
            
        });
    });


    // other_list_chart li 반복
    
    const otherChartContent = [
        { // 1
            title: '사건의 지평선',
            artist: '윤하(YOUNHA)',
            album: 'YOUNHA 6th Album Repackage "END THEORY : Final Edition"',
            chartLikeNum: 188080,
        },
        { // 2
            title: 'After LIKE',
            artist: 'IVE (아이브)',
            album: 'After LIKE',
            chartLikeNum: 196761,
        },
        { // 3
            title: '새삥 (Prod.ZICO) (Feat. 호미들)',
            artist: '지코 (ZICO)',
            album: '스트릿 맨 파이터(SMF)',
            chartLikeNum: 128364,
        },
        { // 4
            title: 'Rush Hour (Feat. j-hope of BTS)',
            artist: 'Crush',
            album: 'Rush Hour',
            chartLikeNum: 89058,
        },
        { // 5
            title: 'Attention',
            artist: 'NewJeans',
            album: 'NewJeans 1st EP "New Jeans"',
            chartLikeNum: 182742,
        },
        { // 6
            title: '사랑은 늘 도망가',
            artist: '임영웅',
            album: '신사와 아가씨 OST Part.2',
            chartLikeNum: 182447,
        },
        { // 7
            title: 'Monologue',
            artist: '테이',
            album: 'Monologue',
            chartLikeNum: 55714,
        },
        { // 8
            title: 'LOVE DIVE',
            artist: 'IVE (아이브)',
            album: 'LOVE DIVE',
            chartLikeNum: 214348,
        },
        { // 9
            title: '우리들의 블루스',
            artist: '임영웅',
            album: 'IM HERO',
            chartLikeNum: 82628,
        },
        { // 10
            title: 'Shut Down',
            artist: 'BLACKPINK',
            album: 'BORN PINK',
            chartLikeNum: 102953,
        },
        { // 11
            title: '마이웨이 (MY WAY) (Prod. R.Tee)',
            artist: '저스디스 (JUSTHIS), 던말릭 (DON MALIC)',
            album: '쇼미더머니 11 Episode 1',
            chartLikeNum: 4300,
        },
        { // 12
            title: 'WHEN I MOVE',
            artist: '카라',
            album: 'MOVE AGAIN',
            chartLikeNum: 8749,
        },
        { // 13
            title: 'Snowman',
            artist: 'Sia',
            album: 'Everyday Is Christmas (Snowman Deluxe Edition)',
            chartLikeNum: 16062,
        },
        { // 14
            title: 'TOMBOY',
            artist: '(여자)아이들',
            album: 'I NEVER DIE',
            chartLikeNum: 30735,
        },
        { // 15
            title: '그라데이션',
            artist: '10CM',
            album: '5.3',
            chartLikeNum: 6551,
        },
        { // 16
            title: '내가 아니라도',
            artist: '주호',
            album: '내가 아니라도',
            chartLikeNum: 1702,
        },
        { // 17
            title: '들꽃놀이 (with 조유진)',
            artist: 'RM',
            album: 'Indigo',
            chartLikeNum: 29403,
        },
        { // 18
            title: 'Santa Tell Me',
            artist: 'Ariana Grande',
            album: 'Santa Tell Me',
            chartLikeNum: 7693,
        },
        { // 19
            title: 'Dynamite',
            artist: '방탄소년단',
            album: 'Dynamite (DayTime Version)',
            chartLikeNum: 109146,
        },
        { // 20
            title: 'Butter',
            artist: '방탄소년단',
            album: 'Butter',
            chartLikeNum: 76734,
        },
        
    ]

    const otherChartList = document.querySelector('.other_list_chart ul'); // ul

    let chartListCut = otherChartContent.length;
    makeLi();
    
    window.addEventListener('resize', e => {
        if(window.innerWidth >= 769){
            chartListCut = otherChartContent.length;
            makeLi();
        }
        if(window.innerWidth < 769){
            chartListCut = otherChartContent.length / 2;
            makeLi();
        }
    })

    function makeLi() {

        otherChartList.innerHTML='';

        for(let i=0; i<chartListCut; i++){
            const chartListRole = document.createElement('li');
            chartListRole.className = 'chart_details';
            chartListRole.innerHTML = `
                    <ul>
                        <li class="chart_detail_list1">
                            <input type="checkbox" id="chartDetail${i+1}" class="chart_check">
                            <label for="chartDetail${i+1}"></label>
                        </li>
                        <li class="chart_detail_list2">
                            <p>${i+1}</p>
                            <div class="chart_upDown">-</div>
                        </li>
                        <li class="chart_detail_list3">
                            <img src="../../images/melon_charts/sub_album_${i+1}.jpg" alt="3위 미만 앨범${i+1}">
                        </li>
                        <li class="chart_detail_list4">
                            <p>${otherChartContent[i].title}</p>
                            <span>${otherChartContent[i].artist}</span>
                        </li>
                        <li class="chart_detail_list5">${otherChartContent[i].album}</li>
                        <li class="chart_detail_list6">
                            <i class="fa-regular fa-heart"></i>
                            <div class="chart_detail_list6_text">${otherChartContent[i].chartLikeNum.toLocaleString('ko-KR')}</div>
                        </li>
                        <li class="chart_detail_list7">
                            <i class="fa-solid fa-play"></i>
                        </li>
                        <li class="chart_detail_list8">
                            <i class="fa-solid fa-plus"></i>
                        </li>
                        <li class="chart_detail_list9">
                            <i class="fa-solid fa-arrow-down"></i>
                        </li>
                        <li class="chart_detail_list10">
                            <i class="fa-solid fa-video"></i>
                        </li>
                        <li class="chart_detail_list11">
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                        </li>
                    </ul>
            `;
            
            otherChartList.append(chartListRole);
    
        }
        
        // 짝수 순위만 밝은 배경 넣기
    
        const otherChartDetail = document.querySelectorAll('.chart_details');
    
        for(let i=0; i<otherChartDetail.length; i++){
            if(i % 2){
                otherChartDetail[i].classList.add('chart_detail_bg');
            }
        }

        // 차트 좋아요

        const chartHeart = document.querySelectorAll('.chart_detail_list6');

        chartHeart.forEach(chartLikeIt => {
            const chartHeartSum = chartLikeIt.children;
            
            chartHeartSum[0].addEventListener('click', e => {

                let chartHeartReplace = null;

                if(chartHeartSum[0].classList.contains('fa-solid')){
                    e.target.classList.remove('fa-solid');
                    chartHeartReplace = parseInt(chartHeartSum[1].textContent.replace(',', '')) - 1;
                } 
                else {
                    e.target.classList.add('fa-solid');
                    chartHeartReplace = parseInt(chartHeartSum[1].textContent.replace(',', '')) + 1;
                }

                chartHeartSum[1].innerHTML = chartHeartReplace.toLocaleString('ko-KR');
                
            });
        });

        // 전체 체크박스

        const allCheck = document.querySelector('.chart_option_1 #chartOption1'); // input
        const chartCheck = document.querySelectorAll('.chart_check'); // Nodelist 20

        allCheck.addEventListener('click', () => {
            if(allCheck.checked === true){
                for(let i=0; i<chartCheck.length; i++){
                    chartCheck[i].checked = true;
                }
            }
            if(allCheck.checked === false) {
                for(let i=0; i<chartCheck.length; i++){
                    chartCheck[i].checked = false;
                }
            }
        });

        // .mobile_tab_menu
    
        const dotMenu = document.querySelectorAll('.chart_detail_list11');
        const dotMenuContent = document.querySelector('.mobile_tab_menu');

        const mobileMenuTitle = document.querySelector('.mobile_tab_menu ul li h2');
        const mobileMenuArtist = document.querySelector('.mobile_tab_menu ul li p');

        window.addEventListener('resize', e => {
            if(window.innerWidth >= 769){
                dotMenuContent.classList.add('d-none');
            }
        })
       
        for(let i=0; i<dotMenu.length; i++){
            dotMenu[i].addEventListener('click', e => {
                dotMenuContent.classList.toggle('d-none');
                mobileMenuTitle.innerHTML = otherChartContent[i].title // 노래 제목
                mobileMenuArtist.innerHTML = otherChartContent[i].artist // 가수 이름
            })
        }
        
    }

    function mobileMenu() {
        const dotMenuContent = document.querySelector('.mobile_tab_menu');
        const mobileXmark = document.querySelector('.mobile_tab_menu .fa-xmark');
        const mobileHeart = document.querySelector('.mobile_tab_menu .fa-heart');

        mobileXmark.addEventListener('click', e => {
            dotMenuContent.classList.add('d-none');
            mobileHeart.classList.remove('fa-solid');
        })

        mobileHeart.addEventListener('click', e => {
            mobileHeart.classList.toggle('fa-solid');
        })
    }
    mobileMenu();

    // swiper

    var swiper = new Swiper(".carousel", {
        slidesPerView: 'auto',
        centeredSlides: true,
        initialSlide: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });

    // 페이지 상단으로 가는 버튼
    
    const topPage = document.querySelector('#container .top');

    topPage.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })

})();
