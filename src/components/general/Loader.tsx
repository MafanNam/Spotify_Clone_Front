interface IProps {
    size?: string
    className?: string
}

export default function Loader({size, className}: IProps) {
    return (
      <div className={`animate-spin border-2 border-white ${size === 'xl' ? 'w-[60px] h-[60px]' : 'w-[25px] h-[25px]'} rounded-full border-t-2 border-t-gray-400 ${className}`} />
    )
}