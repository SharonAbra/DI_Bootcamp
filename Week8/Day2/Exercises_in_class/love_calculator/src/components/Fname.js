import { connect } from 'react-redux'
import {handleFname} from '../redux/actions'

const Fname = ({handleFname, fname}) => {
  return(
    <div>
      <input type="text" onChange={handleFname} /> {fname}
      {/* <input type="text" onChange={(e) => props.dispatch(handleFname(e.target.value))} /> {props.fname} */}
      {/* // if we do not need mapStateToProps, then the dispatch can be in the props like the line above */}
    </div>
  )
}

const mstp = (state) => {
  return {
    fname: state.fname
  }
}

const mdtp = (dispatch) => {
  return {
    handleFname: (e) => dispatch(handleFname(e.target.value))
  }
}

export default connect(mstp, mdtp)(Fname);
