import React from 'react';
import { useSelector } from 'react-redux/es/exports';

const useUserId = () => {
    const { userId } = useSelector(state => ({
        userId:state.userId
    }));

    return (userId);
};