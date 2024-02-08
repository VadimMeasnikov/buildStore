import './error404.scss'
import { Link } from 'react-router-dom'

export default function Error404() {
  return (
    <div className='error'>
        <div className="error-container">
            <h2 className='titleError'>К сожалению страница не найдена</h2>
            <p className='infoTextError'>Но мы обязательно все починим, а пока попробуйте:</p>
            <Link to='/' className='error_404_link'>Вернуться на главную</Link>
            <p className='text_404'>404</p>
        </div>
    </div>
  )
}
