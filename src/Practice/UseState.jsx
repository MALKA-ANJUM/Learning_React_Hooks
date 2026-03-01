import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useCounter from '../CustomHooks/useCounter';

const UseState = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("");
  const {count, increment, decrement, reset} = useCounter(10);

	useEffect(() => {
		axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
			.then(res => setData(res.data))
			.catch(err => console.log(err))
	}, [])

	const filtered = data.filter(u =>
		u.name.toLowerCase().includes(search.toLowerCase())
		);
	return (
		<div>
			<p>{count}</p>

			<button onClick={increment}>+</button>
			<button onClick={decrement}>-</button>
			<button onClick={reset}>Reset</button>
			<hr />

			<form>
				<input type="text" value={search} name='search' onChange={(e) => setSearch(e.target.value)} />
			</form>
			{filtered.map(info => 
				<li key={info.id}>{info.name}</li>
			)}
		</div>
	)
}

export default UseState
