// IMPORT JSX LAYOUTS
import ContainerJSX from "../../layouts/Container"

// IMPORT FRAMER MOTION LIBRARY
import { motion, useScroll, useAnimation, useMotionValueEvent } from "framer-motion"

// IMPORT USESTATE AND USEFFECT
import { useState, useEffect } from "react"

const Header = () => {

    const [ isScrolled, setIsScrolled ] = useState( false )

    useEffect(() => {

        const handleScroll = () => {

          setIsScrolled( window.scrollY > 1 )

        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

	const { scrollY } = useScroll()
    const squareVariants = {

        display: { y: 0, transition: { duration: .2 } },
        hide: { y: "-150%", transition: { duration: .4 } },

    }
    const controls = useAnimation( scrollY )
    useMotionValueEvent(scrollY, "change", (latest) => {

        let isScrollingDown = scrollY.getPrevious() - latest < 0;
        if( isScrollingDown && latest > 0 ){

            controls.start("hide")

        } else {

            controls.start("display")

        }


    })

    return(
        <header className="hidden md:block">
            <motion.header className={` ${ isScrolled ? "bg-black top-0" : "bg-transparent" } h-24 flex items-center w-full fixed z-50`}
                variants={ squareVariants }
                initial="display"
                animate={ controls }
            >
                <ContainerJSX>
                    <nav className="flex justify-between items-center">
                        <a href="/">
                            <div className="w-32 aspect-video">
                                <img
                                    src="/logos/logo.svg"
                                    alt=""
                                    className="w-32 aspect-video"
                                />
                            </div>
                        </a>
                        <div className="text-white cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </div>
                    </nav>
                </ContainerJSX>
            </motion.header>
        </header>
    )

}

export default Header
