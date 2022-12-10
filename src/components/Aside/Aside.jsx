import styles from './Aside.module.scss'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Chat from "../../pages/Chat";


const Aside = () => {
	return (
		<div className={styles.aside}>
			<ul className={styles.ul}>
                <BrowserRouter>
                    <li>
                        <a href='/'>@ Главная</a>
                        <NavLink to="/chat">@ Чаты</NavLink>
                        <a href='/'>@ Клиенты</a>
                        <a href='/'>@ Сотрудники</a>
                        <a href='/'>@ Задачи</a>
                        <a href='/'>@ Шаблоны</a>
                    </li>
                    <Routes>
                        <Route exact path="/chat" element={<Chat />} />
                    </Routes>
                </BrowserRouter>
			</ul> 
		</div>
	)
}

export default Aside