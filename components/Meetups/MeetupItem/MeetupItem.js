import Image from "next/image";
import imgSrc from "../../../public/meetup_image.jpg";
import classes from "./MeetupItem.module.css";
const MeetupItem = (props) => {
  return (
    <div>
      <Image src={imgSrc} alt={props.meetup.title}></Image>
      <div>
        <span className={classes.title}>{props.meetup.title}</span>
        <address>{props.meetup.address}</address>
        <p>{props.meetup.description}</p>
        <hr />
      </div>
    </div>
  );
};

export default MeetupItem;
