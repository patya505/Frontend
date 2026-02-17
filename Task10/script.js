let m=document.querySelector('main')
const people = [
  {
    fullName: "Elon Musk",
    profession: "Entrepreneur & CEO",
    description: "Founder of SpaceX, Tesla, and Neuralink. Known for innovation in space and electric vehicles.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  },
  {
    fullName: "Emma Watson",
    profession: "Actor & Activist",
    description: "British actress and UN Women Goodwill Ambassador, famous for the Harry Potter series.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    fullName: "Sundar Pichai",
    profession: "CEO of Google",
    description: "Technology executive leading Google and Alphabet with focus on AI and innovation.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  },
  {
    fullName: "Virat Kohli",
    profession: "Cricketer",
    description: "Indian international cricketer and former captain, known for aggressive batting.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12"
  },
  {
    fullName: "Taylor Swift",
    profession: "Singer & Songwriter",
    description: "Global music icon known for storytelling lyrics and multiple Grammy awards.",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39"
  }
];

let sum=" ";
people.forEach(function(elem){
    sum=sum+` <div id="card">
            <img src="${elem.image}" alt="">
            <div id="bio"><h1>${elem.fullName}</h1>
            <h2>${elem.profession}</h2>
            <h3>${elem.description}</h3></div></div>`;
});
m.innerHTML=sum;