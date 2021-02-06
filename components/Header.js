import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'

const Header = (props) => (
    <header id="header" className="alt">
        <Image
        className="pineImage"
        src="/static/images/RealizedPinecone2.png"
        alt="Realized Design Logo"
        width={60}
        height={50}
        quality={100}
        priority="true"
        layout="intrinsic"
        />
        <Link href="/">
            <a className="logo"><strong>Realized</strong> <span>Design & Build</span></a>
        </Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="#!">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
