import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
    const { toggleCart } = React.useContext(AppContext);
    return (
        <IconButton aria-label="cart" onClick={toggleCart} >
            <StyledBadge badgeContent={1} color="info">
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
    );
}