import { ScissorsIcon, TableIcon, HomeIcon, CountdownTimerIcon, ExitIcon } from '@radix-ui/react-icons'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'


const Navigation = () => {
  return (
    <div className="fixed z-50 w-11/12 h-16 max-w-lg -translate-x-1/2 bg-[#2F2519] border border-black rounded-full bottom-4 left-1/2 dark:bg-black dark:border-black">
    <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
      <Link
        href="/admin/bangku"
        replace={false}
        data-tooltip-target="tooltip-kursi-pesanan"
        type="button"
        className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-black dark:hover:bg-black group"
      >
        <ScissorsIcon className="w-5 h-5 mb-1 text-white dark:text-black group-hover:text-white dark:group-hover:text-white" />
        <span className="sr-only">Kursi Pesanan</span>
      </Link>

      <Link
        href="/kursi-pesanan"
        data-tooltip-target="tooltip-kursi-pesanan"
        type="button"
        className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-black dark:hover:bg-black group"
      >
        <TableIcon className="w-5 h-5 mb-1 text-white dark:text-black group-hover:text-white dark:group-hover:text-white" />
        <span className="sr-only">Kursi Pesanan</span>
      </Link>

      <div className="flex items-center justify-center">
        <Link
          href={"/"}
          data-tooltip-target="tooltip-new"
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 font-medium bg-black rounded-full hover:bg-black group focus:ring-4 focus:ring-black focus:outline-none dark:focus:ring-black"
        >
          <HomeIcon color="white" width={25} height={25} />
          <span className="sr-only">New item</span>
        </Link>
      </div>

      <Link
        href="/"
        data-tooltip-target="tooltip-kursi-pesanan"
        type="button"
        className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-black dark:hover:bg-black group"
      >
        <CountdownTimerIcon className="w-5 h-5 mb-1 text-white dark:text-black group-hover:text-white dark:group-hover:text-white" />
        <span className="sr-only">Kursi Pesanan</span>
      </Link>

      <button
        onClick={() => signOut()}
        data-tooltip-target="tooltip-kursi-pesanan"
        type="button"
        className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-black dark:hover:bg-black group"
      >
        <ExitIcon className="w-5 h-5 mb-1 text-white dark:text-black group-hover:text-white dark:group-hover:text-white" />
        <span className="sr-only">Keluar</span>
      </button>
    </div>
  </div>
  )
}

export default Navigation