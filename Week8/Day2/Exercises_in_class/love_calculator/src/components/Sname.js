import { connect } from 'react-redux'
import {handleSname} from '../redux/actions'

const Sname = ({handleSname, sname}) => {
  return(
    <div>
      <input type="text" onChange={handleSname} /> {sname}
    </div>
  )
}

const mstp = (state) => {
  return {
    sname: state.sname
  }
}

const mdtp = (dispatch) => {
  return {
    handleSname: (e) => dispatch(handleSname(e.target.value))
  }
}

export default connect(mstp, mdtp)(Sname);
