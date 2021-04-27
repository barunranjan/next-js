import NewMeetupFrom from "../../components/meetups/NewMeetupForm";
import Layout from "../../components/layout/Layout";
import { useRouter } from "next/router";

const NewMeetup = () => {
  const router = useRouter();
  const addMeetup = async (val) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(val),
      headers: {
        "Content-Type": "Application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  };

  return <NewMeetupFrom onAddMeetup={addMeetup} />;
};
export default NewMeetup;
