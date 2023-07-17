"use client";
import { useState } from "react"
import emailjs from "@emailjs/browser"
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
    const [values, setvalues] = useState({ name: "", email: '', message: '' })
    const handleinput = (e) => {
        const { name, value } = e.target;
        setvalues({ ...values, [name]: value })
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        const toastId = toast.loading('Sending...');
        emailjs.send(process.env.ID, process.env.TEMPLATE, {
            from_name: values.name,
            to_name: values.name,
            from_email: values.email,
            to_email: "rajuweb7@gmail.com",
            message: values.message,
        }, process.env.PASSWORD).then(() => {
            toast.dismiss(toastId);
            toast.success('Thank you!');
            setvalues({ name: "", email: '', message: '' })
        },
            () => {
                toast.dismiss(toastId);
                toast.error('This is an error!');
            })

    }
    return (
        <>
            <Toaster />
            <main className="w-full py-10 lg:p-10 flex flex-col lg:flex-row">
                <section className="w-full px-14">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center ">Contact Us</h2>
                    <p className="mb-8 lg:mb-16 text-center px-3 text-lg font-light">Got a technical issue? Want to send some feedback? Need details about our plans? Let us know.</p>
                    <div className="px-3 contact-info">
                        <div className="">
                            <div className="flex items-center p-5 gap-5">
                                <svg className="" viewBox="0 0 497 511.86">
                                    <path d="M497 227.28c0 29.39-4.56 56.35-13.58 80.75-9.13 24.51-22.07 43.5-38.62 56.98-16.56 13.47-35.66 20.16-57.2 20.16-17.82 0-32.78-5.41-45.09-16.13-12.2-10.82-19.42-24.62-21.75-41.38h-2.44c-8.28 18.04-20.16 32.15-35.66 42.34-15.38 10.07-33.73 15.17-54.85 15.17-31.09 0-55.39-10.62-72.9-31.83-17.5-21.23-26.21-50.08-26.21-86.59 0-42.23 12.21-76.61 36.61-103.03 24.51-26.42 56.66-39.58 96.45-39.58 14.01 0 30.03 1.28 47.86 3.93 17.82 2.55 33.85 6.16 48.17 10.72l-7.75 146v6.79c0 36.92 13.8 55.39 41.28 55.39 18.89 0 34.27-11.14 46.05-33.43 11.78-22.28 17.72-51.24 17.72-86.89 0-37.57-7.64-70.35-23.03-98.58-15.28-28.22-37.13-49.87-65.47-65.15-28.22-15.17-60.69-22.81-97.4-22.81-46.26 0-86.48 9.55-120.64 28.75-34.17 19.21-60.27 46.59-78.31 82.13-18.04 35.54-27.05 76.61-27.05 123.29 0 63.25 16.65 111.84 50.08 145.9 33.32 33.96 81.38 50.93 144.19 50.93 43.51 0 88.71-8.91 135.5-26.74v41.38c-39.79 17.41-84.89 26.11-135.5 26.11-75.23 0-133.58-20.7-175.18-62.08C20.69 408.51 0 350.68 0 276.41c0-53.9 11.04-101.86 33.21-143.99 22.18-42.01 53.8-74.59 94.86-97.72C169.03 11.57 216.14 0 269.19 0c44.56 0 84.14 9.34 118.95 28.12 34.69 18.78 61.53 45.41 80.42 79.9 19 34.48 28.44 74.27 28.44 119.26zm-321.4 40.75c0 52.62 20.17 78.94 60.59 78.94 42.97 0 66.21-32.47 69.93-97.3l4.45-81.07c-14.96-4.14-31.19-6.26-48.81-6.26-26.95 0-48.06 9.34-63.34 28.02-15.18 18.56-22.82 44.56-22.82 77.67z" />
                                </svg>
                                <a className="hover:opacity-50   text-sm" href="mailto:rajuweb7@gmail.com">rajuweb7@gmail.com</a>
                            </div>
                            <div className="flex items-center p-5 gap-5">
                                <svg viewBox="0 0 122.88 122.27" >
                                    <g><path d="M33.84,50.25c4.13,7.45,8.89,14.6,15.07,21.12c6.2,6.56,13.91,12.53,23.89,17.63c0.74,0.36,1.44,0.36,2.07,0.11 c0.95-0.36,1.92-1.15,2.87-2.1c0.74-0.74,1.66-1.92,2.62-3.21c3.84-5.05,8.59-11.32,15.3-8.18c0.15,0.07,0.26,0.15,0.41,0.21 l22.38,12.87c0.07,0.04,0.15,0.11,0.21,0.15c2.95,2.03,4.17,5.16,4.2,8.71c0,3.61-1.33,7.67-3.28,11.1 c-2.58,4.53-6.38,7.53-10.76,9.51c-4.17,1.92-8.81,2.95-13.27,3.61c-7,1.03-13.56,0.37-20.27-1.69 c-6.56-2.03-13.17-5.38-20.39-9.84l-0.53-0.34c-3.31-2.07-6.89-4.28-10.4-6.89C31.12,93.32,18.03,79.31,9.5,63.89 C2.35,50.95-1.55,36.98,0.58,23.67c1.18-7.3,4.31-13.94,9.77-18.32c4.76-3.84,11.17-5.94,19.47-5.2c0.95,0.07,1.8,0.62,2.25,1.44 l14.35,24.26c2.1,2.72,2.36,5.42,1.21,8.12c-0.95,2.21-2.87,4.25-5.49,6.15c-0.77,0.66-1.69,1.33-2.66,2.03 c-3.21,2.33-6.86,5.02-5.61,8.18L33.84,50.25L33.84,50.25L33.84,50.25z" /></g>
                                </svg>
                                <a className="hover:opacity-50   text-sm" href="tel:+919501235412">+91 9501235412</a></div>
                        </div>
                        <div className="flex justify-center items-center w-full py-10 lg:p-16 gap-10">
                            <a className="hover:opacity-50  " target="_blank" rel="noreferrer noopener " href="https://www.github.com/Raju1270"><svg viewBox="0 0 640 640">
                                <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
                            </svg></a>

                            <a className="hover:opacity-50  " target="_blank" rel="noreferrer noopener " href="https://www.linkedin.com/in/raju-maurya-15170b251"><svg viewBox="0 0 50 50">
                                <path d="M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z"></path>
                            </svg></a>
                            <a className="hover:opacity-50  " target="_blank" rel="noreferrer noopener " href="https://www.instagram.com/rajumaurya_13"><svg viewBox="0 0 24 24">
                                <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                            </svg></a></div>
                    </div>
                </section>

                <section className="w-full px-10  ">
                    <div className="">

                        <form action="" onSubmit={handlesubmit} className="w-full space-y-8 p-2 flex flex-col justify-center items-center lg:p-14">

                            <div className="lg:w-96">
                                <label className=" mb-2">Your Name</label>
                                <input type="text" name="name" value={values.name} className="contact-input p-3 w-full  " onChange={handleinput} required />
                            </div>
                            <div className="lg:w-96">
                                <label className="mb-2">Your Email</label>
                                <input type="email" name="email" value={values.email} className="contact-input w-full p-3  " onChange={handleinput} required />
                            </div>
                            <div className="lg:w-96">
                                <label className="mb-2">Your Message</label>
                                <textarea name="message" rows="5" value={values.message} className="p-3 w-full contact-input  " onChange={handleinput} required></textarea>
                            </div>
                            <button type="submit" className=" mt-2 py-3 px-5 text-center primary_button  ">Send message</button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}