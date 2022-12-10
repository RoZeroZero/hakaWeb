import styles from './Header.module.scss'

const Profile = () => {
	return (
		<div className={styles['profile-wrapper']}>
			<div className={styles.notification}>
				<i className='bx bxs-bell'></i>
				<span></span>
			</div>
			<div className={styles.profile}>
				<i className='bx bx-caret-down'></i>
			</div>
		</div>
	)
}

export default Profile
