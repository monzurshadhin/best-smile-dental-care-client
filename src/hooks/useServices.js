import { useEffect, useState } from "react";
import { useHistory } from "react-router";

const useServices = () =>{

    const [services,setServices] = useState([])
    
    useEffect(() => {
        fetch("https://thawing-lowlands-95103.herokuapp.com/services")
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