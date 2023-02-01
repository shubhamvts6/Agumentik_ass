import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { ThemeContext } from './ContextProvider/ThemeContext';

function App() {
	const [state, setState] = useState(false);
	const { newTheme, open, handleMenu } =
		React.useContext(ThemeContext);
	const scrollRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			setState(true);
		}, 2200);
	}, []);

	return (
		<React.Fragment>
			{!state ? (
				<div
					style={{
						background: `${newTheme.background}`,
					}}
					className='logoStart'
				>
					<img
						src='https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?size=626&ext=jpg&ga=GA1.1.1963182980.1648578539'
						alt='logo'
					/>
				</div>
			) : (
				<div className='components'>
					<div
						style={{
							background: `${newTheme.menuBackground}`,
							color: `${newTheme.title}`,
							left: `${open ? '-100vw' : '0'}`,
						}}
						className='links'
					>
						<a onClick={handleMenu} href='#home'>
							Home
						</a>
						<a onClick={handleMenu} href='#about'>
							About
						</a>
						

						<a onClick={handleMenu} href='#projects'>
							Projects
						</a>
						<a onClick={handleMenu} href='#techStacks'>
							Profeciencies
						</a>
						<a onClick={handleMenu} href='#contact'>
							Contact
						</a>
					</div>
					<Navbar />
					<Home scrollRef={scrollRef} />
				</div>
			)}
		</React.Fragment>
	);
}

export default App;
