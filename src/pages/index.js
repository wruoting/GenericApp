import { useEffect } from 'react';
import get from 'lodash/get';
import { useRouter } from 'next/router';
import { routeToSearch } from '../redux/nodes/router/actions';

const Index = () => {
  const router = useRouter();
  const route = get(router, 'route', '/');

  return null;
};

export default Index;