import { Suspense } from 'react';
import LoginComponent from './LoginComponent';
import Loader from '@/components/general/Loader';

export default function LoginPage() {
  return (
    <Suspense fallback={<Loader />}>
      <LoginComponent />
    </Suspense>
  );
}
