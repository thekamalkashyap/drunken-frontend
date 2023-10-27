import { Hero, Description } from "@/components/Trip";
import { useRouter } from "next/router";
const page = () => {
  const router = useRouter();
  const id = router.query.id;
  return (
    <>
      <Hero />
      <Description />
    </>
  );
};

export default page;
