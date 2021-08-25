import { connect } from 'react-redux'

const Res = ({results}) => {
  const {fname,sname,percentage,result} = results
  return(
    <div>
      Results:
      <div>{fname} & {sname}</div>
      <div>precatntage: {percentage}</div>
      <div>result: {result}</div>
    </div>
  )
}

const mstp = (state) => {
  return {
    results: state.results
  }
}

export default connect(mstp)(Res);
