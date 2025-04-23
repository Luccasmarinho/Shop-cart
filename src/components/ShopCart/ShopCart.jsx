import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 5,
        border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
        padding: '0 4px',
    },
}));

export default function ShopCart() {
    const { allDataLocalStorage } = React.useContext(AppContext)

    return (
        <Link to={"/cart"}>
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={allDataLocalStorage.length} color="info">
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
        </Link>
    );
}