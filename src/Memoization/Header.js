import React from 'react'

// ****** useMemo *********
// function Header({ number, data}) {
//     console.log('header rendered.');
//     return (
//     <div>
//         Header - {number}

//     <br></br>
//     <code>{JSON.stringify(data)}</code>
//     </div>
//   )
// }
// export default React.memo(Header);

 
function Header({ number, increment}) {
    console.log('header rendered.');
    return (
    <div>
        Header - {number}

    <br></br>
    <button onClick={increment}>Click</button>
    
    </div>
  )
}
export default React.memo(Header);

