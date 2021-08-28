import { Link } from 'react-router-dom';

export const Navbar = () => {
  return(
      <>
        <header class="bg-dark-gray w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
          <nav class="f6 fw6 tracked">
            <Link  to='/' class="link dim white dib mr3">MovieSeriesInfo</Link>
          </nav>
        </header>
      </>
      )
}