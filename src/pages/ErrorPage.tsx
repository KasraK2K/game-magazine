import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()
    isRouteErrorResponse(error)

    return (
        <>
            <h1>Error...</h1>
            <p>{isRouteErrorResponse(error) ? 'Invalid Page' : 'Unexpected error'}</p>
        </>
    )
}

export default ErrorPage
