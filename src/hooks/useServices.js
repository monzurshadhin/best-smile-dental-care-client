import { useEffect, useState } from "react";
import { useHistory } from "react-router";

const useServices = () =>{

    const [services,setServices] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    
    useEffect(() => {
        // fetch("https://best-smile-dental-care-server.vercel.app/services")
        fetch("http://localhost/code/laravel-backend/public/api/services")
          .then((res) => res.json())
          .then((data) => setServices(data));
          setIsLoading(false);
      }, []);

      const history = useHistory();
      const handleFoodDetails = (props) =>{
  
        history.push(`/details/${props}`);
        
      }

    return{
        services,
        handleFoodDetails,
        isLoading
    }
}
export default useServices;