// import { QUERY_USER } from '../utils/queries';
// import { useLazyQuery } from '@apollo/client';
// import { useState } from 'react';
// import { Link } from 'react-router-dom'





// const Search = () => {

//     const [findFriend] = useLazyQuery(QUERY_USER)

// const [formState, setFormState] = useState({ username: '' })

// const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState((prevFormState) => ({
//       ...prevFormState,
//       [name]: value,
//     }));
//   };

// const searchFriends = async (event) => {
//     event.preventDefault();
//     console.log(formState)
//     try {
//         const { data } = await findFriend({
//             variables: { ...formState }
//         })
//         console.log(data)
//     } catch (error) {
//         console.error(error)
//     }

//     setFormState({
//         username: ''
//     })
// }

//     return (
//         <>
//             <div className="search-form-home container-fluid d-flex flex-column align-items-end">
//                 <form className="movie-search-form d-flex" onSubmit={searchFriends}>
//                     <label htmlFor='username'></label>
//                     <input
//                         className="form-control me-2"
//                         type="username"
//                         value={formState.username}
//                         onChange={handleChange}
//                         placeholder="Search for a friend..."
//                         aria-label="Search"
//                         name='username'
//                     />

//                     <button className="btn search-btns btn-outline-danger" type="button" onClick={searchFriends}>
//                         Search
//                     </button>

//                 </form>
//                 {/* <form className="movie-search-form d-flex">
//                 <label htmlFor='movie'></label>
//                     <input
//                         className="form-control me-2"
//                         type="movie"
//                         value={formState.movie}
//                         onChange={handleChange}
//                         placeholder="Search movies..."
//                         aria-label="Search"
//                         name='movie'
//                     />
//                         <button className="btn search-btns btn-outline-danger" type="submit">
//                             Search
//                         </button>
//                 </form> */}
//             </div>
//         </>
//     )
// }

export default Search