import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.actions';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ?
        <div className='option' onClick={signOutStart}>SIGN OUT</div>
        : <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <CartIcon />
    </div>
    {hidden ? null : <CartDropDown />}
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);

// import React from 'react';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import { auth } from '../../firebase/firebase.utils';
// import CartIcon from '../cart-icon/cart-icon.component';
// import CartDropdown from '../cart-dropdown/cart-dropdown.component';
// import { selectCartHidden } from '../../redux/cart/cart.selectors';
// import { selectCurrentUser } from '../../redux/user/user.selectors';

// import { ReactComponent as Logo } from '../../assets/crown.svg';

// import {
//   HeaderContainer,
//   LogoContainer,
//   OptionsContainer,
//   OptionLink
// } from './header.styles';

// const Header = ({ currentUser, hidden }) => (
//   <HeaderContainer>
//     <LogoContainer to='/'>
//       <Logo className='logo' />
//     </LogoContainer>
//     <OptionsContainer>
//       <OptionLink to='/shop'>SHOP</OptionLink>
//       <OptionLink to='/shop'>CONTACT</OptionLink>
//       {currentUser ? (
//         <OptionLink as='div' onClick={() => auth.signOut()}>
//           SIGN OUT
//         </OptionLink>
//       ) : (
//         <OptionLink to='/signin'>SIGN IN</OptionLink>
//       )}
//       <CartIcon />
//     </OptionsContainer>
//     {hidden ? null : <CartDropdown />}
//   </HeaderContainer>
// );

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
//   hidden: selectCartHidden
// });

// export default connect(mapStateToProps)(Header);