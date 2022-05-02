import { Fragment } from "React";
import MeetupItem from "./MeetupItem/MeetupItem";
import classes from "./Meetups.module.css";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque et distinctio aut adipisci voluptates quaerat reiciendis, laboriosam, quisquam ea ipsa illum exercitationem voluptatibus possimus ut esse quo, provident asperiores?",
    address: "Some street 5, Some city",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "m2",
    title: "Title 2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quae quaerat consequatur accusantium quam soluta totam. Similique rerum recusandae aperiam, dolorem fugit velit? Dolorem deserunt tempore nobis architecto similique commodi.",
    address: "Some street 5, Some city",

    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];
const Meetups = () => {
  return (
    <Fragment>
      <h1 className={classes.title}>All Meetups</h1>

      <section className={classes.meetup_list}>
        <ul>
          {DUMMY_MEETUPS.map((meetup) => {
            return (
              <li key={meetup.id}>
                <MeetupItem meetup={meetup} />
              </li>
            );
          })}
        </ul>
      </section>
    </Fragment>
  );
};

export default Meetups;
