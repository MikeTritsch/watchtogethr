import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>Also, we've been trying to reach you regarding your vehicle's extended warranty.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}