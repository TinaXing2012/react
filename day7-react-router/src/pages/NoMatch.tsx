import { useEffect } from "react";
import Title from "./Title";

export default function NoMatch() {

  // useEffect(() => {
  //   document.title = '404 Page Not Found!';
  // }, []);

  return (
    <>
      <Title title="404 Page Not Found!" />
      <div>NoMatch</div>
    </>
  )
}
