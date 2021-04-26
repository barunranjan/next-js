import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: 12,
    title: "meeting",
    image:
      "https://i.gadgets360cdn.com/large/NASA_AG_Carinae_1619271627845.jpg?downsize=950:*&output-quality=80&output-format=webp",
    address: "842003",
    description: "this is a meetup",
  },
  {
    id: 123,
    title: "meeting2",
    image:
      "https://i.gadgets360cdn.com/large/NASA_AG_Carinae_1619271627845.jpg?downsize=950:*&output-quality=80&output-format=webp",
    address: "842003",
    description: "this is a meetup",
  },
];

const HomePage = () => {
  const [loadedMeetup, setLoadedMeetup] = useState([]);
  useEffect(() => {
    setLoadedMeetup(DUMMY_MEETUPS);
  }, []);
  return <MeetupList meetups={loadedMeetup} />;
};
export default HomePage;
