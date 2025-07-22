import "./SearchBar.scss";

const SearchBar = ({setSearch, search}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()} className="ins-orders-searchBar">
      <img src="assets/orders/search-icon.svg" alt="search icon" />
      <input type="text" onChange={(e)=>setSearch(e.target.value)} value={search} placeholder="جستجو کنید"/>
    </form>
  )
}

export default SearchBar
