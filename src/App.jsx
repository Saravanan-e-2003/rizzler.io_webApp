import './style.css'
import Headerz from './Components/Headerz'
import QuoteBox from './Components/QuoteBox'
import CategoryDropDown from './Components/CategoryDropDown'
import { useState } from 'react'

function App() {
  const [category,setCategory] = useState("");

  return(
    <>
      <Headerz />
      <div className='contents'>
        <CategoryDropDown setSelectedCategory={setCategory} />
        <QuoteBox selectedCategory = {category}/>
      </div>
    </>

  )
}

export default App
