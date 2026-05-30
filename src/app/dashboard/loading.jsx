import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
    return (
        <div>
              <div className="flex flex-col gap-2 pt-20  items-center">
        <Spinner size="xl" />
       
      </div>
        </div>
    );
};

export default loading;