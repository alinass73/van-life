import { useParams } from "react-router-dom"

export default  function ProfilePage(){
    const params= useParams();
    console.log(params)
    return (
      <>
        <h1>
          Profile Page {params.profileId} 
        </h1>
      </>
    )
  }