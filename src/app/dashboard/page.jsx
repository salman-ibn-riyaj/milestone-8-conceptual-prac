import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";



const Dashboard = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  const user = session?.user;
 

  return (
    <div>
      {
        user? <div><Image src={'/HeMe.jpg'} height={500} width={400} alt="salman"></Image></div> : <div >Sign in to get access Dashboard</div>
      }
    </div>
  );
};

export default Dashboard;
