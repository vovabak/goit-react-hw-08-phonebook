import { useDispatch, useSelector } from "react-redux";
import { Button } from './UserMenu.styled';
import { logOut } from "redux/auth/operations";
import { selectUser } from "redux/auth/selectors";
import { Wrapper, UserInfo } from "./UserMenu.styled";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    return (
        <Wrapper>
            <UserInfo>{ user.email }</UserInfo>
            <Button                
                type="button"                
                onClick={() => dispatch(logOut())}>Log Out</Button>
        </Wrapper>
    )
}