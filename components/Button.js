import Router from 'next/router';
import { Github } from 'grommet-icons';

const handler = () => {
  Router.push({
    pathname: '/login',
    query: { client_id: '9f74492592efafdee22b' }
  });
};
export default function Button() {
  return (
    <Button
      primary
      icon={<Github />}
      label="Login with GitHub"
      color="neutral-1"
      onClick={handler}
    />
  );
}
