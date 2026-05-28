import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
    return (
        <div>
              <div className="flex flex-col items-center gap-2 p-10">
        <Spinner size="xl" />
       
      </div>
        </div>
    );
};

export default loading;