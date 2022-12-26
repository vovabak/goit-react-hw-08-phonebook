import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from "redux/filter/selectors";
import { filterContacts } from '../../redux/filter/slice';
import { TextField } from '@mui/material';


export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    return (        
        <TextField            
            sx={{                        
                mt: 4,                
            }}            
            fullWidth           
            id="filter"            
            label="Find contacts by name"            
            variant="outlined"            
            type="text"               
            name="filter"             
            value={filter}            
            onChange={e => dispatch(filterContacts(e.currentTarget.value))}            
        />        
    )    
}