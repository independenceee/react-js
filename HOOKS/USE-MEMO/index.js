import {useState, useMemo, useRef} from 'react';


// tránh thực hiện lại logic không cần thiết
// khong tính toán lại khi thay dổi name và price
// tính toán lại khi product thay đổi

const App = function() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [product, setProduct] = useState([]);

    const handleSubmit = function() {
            setProduct([...product, {
                name: name,
                price: parseInt(price), // Number(price)  // +price
            }])

            setName("");
            setPrice("");

            nameRef.current.focus();

    }

    const nameRef = useRef();

    const total = useMemo(() => {
        const Total = product.reduce((result, prod) =>{
            console.log("tính toán lại")
            return  result + prod.price;
        }, 0)
        return Total;
    }, [product])

    return (
        <>
            <input 
                ref={nameRef}
                value={name}
                placeholder="name"
                onChange={e=> setName(e.target.value)}
            />
            <br/>
            <input 
                value={name}
                placeholder="name"
                onChange={e=> setPrice(e.target.value)}

            />
            <br/>

            <button onClick={handleSubmit}>Add</button>
            <div>Total: {total}</div>
            <ul>
                {product.map((pro, index) => {
                    return(
                        <li key={index}>
                                {product.name} - {product.price}
                        </li>
                    )
                })}
            </ul>
            
        </>
    )
}
