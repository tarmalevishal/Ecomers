import { Link } from "react-router-dom";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
import './Navbar.css'
import Data from './Data'
const Navbar = ({setSearch,size,data,setData}) => {

  // const [sortOrder, setSortOrder] = useState("asc");
  // const sortPrice = () => {
  //   const sortedData = [...data]; // Create a copy of the current data
  //   sortedData.sort((a, b) => {
  //     const priceA = parseFloat(a.price); // Assuming 'price' is a string, convert to a number
  //     const priceB = parseFloat(b.price);
      
  //     if (sortOrder === "asc") {
  //       return priceA - priceB;
  //     } else {
  //       return priceB - priceA;
  //     }
  //   });
  //   setData(sortedData);
  //   setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  // };

  const filterResult = (catItem)=>{
    var newData = Data;
    const result = newData.filter((item)=>{
       return item.category===catItem
    })
    console.log(result);
    setData(result)
    // console.log(newData);
  }
  const filterResult2 = (catItem)=>{
    var newData = Data;
    const result = newData.filter((curData)=>{
      return curData.category===catItem
    })
    console.log(result);
    setData(result)
  
  }
  const filterResult3 = (catItem)=>{
    var newData = Data;
    const result = newData.filter((curData)=>{
      return curData.category===catItem
    })
    console.log(result);
    setData(result)
   
  }
  const filterResult4 = (catItem)=>{
    var newData = Data;
    const result = newData.filter((curData)=>{
      return curData.category===catItem
    })
    console.log(result);
    setData(result)
    
  }
  // function sortPrice() {
  //   const newData = [...Data];
  //   newData.sort((a,b)=>a.price - b.price);
  //   setData(newData);
  // }

  // function sortAZ() {
  //   const newData = [...Data];
  //   newData.sort((a,b)=>a.title.localeCompare(b.title));
  //   setData(newData);
  // }
  return (
    <div>
        <nav className="navbar">
            <article className="navart">
                <div className="navdiv"><Link style={{color:'white',textDecoration:'none'}}to ='/'><h1 className="amazon"><img src="data:image/png;base64,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" height={'40px'} alt="" /></h1></Link></div>
                <div className="navdiv"><input onChange={(e)=>setSearch(e.target.value)} type="search"placeholder="Serch Your Products" /></div>
                <div className="navdiv"><Link style={{color:'white',textDecoration:'none'}} to='/cart'><h1>🛒<sup>{size}</sup></h1></Link></div>
            </article>
          <article className="artbtn">
            <button onClick={()=>filterResult(`men's clothing`)}>Men</button>
            <button onClick={()=>filterResult2(`women's clothing`)}>Women</button>
            <button onClick={()=>filterResult3(`electronics`)}>Electronics</button>
            <button onClick={()=>filterResult4(`jewelery`)}>Jewellery</button>
            <button onClick={()=>sortPrice()}>Sort By Price</button>
            {/* <button onClick={()=>sortAZ()}>SortAZ</button> */}
          </article>
        </nav>
    </div>
  )
}

export default Navbar