import { useEffect } from "react";
import Title from "./Title";

export default function About() {

  // useEffect(() => {
  //   document.title = 'About';
  // }, []);

  return (
    <>
      <Title title='About' />
      <div>About</div>
    </>

  )
}
