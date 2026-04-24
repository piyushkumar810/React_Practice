// this is normal java script function not react component

// function PrintEvenNumber(arr){
//     for(let i=0; i<arr.length;i++){
//         if(arr[i]%2===0){
//             console.log(arr[i]);
//         }
//     }
// }

// arr=[1,2,3,6,45,23,45,2,22,88];
// PrintEvenNumber(arr);

// export default PrintEvenNumber


// -------------creating react component
function PrintEvenNumber() {
    let arr = [1,2,3,6,45,23,45,2,22,88];

    return (
        <div>
            <h2>Even Numbers:</h2>
            {arr.map((num, index) => (
                num % 2 === 0 ? <p key={index}>{num}</p> : null
            ))}
        </div>
    );
}

export default PrintEvenNumber;