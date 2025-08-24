import { Row, Col,Container,Carousel,ExampleCarouselImage, Pagination } from 'react-bootstrap';
import '../src/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar';
import Moivelist from "../src/Component/MovieList"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Moviedetails from './Component/Moviedetails';
import Footer from './Component/Footer';
import Sidebar from './Component/SideBar';
function App() {
 const [movie,setdata]=useState([]);

//All movies
 const getAllmovies= async()=>{
const res=await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=3e06f8805ca95d2a2b03771643787367&&language=en")
setdata(res.data.results);
}
const pageChange= async(NumberPage)=>{
const res= await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3e06f8805ca95d2a2b03771643787367&&language=ar&&page=${NumberPage}`)
setdata(res.data.results)


}
//search

const search=async(searchitem)=>{
if(searchitem.length==0){

  getAllmovies()
}
else{
  const res=await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3e06f8805ca95d2a2b03771643787367&&query=${searchitem}`);
setdata(res.data.results);

}



}
useEffect(()=>{
  getAllmovies();
},[])

  return (
    <div className='App'>
   <Navbar search={search}/>
   <Container>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Moivelist movie={movie} pageChange={pageChange}  />}/>
        <Route path='/movie/:id' element={<Moviedetails/>}/>
     

      </Routes>
    </BrowserRouter>
   </Container>
   <Footer/>

    </div>
  );
}
export default App;
