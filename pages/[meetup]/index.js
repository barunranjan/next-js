import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      img="https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc5MDg3NTA5MDg3NTYx/taj-mahal-2.jpg"
      title="this is title"
      description="this is description"
      address="this is address"
    />
  );
};
export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetup: "123",
        },
      },
      {
        params: {
          meetup: "12",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetup;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        img:
          "https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc5MDg3NTA5MDg3NTYx/taj-mahal-2.jpg",
        title: "this is title",
        description: "this is description",
        address: "this is address",
      },
    },
  };
};
export default MeetupDetails;
