import React from 'react'

function page({params: {noBangku}}: {params: {noBangku: "1" | "2" | "3" | "4"}}) {
  return (
    <div>
        NOMOR BANGKU: {noBangku}
    </div>
  )
}

export default page