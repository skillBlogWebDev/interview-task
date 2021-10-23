import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { LOGIN, PASSWORD } from '../../constants/constants';
import { login, password } from '../../redux/actions/actions';
import './styles.css';

const LoginForm = () => {
    const state = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handlerLogin = event => {
        dispatch(login(LOGIN, event.target.value));
    };

    const handlerPassword = event => {
        dispatch(password(PASSWORD, event.target.value));
    };

    return (
        <form className='form'>
            <input
             className='form__input' 
             type='text'
             onChange={handlerLogin}
            />
            <input
             className='form__input' 
             type='password'
             onChange={handlerPassword}
            />
            <Link
             className={`form__link ${
                state.login === (process.env.LOGIN || 'developer12') && 
                state.password === (process.env.PASSWORD || '123456') 
                ? '' 
                : 'form__link--disabled'}`}
             to='profile'
            >
             Войти
            </Link>
        </form>
    );
}

export default withRouter(LoginForm);