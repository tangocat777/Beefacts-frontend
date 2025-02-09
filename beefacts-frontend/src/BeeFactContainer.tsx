import { useState } from "react";
import axios from 'axios'

function BeeFactContainer() {
    const [beeFact, setBeeFact] = useState(null);
    
    const getBeeFact = async () => {
        axios.get('https://beefacts-dotnet-818917853004.us-central1.run.app/BeeFacts/v1/BeeFact/Random')

        .then(response => {
            setBeeFact(response.data.fact)
        })
        .catch(error => {
            console.log(error)
        }
        )
    }
    
    return (     
    <div className="ml-6 text-center">
        <h2 className="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-200 text-center">
          Click the button to get your free bee fact.
        </h2>
     <a
      className="inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-transparent bg-white px-7 text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline cursor-pointer"
      onClick={() => getBeeFact()}
    >
      <div className="flex text-lg">
        <span className="justify-center">Click here</span>
      </div>
    </a>
    <br />
    <br />

    {beeFact && <h1 className="inline-flex text-center text-white mb-6">
      { beeFact }
    </h1>}
  </div>
  )}

export default BeeFactContainer;