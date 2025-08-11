import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Header = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/work', label: 'Work' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <motion.header
      className="fixed top-6 w-fit h-fit left-1/2 transform -translate-x-1/2 z-40 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg p-1 gap-1"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
        <nav className="w-fit h-fit flex items-center justify-between gap-1">
            {navItems.map((item) => (
          
                <Link
                  to={item.path}
                  className={` px-4 py-2  rounded-lg transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-white font-sm bg-white/20 shadow-md'
                      : 'text-white/54 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                 
                </Link>
            ))}
        </nav>
    </motion.header>
  )
}

export default Header