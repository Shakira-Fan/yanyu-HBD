import { BottomNav } from "../Components/BottomNav";
import { Card } from "../Components/Card";
import { Nav } from "../Components/Nav";
import { PolicyCard } from "../Components/PolicyCard";
import { SocialMedia } from "../Components/socialMedia";
import { FaBirthdayCake } from 'react-icons/fa'



const Home = () => {
  const newsList = [
    {
      id: 1,
      date: "2021/12/9",
      title: "澳門骨堡",
      content:
        "那天我們點了骨堡湯跟蛤蜊煲，記得幫我們點餐的服務生很有個性，也很細心，我看到蛤蜊煲裡都是沙子特別挑出來，他有看到，蛤蜊煲就直接免單，那一餐我們吃得很飽很飽。",
      imgUrl: "images/12-9.jpg",
      otherImgUrl: [
        {
          imgUrl: "images/12-9-2.jpg",
        },
        {
          imgUrl: "images/12-9-3.jpg",
        },
        {
          imgUrl: "images/12-9-4.jpg",
        },
        {
          imgUrl: "images/12-9-5.jpg",
        }
      ]
    },
    {
      id: 2,
      date: "2021/12/9",
      title: "新北耶誕城",
      content:
        "去到新北耶誕城，晏晏很像小朋友，到處照相，我也依舊拍得很爛，但晏晏都沒有生氣，是直接放棄。",
      imgUrl: "images/12-9-chrismas.jpg",
      otherImgUrl: [
        {
          imgUrl: "images/12-9-chrismas-4.jpg",
        },
        {
          imgUrl: "images/12-9-chrismas-6.jpg",
        },
        {
          imgUrl: "images/12-9-chrismas-2.jpg",
        },
        {
          imgUrl: "images/12-9-chrismas-3.jpg",
        }
      ]
    },
    {
      id: 3,
      date: "2021/12/10",
      title: "擎天岡看牛",
      content:
        "那天晏羽穿的很少，天氣狀況也不到很好，但是還是想上山去看牛，多虧晏羽還是要上去看牛，謝謝晏羽的堅持。",
      imgUrl: "images/12-10-cow.jpg",
      otherImgUrl: [
        {
          imgUrl: "images/12-10-cow-2.jpg",
        },
        {
          imgUrl: "images/12-10-cow-3.jpg",
        },
        {
          imgUrl: "images/12-10-cow-4.jpg",
        },
        {
          imgUrl: "images/12-10-cow-5.jpg",
        }
      ]
    },
  ];

  const policyIssuesList = [
    {
      id: 1,
      title: "2019的我們",
      imgUrl: "images/2019.jpg",
    },
    {
      id: 2,
      title: "2017的我們跟妳可愛的爸媽",
      imgUrl: "images/2017.jpg",
    },
    {
      id: 3,
      title: "2015的我們",
      imgUrl: "images/2015.jpg",
    },
  ];

  const socialMedia = [
    { href: "#facebook", img: "images/fb-icon.png", alt: "Facebook" },
    { href: "#instargram", img: "images/ig-icon.png", alt: "Instagram" },
    { href: "#youtube", img: "images/yt-icon.png", alt: "Youtube" },
  ];

  return (
    <main className="max-container relative">
      <Nav />
      <section>
        <div className="flex flex-col justify-center items-center mt-28">
          <span className="text-gradient-color md:text-8xl font-mantousans text-[46px] leading-none lg:mr-10">
            善良又可愛的晏晏
          </span>
          <span className="text-gradient-color md:text-8xl font-mantousans text-[48px] leading-none">
            生日快樂!!
          </span>
        </div>
        <div className="flex justify-center mt-16 max-sm:mt-8 relative">
          <img src="images/home-person-img.png" alt="personImg" className="rounded-t-full" />
          <div className="absolute top-[400px] bg-white w-[208px] py-2 rounded-xl flex justify-center sm:hidden">
            <SocialMedia socialMedia={socialMedia} />
          </div>
        </div>
        <div className="marquee-container  bg-primary-theme-one">
          <div className="marquee-content text-white md:text-[64px] text-[40px] font-mantousans mx-8">
            <span>晏羽生日快樂！</span>
            <span className="mx-6">生活充滿歡笑，愛情事業雙收，未來的日子更加美好。</span>
          </div>
          <div className="marquee-content2 text-white md:text-[64px] text-[40px] font-mantousans">
            <span>晏羽生日快樂！</span>
            <span className="mx-6">生活充滿歡笑，愛情事業雙收，未來的日子更加美好。</span>
          </div>
        </div>
      </section>
      <section className="bg-bg-color-theme-second" id="advocate">
        <div className="flex justify-center max-lg:flex-col max-lg:items-center py-[50px] md:py-[100px] md:w-7/8 mx-4 md:mx-8">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="bg-white flex flex-col items-center rounded-t-2xl xl:rounded-l-2xl">
              <div className="bg-text-primary w-[114px] rounded-xl mt-12 mb-2">
                <div className="text-white md:px-4 py-3 text-center font-bold">
                  莉莉的祝福
                </div>
              </div>
              <div className="mb-5">
                <span className="text-gradient-color md:text-[64px] font-mantousans text-[52px]">
                  愛情甜蜜
                </span>
              </div>
              <div className="text-text-primary text-2xl md:text-[28px] w-5/6 md:w-3/4 mb-5 font-bold">
                <span>
                  在這個特別的日子，送上對你們深厚的祝福。願你們的
                  <span className="text-primary-theme-one">愛情之花</span>
                  永遠綻放，香甜滿溢。
                </span>
              </div>
              <div className="text-text-primary text-base md:text-lg w-5/6 md:w-3/4 mb-8 md:mb-6">
                <span>
                  畢竟，你們在一起也四年了，一同經歷的大大小小的回憶，見證著你們的成長和愛情的深厚。願未來的日子裡，愛情繼續如昔，更加堅固。
                </span>
              </div>
            </div>
            <div>
              <img
                src="images/advocate.png"
                alt="advocate"
                className=" rounded-b-2xl xl:rounded-r-2xl w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="latestEvents" className=" py-12 md:py-[50px]">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-text-primary w-[154px] rounded-xl mt-12 mb-2">
            <div className="text-white md:px-2 py-3 text-center font-bold">
              台中-台北
            </div>
          </div>
          <div className="mb-5">
            <span className="text-gradient-color md:text-[64px] font-mantousans text-[52px]">
              去台中找晏晏
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-6 xl:grid-cols-2 md:mx-16 mx-4">
          <div className="flex flex-col justify-center items-center">
            <div>
              <video autoPlay muted loop width="600" className=" rounded-lg">
                <source src="/vedio/happyhour.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="mt-5">
              <span className="text-text-secondary text-sm">2023/02/11</span>
              <h1 className="text-text-primary text-xl font-bold">
                台中花燈
              </h1>
              <div className="text-text-primary lg:w-5/6 w-full mb-8">
                那天參加完思茹的婚禮，我們休息了一下去看台中花燈，妳說我很幸運，因為2/12就結束了，人潮很多，去到的這裡是台中西屯的中央公園，裡面的魔盒世界，我們走到腳痠，還排隊排不到盡頭，只好矇矇懂懂地跟著人群進去，這個影片是我印象最深刻的，我們都笑得很開心，我真心很喜歡這個時候。
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {newsList.map((item) => (
              <Card
                key={item.id}
                date={item.date}
                title={item.title}
                content={item.content}
                imgUrl={item.imgUrl}
                otherImgUrl={item.otherImgUrl}
              />
            ))}
          </div>
        </div>
      </section>
      <section
        id="policyIssues"
        className=" bg-bg-color-theme-one flex flex-col items-center justify-center py-2 md:py-[50px]"
      >
        <div className="flex flex-col justify-center items-center">
          <div className="bg-text-primary w-[146px] rounded-xl mt-12 mb-2">
            <div className="text-white md:px-2 py-3 text-center font-bold">
              回憶
            </div>
          </div>
          <div className="mb-5">
            <span className="text-gradient-color md:text-[64px] font-mantousans text-[52px]">
              以前的我們
            </span>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:mx-8 mx-4">
          {policyIssuesList.map((item) => (
            <PolicyCard
              key={item.id}
              title={item.title}
              imgUrl={item.imgUrl}
            />
          ))}
        </div>
      </section>
      <section
        id="donate"
        className=" bg-bg-color-theme-one flex justify-center items-center max-sm:flex-col md:py-3 py-2"
      >
        <div className="bg-primary-theme-one p-6 rounded-[32px] md:w-[648px] lg:h-[593px] h-[352px] w-[343px] flex justify-center items-center m-4 md:ml-10">
          <video autoPlay muted loop height="200" className=" rounded-lg h-[300px] lg:h-[550px]">
            <source src="/vedio/single.mp4" type="video/mp4" />
          </video>
        </div>
        <div
          className="bg-text-primary p-6 md:w-[648px] lg:h-[593px] h-[352px] w-[343px] rounded-[32px] flex justify-center items-center m-4 md:mr-10"
          id="email"
        >
          <video autoPlay muted loop height="200" className=" rounded-lg h-[300px] lg:h-[550px]">
            <source src="/vedio/two.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
      <section
        id="slogan"
        className="bg-bg-color-theme-one pb-[100px] pt-[100px] lg:pb-0"
      >
        <div className="flex flex-col justify-center items-center">
          <span className="text-gradient-color md:text-[64px] font-mantousans text-[36px] leading-none lg:mr-10">
            陪伴我青春的晏羽
          </span>
          <span className="text-gradient-color md:text-[64px] font-mantousans text-[36px] leading-none">
            希望妳永遠健康美麗
          </span>
        </div>
        <div className="bg-bg-color-theme-second flex justify-center items-center flex-col sm:flex-row py-4 mt-7">
          <div className="bg-gradient-color rounded-full w-[50px] h-[50px]  mr-4 mt-4">
            <div className="text-white text-[25.5px] md:text-[32px] flex justify-center pt-2">
              <FaBirthdayCake />
            </div>
          </div>
          <div>
            <span className="text-primary-theme-one font-bold text-[28px] md:text-[40px]">
              2023/11/13
            </span>
          </div>
        </div>
      </section>
      <BottomNav />
    </main>
  );
};

export default Home;
