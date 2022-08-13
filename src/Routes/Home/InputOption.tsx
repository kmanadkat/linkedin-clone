import './InputOption.scss'

interface InputOptionProps {
  Icon: any
  color: string
  title: string
}

const InputOption = ({ Icon, color, title }: InputOptionProps) => {
  return (
    <div className="inputOption">
      <Icon style={{ color }} />
      <h4>{title}</h4>
    </div>
  )
}

export default InputOption
