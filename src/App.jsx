import { useEffect } from "react"
import { fetchPersonagem } from "./services/api"

export function App() {
  useEffect(() => {
    fetchPersonagem()
      .then(response => console.log(response.data.results))
      .catch(error => console.error(error))
  })

  return (
    <div className="pb-0">

    </div>
  )
}