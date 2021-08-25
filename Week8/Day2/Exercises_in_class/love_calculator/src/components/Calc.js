import { connect } from 'react-redux'
import {handleClick} from '../redux/actions'

const Calc = (props) => {
  return (
    <div>
      <button onClick={()=>props.dispatch(handleClick(props.fname, props.sname))}>Click</button>
    </div>
  )
}

const mstp = (state) => {
  return {
    fname: state.fname,
    sname: state.sname
  }
}

// const mdtp = (dispatch) => {
//   return {
//     handleClick: (fname, sname) => dispatch(handleClick(fname, sname))
//   }
// }

export default connect(mstp)(Calc);

