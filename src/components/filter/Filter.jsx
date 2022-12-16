import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from "redux/filter/selectors";
import { filterContacts } from '../../redux/filter/slice';
import { Label, FilterInput as Input } from '../contactForm/ContactForm.styled';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    return <Label>
                Find contacts by name
        <Input value = {filter} onChange={e => dispatch(filterContacts(e.currentTarget.value))} />
            </Label>;
}