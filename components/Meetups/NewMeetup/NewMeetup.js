import { Fragment } from "react";
import classes from "./NewMeetup.module.css";

const NewMeetup = () => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("form submitted");
  };

  return (
    <Fragment>
      <h1 className="center">Add New Meetup</h1>
      <form onSubmit={formSubmitHandler} className={classes.form}>
        <div className={classes.formControl}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" />
        </div>

        <div className={classes.formControl}>
          <label htmlFor="description">Description</label>
          <textarea id="description" rows={5} />
        </div>

        <div className={classes.formControl}>
          <label htmlFor="image">Image</label>
          <input type="text" id="image" />
        </div>

        <div className={classes.formControl}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" />
        </div>

        <div className={classes.formControl}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </Fragment>
  );
};

export default NewMeetup;
