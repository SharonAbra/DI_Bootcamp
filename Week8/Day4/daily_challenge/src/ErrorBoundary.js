import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
        this.state = {
            error: '',
            errorInfo:null
        }
    }

    static getDerivedStateFromError(error) { 
        return {error: error.toString()}
      }

    componentDidCatch = (error, errorInfo) => {
        this.setState({
            error:error, 
            errorInfo:errorInfo
        })
    }

  render() {
    if(this.state.errorInfo){
    return (
        <>
            <div className="card my-5">
            <h2>Something went wrong.</h2>
            <details>{this.state.errorInfo.componentStack}</details>
                
            </div>
        </>
    )
    }
    return this.props.children
    }
}

export default ErrorBoundary;