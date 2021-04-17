import tv from "../../../media/img/landing-tv.png";
import phone from "../../../media/img/landing-phone.png";
import all from "../../../media/img/landing-all.png";

let landingJson = [
  {
    id: 1,
    title: "Enjoy on your TV.",
    subtitle:
      "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    img: tv,
    reversed: false,
  },
  {
    id: 2,
    title: "Download your shows to watch offline.",
    subtitle: "Save your favorites easily and always have something to watch.",
    img: phone,
    reversed: true,
  },
  {
    id: 3,
    title: "Watch everywhere.",
    subtitle:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
    img: all,
    reversed: false,
  },
];

export default landingJson;
