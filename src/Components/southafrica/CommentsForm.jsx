import React from "react";
import { useForm } from "react-hook-form";
import "../../styles/southafrica.css";

function CommentsForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // const formData = {};
  const onSubmit = (data) => {
    console.log(data);
    alert(
      `An embbedded page at travello-next.js.vercel.app says ${JSON.stringify(
        data
      )}`
    );

    reset();
  };

  return (
    <>
      <div className="comment-form mt-4 mb-4">
        <h2>Add a Comment</h2>
        <p className="form-text-color mt-3">
          Your email address will not be published.
        </p>
        <form action="" id="form-comments" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-lg-5 col-xl-5">
              <input
                {...register("firstName", {
                  required: "This field is required.",
                })}
                className="mb-3 input-style col-12 px-4"
                type="text"
                placeholder="First Name:"
                id="first-name"
              />
              {errors.firstName && (
                <div style={{ color: "red" }}>{errors.firstName.message}</div>
              )}
            </div>
            <div className="col-lg-5 col-xl-5">
              <input
                {...register("lastName", {
                  required: "This field is required.",
                })}
                className="mb-3 input-style col-12 px-4"
                type="text"
                placeholder="Last Name:"
                id="last-name"
              />
              {errors.lastName && (
                <div style={{ color: "red" }}>{errors.lastName.message}</div>
              )}
            </div>
          </div>
          <input
            {...register("reviewTitle", {
              required: "This field is required.",
            })}
            className="col-12 col-lg-10 col-xl-10 px-4 mb-3 input-style"
            type="text"
            placeholder="Review Title"
            id="review-title"
          />
          {errors.reviewTitle && (
            <div style={{ color: "red" }}>{errors.reviewTitle.message}</div>
          )}

          <textarea
            {...register("message", { required: "This field is required." })}
            className="p-3 text-erea-style col-12 col-lg-10 col-xl-10"
            placeholder="Write a Message"
            cols="30"
            name="message"
            id="message"
          ></textarea>
          {errors.message && (
            <div style={{ color: "red" }}>{errors.message.message}</div>
          )}

          <button
            type="submit"
            className="btn-style first-color btn main-color mt-3"
          >
            Submit comment
          </button>
        </form>
      </div>
    </>
  );
}

export default CommentsForm;
