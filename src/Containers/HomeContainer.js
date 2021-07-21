import { connect } from 'react-redux'
import { addToCart } from '../Services/Actions/Actions'

import Home from '../Components/Home'
const mapStateToProps = staate => ({

})
const mapDispatchToProps = dispatch => ({
  addToCartHandler: data = dispatch(addToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
// export default Home;