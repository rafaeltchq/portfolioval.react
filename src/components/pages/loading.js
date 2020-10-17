import React from 'react';
import LoadingOverlay from 'react-loading-overlay';
import './loading.scss';
const LoadingPage = ({ active }) => {
    return (
        <LoadingOverlay
            active={active}
            spinner
            styles={{
                overlay: (base) => ({
                  ...base,
                  background: 'rgba(0, 0, 0, 0.5)'
                })
              }}
            text='Loading your content...'
        >
        </LoadingOverlay>
    )
};

export default LoadingPage;