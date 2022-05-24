import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center p-10 ">
            <div className="w-10 h-10 border-b-2 border-accent rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;