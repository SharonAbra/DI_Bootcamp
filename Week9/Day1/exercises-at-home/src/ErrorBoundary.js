import React from 'react';

class ErrorBoundary extends React.Component {
  constructor() {
    super();
        this.state = {
            error: '',
            errorInfo: null
        }
    }

    componentDidCatch(error, errorInfo){
        this.setState({
          error:error,
          errorInfo:errorInfo
        })
      }

  render() {
    if(this.state.errorInfo){
        return (
            <>
                <h1>Something went wrong.</h1>
            </>
        )
    }
        return this.props.children
    }
}

export default ErrorBoundary;