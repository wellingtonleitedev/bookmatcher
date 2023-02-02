interface IError {
  statusCode: number;
}

interface GetInitialProps {
  response: IError;
  exception: IError;
}

interface ErrorComponent<T = {}> extends React.FC<T> {
  getInitialProps: (props: GetInitialProps) => IError;
}

const Error: ErrorComponent<GetInitialProps["exception"]> = ({
  statusCode,
}) => {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
};

Error.getInitialProps = ({ response, exception }) => {
  const statusCode = response
    ? response.statusCode
    : exception
    ? exception.statusCode
    : 404;
  return { statusCode };
};

export default Error;
