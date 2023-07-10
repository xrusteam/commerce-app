'use client';

import { useStoreModal } from '@/hooks/use-store-modal';
import { UserButton } from '@clerk/nextjs';
import { useEffect } from 'react';

const SetupPage = () => {
  const storeModal = useStoreModal();

  useEffect(() => {
    if (!storeModal.isOpen) {
      storeModal.onOpen();
    }
  }, [storeModal]);
  return <div className="p-4">Root page</div>;
};

export default SetupPage;
