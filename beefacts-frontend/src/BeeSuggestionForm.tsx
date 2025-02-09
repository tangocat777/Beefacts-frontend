import { useState, useMemo } from "react";
import axios from 'axios'

function BeeSuggestionForm() {
    const [factSuggestion, setFactSuggestion] = useState<string>("");
    const validSuggestion: boolean = useMemo(() => { return factSuggestion && factSuggestion.length >= 5}, [factSuggestion]);

    const sendSuggestion = async (suggestion: string) => {
        let payload = { Fact: suggestion }
        axios.post('https://beefacts-dotnet-818917853004.us-central1.run.app/BeeFacts/v1/BeeFact/Suggestion', payload)

        .then(response => {
            setFactSuggestion("")
        })
        .catch(error => {
            console.log(error)
        }
        )
    }

    return (
        <>
            <div className="ml-6 text-center">
                <h2 className="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-200 text-center">
                    Do you like these bee facts? You can suggest a new one for others to see! Type your suggestion here:
                </h2>
                <input
                className="inline-flex items-center py-3 font-semibold text-black bg-gray px-7 text-md md:mt-0 focus:shadow-outline"
                type="text"
                onChange={(e => setFactSuggestion(e.target.value))}
                value={factSuggestion}/>
                
            </div>
            <div className="ml-6 text-center mt-8">
              <input className={(validSuggestion ? 'opacity-100' : 'opacity-0') + " items-center py-3 font-semibold text-black transition-opacity duration-500 ease-in-out transform bg-transparent bg-white px-7 text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline cursor-pointer"}
                type="button"
                value="Click to submit your suggestion"
                onClick={(() => sendSuggestion(factSuggestion))}/>
            </div>
        </>
)}
export default BeeSuggestionForm;