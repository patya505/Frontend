const reels = [
  {
    ismuted:true,
    username: "john_travels",
    likecount: 12450,
    isliked: false,
    commentcount: 342,
    caption: "Sunsets hit different when you're traveling 🌅",
    video: "./video1.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/11.jpg",
    sharecount: 120,
    isFollow: false
  },
  {
    ismuted:true,
    username: "fitwith_amy",
    likecount: 8920,
    isliked: false,
    commentcount: 198,
    caption: "Day 30 of staying consistent 💪🔥",
    video: "./video2.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/21.jpg",
    sharecount: 75,
    isFollow: true
  },
  {
    ismuted:true,
    username: "code_wizard",
    likecount: 15670,
    isliked: false,
    commentcount: 421,
    caption: "Frontend devs will relate 😅💻",
    video: "./video3.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/32.jpg",
    sharecount: 260,
    isFollow: true
  },
  {ismuted:true,
    username: "foodie_diaries",
    likecount: 20450,
    isliked: false,
    commentcount: 610,
    caption: "Street food > Fancy restaurants 🤤",
    video: "./video4.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/45.jpg",
    sharecount: 390,
    isFollow: false
  },
  {
    ismuted:true,
    username: "daily_quotes",
    likecount: 6780,
    isliked: false,
    commentcount: 120,
    caption: "Discipline will take you where motivation can't ✨",
    video: "./video5.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/54.jpg",
    sharecount: 98,
    isFollow: true
  },
  {
    ismuted:true,
    username: "street_photog",
    likecount: 11340,
    isliked: false,
    commentcount: 267,
    caption: "Every street has a story 📸",
    video: "./video6.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/63.jpg",
    sharecount: 144,
    isFollow: false
  },
  {
    ismuted:true,
    username: "dance_vibes",
    likecount: 18490,
    isliked: false,
    commentcount: 532,
    caption: "When the beat drops, just move 🎶🔥",
    video: "./video7.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/67.jpg",
    sharecount: 410,
    isFollow: true
  },
  {
    ismuted:true,
    username: "tech_explained",
    likecount: 9720,
    isliked: false,
    commentcount: 289,
    caption: "AI is changing everything 🚀",
    video: "./video8.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/71.jpg",
    sharecount: 210,
    isFollow: false
  },
  {
    ismuted:true,
    username: "nature_lovers",
    likecount: 22130,
    isliked: false,
    commentcount: 701,
    caption: "Nature heals more than words 🍃",
    video: "./video11.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/82.jpg",
    sharecount: 520,
    isFollow: true
  },
  {
    ismuted:true,
    username: "memes_daily",
    likecount: 30560,
    isliked: false,
    commentcount: 980,
    caption: "Tag that friend who does this 😂",
    video: "./video10.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/90.jpg",
    sharecount: 890,
    isFollow: false
  }
];
let allreels=document.querySelector('.all-reels');

function addData(){
  let sum=""
reels.forEach(function(elem,idx){
    sum=sum+` <div class="reels">
                <video class="reel-video" autoplay loop src="${elem.video}"></video>
                 <div class="mute" id="${idx}"></div>
                <div class="bottom">
                    <div class="user">
                        <img src="${elem.userprofile}" alt="">
                        <h4>${elem.username}</h4>
                        <button id="${idx}" class="follow">${elem.isFollow ?'Unfollow':'Follow'}</button>
                    </div>
                    <h3>${elem.caption}</h3>
                </div>
                <div class="right">
                    <div id="${idx}" class="like">
                        <h4 class="like-icon  icon">${elem.isliked?'<i class=" love ri-heart-3-fill"></i>':'<i class=" ri-heart-3-line"></i>'}</i></h4>
                        <h6>${elem.likecount}</h6>
                    </div>
                    <div id="${idx}" class="comment">
                        <h4 class="comment-icon  icon"><i class="ri-chat-3-line"></i></h4>
                        <h6>${elem.commentcount}</h6>
                    </div>
                    <div id="${idx}" class="share">
                        <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                        <h6>${elem.sharecount}</h6>
                    </div>
                    <div class="menu">
                        <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
                        
                    </div>

                </div>
            </div>`
            
})


allreels.innerHTML=sum;
handleScrollAudio();
}
addData();



allreels.addEventListener('click',function(dats){
  if(dats.target.className=='like'){
    if(!reels[dats.target.id].isliked){
      reels[dats.target.id].likecount++
      reels[dats.target.id].isliked=true
    }else{
      reels[dats.target.id].likecount--
      reels[dats.target.id].isliked=false
    }
    addData();
  }
  if(dats.target.className=='follow'){
    if(!reels[dats.target.id].isFollow){
      reels[dats.target.id].isFollow=true;
     
    }else{
      reels[dats.target.id].isFollow=false
    }
    addData();
  }
  if(dats.target.className=='mute'){
    if(!reels[dats.target.id].ismuted){
      reels[dats.target.id].ismuted=true;
     
    }else{
      reels[dats.target.id].ismuted=false
    }
    addData();
  }
})

function handleScrollAudio() {
  const videos = document.querySelectorAll('.reel-video');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        const video = entry.target;
        const reelDiv = video.closest('.reels');
        const idx = reelDiv.querySelector('.mute').id;

        if (entry.isIntersecting) {
          video.muted = false;
          video.play();
          reels[idx].ismuted = false;
        } else {
          video.muted = true;
          video.pause();
          reels[idx].ismuted = true;
        }
      });
    },
    { threshold: 0.7 }
  );

  videos.forEach(video => observer.observe(video));
}
