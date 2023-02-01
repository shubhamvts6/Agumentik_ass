import React from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import WindowSize from '../../Utils/WindowSize';
import styles from './About.module.css';

const About = () => {
	const { newTheme } = React.useContext(ThemeContext);
	const [width] = WindowSize();
	const img =
		width < 650
			? 'https://github.com/himrd95/me_Himanshu/blob/main/src/assets/profile_pic_without_background.png?raw=true'
			: '/developer.gif';
	return (
		<div
			className={styles.container}
			style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
		>
			<div className={styles.first}>
				<img src={"/developer.gif"} alt='' />
			</div>
			<div className={styles.second}>
				<h1
					style={{ color: `${newTheme.title}` }}
					className={styles.heading}
				>
					About Us
				</h1>
				<div className={styles.borderBottom} />
				<p
					style={{ color: `${newTheme.para}` }}
					className={styles.aboutMe}
				>
					Hello! The term UI/UX stands for user interface/user experience 
					design and refers to the practice of designing digital products 
					with a user-first approach. <br />
					<br /> In other words, the point of UI/UX design is to create a product 
					that will be both visually appealing and highly pleasant to interact with.
					A common misconception is that UI and UX come down to the same thing and that 
					they are just one discipline, but that is not entirely true. 
					  
					<span style={{ color: `#00a0a0` }}>
						{' '}
						“The next big thing is the one that makes the last big thing usable.”
					</span>
					.
				</p>
			</div>
		</div>
	);
};

export default About;
