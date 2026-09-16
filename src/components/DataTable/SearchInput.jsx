function SearchInput({value, onChange})
{
    return (
        <input type="text" value={value}
        onChange={(e) => onChange(e.target.value)} 
        placeholder="Search Some..." 
        className="w-full rounded-lg border border-gray-500 bg-gray-800 px-4 py-3 text-sm text-white outline-none focus:border-indigo-500 mb-3" />
    )
}

export default SearchInput