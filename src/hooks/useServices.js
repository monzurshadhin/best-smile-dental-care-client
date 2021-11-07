import { useEffect, useState } from "react";
import { useHistory } from "react-router";

const useServices = () =>{

    const [services,setServices] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:5000/services")
          .then((res) => res.json())
          .then((data) => setServices(data));
      }, []);

      const history = useHistory();
      const handleFoodDetails = (props) =>{
  
        history.push(`/details/${props}`);
        
      }

    return{
        services,
        handleFoodDetails
    }
}
export default useServices;