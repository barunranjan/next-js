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

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };
export const getStaticProps = async () => {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
};
export default HomePage;
