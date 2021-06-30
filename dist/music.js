const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	{
        name: "113 倩女幽魂 张国荣",
        artist: '朴树',
        url: 'https://raw.githubusercontent.com/tongsiying/sound/master/%E5%8D%95%E7%94%B0%E8%8A%B3_%E4%B9%B1%E4%B8%96%E6%9E%AD%E9%9B%84_001.mp3',
        cover: '',
      },
	  {
        name: '这些民谣 - 一次听个够',
        artist: '翁大涵',
        url: 'http://www.ytmp3.cn/down/60222.mp3',
        cover: 'http://p2.music.126.net/Wx5GNJEpay2JbfVUJc4Aew==/109951163094853876.jpg?param=130y130',
      },
      {
        name: '你的酒馆对我打了烊',
        artist: '陈雪凝',
        url: 'http://www.ytmp3.cn/down/59770.mp3',
        cover: 'http://p1.music.126.net/LiRR__0pJHSivqBHZzbMUw==/109951163816225567.jpg?param=130y130',
      },
	  {
        name: 'Something Just Like This',
        artist: 'The Chainsmokers',
        url: 'http://www.ytmp3.cn/down/50463.mp3',
        cover: 'http://p2.music.126.net/ggnyubDdMxrhpqYvpZbhEQ==/3302932937412681.jpg?param=130y130',
      },
      {
        name: 'Good Time',
        artist: 'Owl City&Carly Rae Jepsen',
        url: 'http://www.ytmp3.cn/down/34148.mp3',
        cover: 'http://p1.music.126.net/c5NVKUIAUcyN4BQUDbGnEg==/109951163221157827.jpg?param=130y130',
      }
    ]
});