import { connectToDB } from "@/utils/database";
import RenderCount from "@/models/renderCount";

async function getRenderCount() {
  try {
    await fetch('http://localhost:3000/api/renderCount', {method: 'PATCH'});

    const res = await fetch('http://localhost:3000/api/renderCount')

    
    // await connectToDB();
    // const filter = {countType: "Counting all renders"};
    // await RenderCount.updateOne(filter, {$inc: {count: 1}});
   
    // const allRenderCount = await RenderCount.find({countType: "Counting all renders"}).then(data => data[0]).catch(err => console.log(err));

    // console.log(allRenderCount);
    // return allRenderCount;

    return res.json();
  } catch (error) {
    console.log(error);
  }
}


const RenderCountCard = async () => {
  const data = await getRenderCount();

  return (
    <div className="border-2 border-orange-400"> 
      <h1>RenderCountCard Component</h1>
      <h1>Total server side rendering: {data.count}</h1>


      
    </div>
  )
}

export default RenderCountCard;
