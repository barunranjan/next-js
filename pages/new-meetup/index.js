import NewMeetupFrom from "../../components/meetups/NewMeetupForm";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import { useRouter } from "next/router";

const NewMeetup = () => {
  const router = useRouter();
  const addMeetup = async (val) => {
    const response = await axios.post("/api/new-meetup", val);
    console.log(response.data);
    router.push("/");
  };

  return <NewMeetupFrom onAddMeetup={addMeetup} />;
};
export default NewMeetup;
