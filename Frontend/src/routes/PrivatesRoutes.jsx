import { withAuthenticationRequired } from '@auth0/auth0-react'

function PrivateRoutes({ component }) {
  const Component = withAuthenticationRequired(component);
  return <Component />;
}

export default PrivateRoutes