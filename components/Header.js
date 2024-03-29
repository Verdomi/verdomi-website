import { ConnectButton } from "web3uikit"
import Link from "next/link"
import Image from "next/image"
import verdomi_text from "../images/verdomi_text.png"
import twitter_logo from "../images/twitter_logo.png"
import discord_logo from "../images/discord_logo.png"
import styles from "../styles/Home.module.css"

export default function Header() {
    function handleClick(icon) {
        if (icon == "twitter") {
            window.open("https://twitter.com/verdomi_eth", "_blank")
        } else if (icon == "discord") {
            window.open("https://discord.com/invite/EubDZQpdFw", "_blank")
        }
    }

    return (
        <nav className="p-5 border-b-2 flex flex-row justify-between items-center">
            {/*  <h1 className="py-4 px-4 font-bold text-3xl">Verdomi</h1> */}
            <Image src={verdomi_text} width={546 / 2} height={92 / 2} />
            <div className="flex flex-row items-center">
                <Link href="/">
                    <a className="mr-4 p-6">Mint</a>
                </Link>
                <Link href="/free-general-claim">
                    <a className="mr-4 p-6">Free Claim</a>
                </Link>
                <Link href="/paid-general">
                    <a className="mr-4 p-6">Buy General</a>
                </Link>
                <Link href="/my-achievements">
                    <a className="mr-4 p-6">Achievements</a>
                </Link>
                <div className="px-2">
                    <div className={styles.clickable}>
                        <Image
                            src={twitter_logo}
                            width={40}
                            height={40}
                            onClick={() => handleClick("twitter")}
                        ></Image>
                    </div>
                </div>
                <div className="px-2">
                    <div className={styles.clickable}>
                        <Image
                            src={discord_logo}
                            width={40}
                            height={40}
                            onClick={() => handleClick("discord")}
                        ></Image>
                    </div>
                </div>
                <ConnectButton moralisAuth={false} />
            </div>
        </nav>
    )
}
