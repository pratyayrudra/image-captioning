import React from 'react';
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavLink to='/'>
					<h1>ImageCaption</h1>
				</NavLink>
				{/* <Bars />
				<NavMenu>
					<NavLink to='/about' activeStyle>
						About
					</NavLink>
					<NavLink to='/services' activeStyle>
						Services
					</NavLink>
					<NavLink to='/singup' activeStyle>
						Signup
					</NavLink>
				</NavMenu>
				<NavBtn>
					<NavBtnLink to='/sigin'>SignIn</NavBtnLink>
				</NavBtn> */}
			</Nav>
		</>
	);
};

export default Navbar;
