import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'

const Header = (props) => (
    <header id="header" className="alt">
        <div className="pineImage">
        <Image
        src="/static/images/RealizedPinecone.png"
        alt="Realized Design Logo"
        width={55}
        height={50}
        quality={75}
        priority="true"
        layout="intrinsic"
        />
        </div>
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
