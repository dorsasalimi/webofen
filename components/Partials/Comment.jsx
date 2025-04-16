'use client'
import { useRef } from "react";

const Comment = () => {
  const usernameRef = useRef("");
  const subjectRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");

  async function submitForm(e) {
    e.preventDefault();
    // Getting the values from their useRef hooks
    let username, subject, email, message;
    username = usernameRef.current.value;
    subject = subjectRef.current.value;
    email = emailRef.current.value;
    message = messageRef.current.value;
    //Some form Validation
    if (!username || !subject || !email || !message) {
      alert("Failed: Ensure to fill all form inputs");
      return;
    }
    // Clear the form inputs after submit
    usernameRef.current.value =
      subjectRef.current.value =
      emailRef.current.value =
      messageRef.current.value =
      "";

    // TODO: Send the form  values to an api route

  }
  return (
    <section className="p-5">
      <span className="font-bold text-xl">ثبت دیدگاه</span>
      <form action="/" onSubmit={submitForm}>
        <div>
          <div className="md:flex lg:flex m-5">
            <input
              className="md:w-1/3 p-2 mx-auto border-solid border border-blue-600 rounded-md"
              type="text"
              placeholder="عنوان"
              required
              ref={subjectRef}
            />
            <input type="text" className="md:w-1/3 p-2 mx-auto border-solid border border-blue-600 rounded-md" placeholder="نام" required ref={usernameRef} />
            <input type="email" className="md:w-1/3 p-2 mx-auto border-solid border border-blue-600 rounded-md" placeholder="ایمیل" required ref={emailRef} />
          </div>
          <div className="w-3/3 m-5">
            <textarea
              className=" w-full h-40 border-solid border border-blue-600 rounded-md"
              placeholder="دیدگاه شما ..."
              rows="10"
              required
              ref={messageRef}
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button className="px-8 py-3 bg-blue-950 text-white font-bold rounded-md border border-blue-950 border-solid transition-all duration-200 hover:bg-zinc-100 hover:text-blue-950" type="submit" href="/">
              ارسال دیدگاه
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Comment;