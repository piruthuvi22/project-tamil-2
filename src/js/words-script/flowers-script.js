const audio = [
    {
      audioSrc: "../../src/audio/words-audio/flowers/01.wav",
      imageSrc: "../../src/img/words-img/flowers/01.jpg",
      tamil: "மல்லிகை ",
      pronunciation: "Malliklai",
      english: "Jasmine"
    },

    {
      audioSrc: "../../src/audio/words-audio/flowers/02.wav",
      imageSrc: "../../src/img/words-img/flowers/02.jpg",
      tamil: "ரோசா ",
      pronunciation: "Rosaa",
      english: "Rose"
    },
    {
      audioSrc: "../../src/audio/words-audio/flowers/03.wav",
      imageSrc: "../../src/img/words-img/flowers/03.jpg",
      tamil: "செவ்வரத்தை ",
      pronunciation: "Sevvaraththai",
      english: "Cevvarattai"
    },
    {
      audioSrc: "../../src/audio/words-audio/flowers/04.wav",
      imageSrc: "../../src/img/words-img/flowers/04.jpg",
      tamil: "செவ்வந்தி ",
      pronunciation: "Sevvanthi",
      english: ""
    },
    {
      audioSrc: "../../src/audio/words-audio/flowers/05.wav",
      imageSrc: "../../src/img/words-img/flowers/05.jpg",
      tamil: "நந்தியாவட்டை  ",
      pronunciation: "Nanthiyavadda",
      english: "Nantiyavattai"
    },
    {
      audioSrc: "../../src/audio/words-audio/flowers/06.wav",
      imageSrc: "../../src/img/words-img/flowers/06.jpg",
      tamil: "கனகாம்பரம் ",
      pronunciation: "Kanakaamparam",
      english: "Firecracker Flower"
    },
    {
      audioSrc: "../../src/audio/words-audio/flowers/07.wav",
      imageSrc: "../../src/img/words-img/flowers/07.jpg",
      tamil: "தாமரை ",
      pronunciation: "Thamarai",
      english: "Lotus"
    },
    {
      audioSrc: "../../src/audio/words-audio/flowers/08.wav",
      imageSrc: "../../src/img/words-img/flowers/08.jpg",
      tamil: "வாடாமல்லிகை ",
      pronunciation:"Vadamalli",
      english: "Vadamali"
    },          
    {
      audioSrc: "../../src/audio/words-audio/flowers/09.wav",
      imageSrc: "../../src/img/words-img/flowers/09.jpg",
      tamil: "நித்தியகல்யாணி  ",
      pronunciation: "Nittiyakalyani",
      english: "Nittiyakalyani"
    },
    {
      audioSrc: "../../src/audio/words-audio/flowers/10.wav",
      imageSrc: "../../src/img/words-img/flowers/10.jpg",
      tamil: "அல்லி ",
      pronunciation: "Ally",
      english: "Nymphaeaceae"
    },
    {
      audioSrc: "../../src/audio/words-audio/flowers/11.wav",
      imageSrc: "../../src/img/words-img/flowers/11.jpg",
      tamil: "சூரியகாந்தி ",
      pronunciation: "Soriyakaanthi",
      english: "Sunflower"
    },
    {
      audioSrc: "../../src/audio/words-audio/flowers/12.wav",
      imageSrc: "../../src/img/words-img/flowers/12.jpg",
      tamil: "கார்த்திகைப்பூ ",
      pronunciation: "Karththikaippu",
      english: "Gloriosa superba"
    },
    {
      audioSrc: "../../src/audio/words-audio/flowers/13.wav",
      imageSrc: "../../src/img/words-img/flowers/13.jpg",
      tamil: "அலரி ",
      pronunciation: "Alari",
      english: "Oleander"
    },
    {
      audioSrc: "../../src/audio/words-audio/flowers/14.wav",
      imageSrc: "../../src/img/words-img/flowers/14.jpg",
      tamil: "முல்லை",
      pronunciation: "Kaluthai",
      english: "Rotana"
    }
  ]
  var i = 0;
  
  function mySlide(param) {
    if (param === 'next') {
      i++;
      if (i === audio.length) { i = audio.length - 1; }
    } else {
      i--;
      if (i < 0) { i = 0; }
    }
  
    document.getElementById("player").setAttribute('src', audio[i].audioSrc);
    document.getElementById("img").src = audio[i].imageSrc;
    document.getElementById("tamil").innerHTML = audio[i].tamil
    document.getElementById("pronunciation").innerHTML = audio[i].pronunciation
    document.getElementById("english").innerHTML = audio[i].english
  
    if (i == audio.length - 1) {
      document.getElementById('next').classList.add("hide")
    }
    else if (i == 0) {
      document.getElementById('back').classList.add("hide")
    }
    else if (i != audio.length - 1 || i != 0) {
      document.getElementById('next').classList.remove("hide")
      document.getElementById('back').classList.remove("hide")
    }
  }