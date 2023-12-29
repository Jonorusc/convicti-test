import Head from "next/head"
import { Montserrat } from "next/font/google"
import Button from "@/components/ui/Button"
import Typography from "@/components/ui/Text"
import Input from "@/components/ui/Input"
import SvgIcon from "@/components/ui/Icon/svg"
import Flex from "@/components/ui/Flex"

const montserrat = Montserrat({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Mb Psicologia - Technical Test</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://mbpsicologia.com.br/wp-content/uploads/2022/02/cropped-MBLO-32x32.png" sizes="32x32" />
      </Head>
      <main className={`${montserrat.className}`}>
        <Flex $align="flex-start" $direction="column" $gapX="1rem" $margin="1rem">
        <Button $active>Button</Button>
        <Typography $size="3rem" $weight={700} $color="black">
          <h5>Typography</h5>
        </Typography>
        <Input placeholder="Input" type="number"/>
        <SvgIcon name="trash" size={36} onClick={() => console.log('clicked')}/>
        </Flex>
      </main>
    </>
  )
}
