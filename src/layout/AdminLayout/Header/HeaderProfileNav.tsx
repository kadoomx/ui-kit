import {
    Badge, Dropdown, Nav, NavItem,
  } from 'react-bootstrap'
  import Image from 'next/image'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {
    faBell,
    faCreditCard,
    faEnvelopeOpen,
    faFile,
    faMessage,
    faUser,
  } from '@fortawesome/free-regular-svg-icons'
  import { PropsWithChildren } from 'react'
  import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
  import {
    faGear, faListCheck, faLock, faPowerOff,
  } from '@fortawesome/free-solid-svg-icons'
  import Link from 'next/link'
  import axios from 'axios'
  import { useRouter } from 'next/router'
  import UserIcon from '@mui/icons-material/Person'
  
  type NavItemProps = {
    icon: IconDefinition;
  } & PropsWithChildren
  
  const ProfileDropdownItem = (props: NavItemProps) => {
    const { icon, children } = props
  
    return (
      <>
        <FontAwesomeIcon className="me-2" icon={icon} fixedWidth />
        {children}
      </>
    )
  }
  
  export default function HeaderProfileNav() {
    const router = useRouter()
  
    const logout = async () => {
      const res = await axios.post('/api/mock/logout')
      if (res.status === 200) {
        router.push('/login')
      }
    }
  
    return (
      <Nav>
        <Dropdown as={NavItem}>
          <Dropdown.Toggle variant="link" bsPrefix="shadow-none" className="py-0 px-2 rounded-0" id="dropdown-profile">
            <div className="position-relative">
              <UserIcon sx={{height: '40px'}}/>
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu className="pt-0">
            <Dropdown.Header className="bg-light fw-bold rounded-top">Mi Cuenta</Dropdown.Header>
            <Link href="/" passHref legacyBehavior>
              <Dropdown.Item>
                <ProfileDropdownItem icon={faUser}>Perfil</ProfileDropdownItem>
              </Dropdown.Item>
            </Link>
  
            <Dropdown.Divider />
  
            <Dropdown.Item onClick={logout}>
              <ProfileDropdownItem icon={faPowerOff}>Cerrar sesión</ProfileDropdownItem>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    )
  }
