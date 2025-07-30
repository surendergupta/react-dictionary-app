
import { FaSearch } from "react-icons/fa";
import './SearchBox.css'
const SearchBox = ({ setSearchWord, getMeaning }) => {
  return (
    <div className="searchBox">
        <input
            type="text"
            placeholder="Search..."
            onChange={(e) => { setSearchWord(e.target.value); }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') getMeaning();
            }}
        />
        <button onClick={() => {getMeaning();}} > 
            <FaSearch size="20px" />
        </button>
    </div>
  )
}

export default SearchBox