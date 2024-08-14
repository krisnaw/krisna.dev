import Image from "next/image";

function TopAvatar() {
    return (
        <Image className="inline-block h-10 w-10 rounded-full"
               width={256}
               height={256}
             src={'/profile.png'}
             alt=""/>
    )
}

export default TopAvatar;