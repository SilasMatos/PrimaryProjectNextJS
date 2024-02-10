import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import { Search } from './Search'
import { ItemMenu } from './ItemMenu'
import IconUser from '@/assets/icon-user.svg'

export function Header() {
  return (
    <header className="relative flex items-center w-full h-20 bg-primary-orange ">
      <div className="absolute top-0 right-0 bg-primary-blue w-[19%] h-full "></div>
      <div className="flex justify-center items-center w-full  max-w-[1246px] px-[15px] mx-auto">
        <div className="flex flex-1 items-center justify-between">
          <div className="flex items-center gap-14 ">
            <Image src={Logo} alt="Logo" />

            <ul className="flex items-center gap-12">
              <li>
                <ItemMenu name="Pra Você" />
              </li>
              <li>
                <ItemMenu name="Para empresas" />
              </li>
              <li>
                <ItemMenu name="Serviços" />
              </li>
              <li>
                <ItemMenu name="Ajuda" />
              </li>
            </ul>
          </div>

          <Search />
        </div>
        <button className=" flex items-center gap-3 z-10 bg-primary-blue h-20 pl-10">
          <Image src={IconUser} alt="Icon User" />
          <span className="text-white font-bold">Acessar Conta</span>
        </button>
      </div>
    </header>
  )
}
