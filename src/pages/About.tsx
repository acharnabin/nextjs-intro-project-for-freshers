
import Link from "next/link";

import { useParams } from "next/navigation";
import { useAppSelector } from "@/hooks/useAppDispatch";

function About() {

  const params=useParams()
  const { productData } = useAppSelector(
    (s) => s.product
  );
  console.log(params)
  return (
    <>
      <h1>About</h1>
      <div className="card">
        {productData?.length}
      </div>
      <Link to="/">Home</Link>
     
    </>
  );
}

export default About;
