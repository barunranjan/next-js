import NewMeetupFrom from "../../components/meetups/NewMeetupForm";
import Layout from "../../components/layout/Layout";

const NewMeetup = () => {
  const addMeetup = (val) => {
    console.log(val);
  };

  return <NewMeetupFrom onAddMeetup={addMeetup} />;
};
export default NewMeetup;
